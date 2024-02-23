'use client';

import {
  EligibleShippingMethodsData,
  OrderData,
  OrderPartial,
  ProductData,
  SelectedOptions,
} from '@/lib/type';
import { GET_ACTIVE_ORDER } from '@/queries/get-active-order';
import { query, useQuery } from '@/lib/use-query';
import {
  ADD_ITEM_TO_ORDER,
  ADD_SHIPPING_METHOD,
  GET_ELIGIBLE_SHIPPING_METHODS,
  GET_PRODUCT_DETAIL,
} from '@/lib/document';
import { cn, formatCurrency, removeHTMLTags } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/productVariantDetailsAccordion';
import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Home,
  Pencil,
  ShoppingCart,
  Truck,
} from 'lucide-react';
import Image from 'next/image';
import { ProductDetailedTabs } from '@/components/tienda/productos/ProductDetailedTabs';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { match } from 'assert';

const ProductosPrueba = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: { optionName: string; optionPrice: number } | null;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState(false);
  const [variantId, setVariantId] = useState('');
  const [variantPrice, setVariantPrice] = useState(0);
  const [activeOrder, setActiveOrder] = useState<OrderPartial>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBuyNow, setIsLoadingBuyNow] = useState(false);
  const paramsSlug = params.slug;
  const { data: orderData } = useQuery<OrderData>(GET_ACTIVE_ORDER);
  const { data: eligibleShippingMethodsData } =
    useQuery<EligibleShippingMethodsData>(GET_ELIGIBLE_SHIPPING_METHODS);
  const {
    data: productData,
    loading,
    error,
  } = useQuery<ProductData>(GET_PRODUCT_DETAIL, {
    slug: paramsSlug,
  });

  if (orderData?.activeOrder && !activeOrder) {
    setActiveOrder(orderData.activeOrder as any);
  }

  const findMatchingVariant = (
    selectedOptions: SelectedOptions,
    productData: ProductData | null
  ) => {
    return productData?.product.variants.find((variant) => {
      const variantOptions = variant.options.map((option) => option.name);
      const selectedOptionNames = Object.keys(selectedOptions).map(
        (groupName) => {
          const selectedOption = selectedOptions[groupName];
          if (selectedOption !== null) {
            return selectedOption.optionName;
          }
          return '';
        }
      );

      if (variantOptions.length === selectedOptionNames.length) {
        return variantOptions.every((option) =>
          selectedOptionNames.includes(option)
        );
      }
      return false;
    });
  };

  useEffect(() => {
    const matchingVariant = findMatchingVariant(selectedOptions, productData);
    if (matchingVariant) {
      setVariantId(matchingVariant.id);
      setSelectedVariant(true);
      setVariantPrice(matchingVariant.price);
    } else {
      console.log('No matching variant found.');
    }
  }, [selectedOptions, productData]);

  const addItem = async () => {
    if (!selectedVariant) {
      toast.error(
        'Selecciona las características del producto antes de añadirlo al carrito'
      );
    } else {
      setIsLoadingBuyNow(true);
      const result = await query(ADD_ITEM_TO_ORDER, {
        productVariantId: variantId,
        quantity: 1,
      });
      toast.success('Producto añadido al carrito.');
      setIsLoadingBuyNow(false);
      router.push('/tienda/resumen-de-compra');
      if (result.data.addItemToOrder.__typename !== 'Order') {
        // An error occurred!
        window.alert(result.data.addItemToOrder.message);
      } else {
        setActiveOrder(result.data.addItemToOrder);
        setSelectedVariant(false);
      }
    }
  };

  const addItemAndGoBackToShop = async () => {
    if (!selectedVariant) {
      toast.error(
        'Selecciona las características del producto antes de añadirlo al carrito'
      );
    } else {
      setIsLoading(true);
      const result = await query(ADD_ITEM_TO_ORDER, {
        productVariantId: variantId,
        quantity: 1,
      });
      toast.success('Producto añadido al carrito.');
      setIsLoading(false);
      router.push('/tienda');
      if (result.data.addItemToOrder.__typename !== 'Order') {
        // An error occurred!
        window.alert(result.data.addItemToOrder.message);
      } else {
        setActiveOrder(result.data.addItemToOrder);
        setSelectedVariant(false);
      }
    }
  };

  const handleCheckboxChange = (
    optionGroup: string,
    optionName: string,
    optionPrice: number
  ) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions[optionGroup]?.optionName === optionName) {
        // Deselect if the same checkbox is clicked
        const updatedOptions = { ...prevSelectedOptions };
        updatedOptions[optionGroup] = null;
        return updatedOptions;
      } else {
        // Select the new checkbox
        const updatedOptions = { ...prevSelectedOptions };
        updatedOptions[optionGroup] = { optionName, optionPrice };
        return updatedOptions;
      }
    });
  };

  const clearSelectedOptions = (groupName: string) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      updatedOptions[groupName] = null;
      return updatedOptions;
    });
  };

  const optionPricesArray = Object.values(selectedOptions)
    .map((option: any) => (option ? option.optionPrice : 0))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const optionPricesArrayWithTax =
    optionPricesArray + (7 / 100) * optionPricesArray;

  const totalPrice = formatCurrency(variantPrice);

  const totalPriceWithTax = formatCurrency(variantPrice);

  console.log('optionPricesArray', optionPricesArray);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full border-t-4 border-black h-16 w-16"></div>
      </div>
    );

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="xl:px-10 py-20 flex flex-col space-y-4">
      <div className="py-4">
        <ul className="flex space-x-4">
          <Link href="/">
            <li className="flex space-x-4 items-center">
              <Home />
              <p className="text-lg font-semibold">Home</p>
              <ChevronRight />
            </li>
          </Link>
          <Link href="/tienda">
            <li className="flex space-x-4 items-center">
              <p className="text-lg font-semibold">Tienda</p>
              <ChevronRight />
            </li>
          </Link>
          <li>
            <p className="text-lg font-bold">{productData?.product.name}</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col xl:flex-row xl:bg-black mb-10">
        {productData?.product?.featuredAsset?.preview && (
          <Image
            src={productData.product.featuredAsset.preview}
            alt="Product Preview"
            width={600}
            height={600}
            className="bg-white object-center"
          />
        )}
        <div className="xl:h-[500px] bg-black space-y-4 flex flex-col p-4 xl:p-10">
          <p className="text-white font-semibold text-lg">
            {productData?.product.name}
          </p>
          <p className="text-white max-w-xl">
            {removeHTMLTags(productData?.product.description)}
          </p>
          {productData?.product.variants[0].price && (
            <p className="text-white text-3xl">
              {formatCurrency(productData.product.variants[0].price)}
            </p>
          )}
          <ProductDetailedTabs
            description={removeHTMLTags(
              productData?.product.customFields.Descripcion_Extra
            )}
            specifications={removeHTMLTags(
              productData?.product.customFields.Especificaciones_Del_Producto
            )}
            designRules={removeHTMLTags(
              productData?.product.customFields.Normas_De_Diseno
            )}
            orderProcess={removeHTMLTags(
              productData?.product.customFields.Proceso_De_Pedido
            )}
          />
          <div className="flex space-x-10">
            <Link href="#selectOptions" className="flex gap-x-4">
              <Button
                variant="default"
                className={cn('bg-main gap-x-4 w-60 text-black bg-first')}
              >
                <ShoppingCart />
                <p className="text-[16px]">Añadir al carrito</p>
                <ArrowRight />
              </Button>
            </Link>
            <Link href="/formatos" target="_blank">
              <Button
                variant="ghost"
                className="gap-x-4 border border-white py-4"
              >
                <p className="text-[16px] text-white ">Ver formatos</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-1 xl:grid-cols-6 gap-y-10 xl:gap-y-0 py-10 px-4 xl:px-0"
        id="selectOptions"
      >
        <div className="flex flex-col space-y-10 col-span-4">
          {productData?.product.optionGroups.map(
            (optionGroup, index: number) => (
              <div key={optionGroup.name}>
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value="item-1"
                    className={cn(
                      'border border-black/60 xl:mx-4',
                      selectedOptions[optionGroup.name]
                        ? 'border-green-400'
                        : 'data-[state=open]:border-blue-300'
                    )}
                  >
                    <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                      <span className="px-2 rounded-full border border-black mr-4">
                        {index + 1}
                      </span>
                      <div className="w-full text-left">{optionGroup.name}</div>
                      {selectedOptions[optionGroup.name] ? (
                        <Check className="text-green-500" />
                      ) : (
                        <Pencil className="w-5 h-5" />
                      )}
                    </AccordionTrigger>
                    <AccordionContent className="text-black/60 text-lg mx-4 px-4 xl:px-20">
                      <div className="grid grid-cols-2 xl:grid-cols-8 gap-y-4">
                        {optionGroup.options.map((option) => (
                          <div key={option.name} className="xl:col-span-3">
                            <input
                              type="checkbox"
                              className="mr-2 col-span-1"
                              checked={
                                selectedOptions[optionGroup.name]
                                  ?.optionName === option.name
                              }
                              onChange={() =>
                                handleCheckboxChange(
                                  optionGroup.name,
                                  option.name,
                                  option.customFields.price
                                )
                              }
                            />
                            <label htmlFor={`checkbox-${option.name}`}>
                              {option.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )
          )}
        </div>
        <div className="border border-black/20 col-span-2 rounded-xl p-10">
          <h5 className="font-bold text-2xl">Resumen del producto</h5>
          {productData?.product.optionGroups.map((option, i) => (
            <div className="grid grid-cols-1 py-6 gap-y-10" key={i}>
              <div>
                <button
                  onClick={() => clearSelectedOptions(option.name)}
                  className="w-full text-end text-lg"
                >
                  Cambiar
                </button>
                <h6 className="text-black/70 text-xl pb-2">{option.name}</h6>
                <p className="text-black/70 pb-4">
                  {selectedOptions[option.name]?.optionName}
                </p>
                <div className="w-full bg-black h-[1px] opacity-40" />
              </div>
            </div>
          ))}
          <div className="flex flex-col py-2 justify-end space-y-2">
            <h6 className="text-black/70 text-xl">Precio final</h6>
            <div className=""></div>
            <p className="text-end text-xl font-semibold">{totalPrice}</p>
            <p className="text-gray-500/70 text-xs text-end">
              Los impuestos se calcularán al final del proceso.
              <span className="text-red-500"> *</span>
            </p>
          </div>
          <Button
            variant="defaultBlack"
            className="text-lg w-full mt-4"
            onClick={addItemAndGoBackToShop}
          >
            {isLoading ? (
              <div className="flex items-center justify-center h-[300px]">
                <div className="animate-spin rounded-full border-t-4 border-white h-4 w-4"></div>
              </div>
            ) : (
              <p>Añadir y seguir comprando</p>
            )}
          </Button>
          <Button
            variant="defaultBlack"
            className="text-lg w-full mt-4"
            onClick={addItem}
          >
            {isLoadingBuyNow ? (
              <div className="flex items-center justify-center h-[300px]">
                <div className="animate-spin rounded-full border-t-4 border-white h-4 w-4"></div>
              </div>
            ) : (
              <p>Comprar ahora</p>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductosPrueba;
