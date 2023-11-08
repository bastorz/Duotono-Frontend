"use client"

import * as React from 'react';
import { OrderData, OrderPartial, ProductData, SelectedOptions } from '@/lib/type';
import { GET_ACTIVE_ORDER } from '@/queries/get-active-order';
import { query, useQuery } from '@/lib/test';
import { ADD_ITEM_TO_ORDER, GET_PRODUCT_DETAIL } from '@/lib/document';
import { cn, formatCurrency } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/productVariantDetailsAccordion';
import { useEffect, useState } from 'react';
import { ArrowRight, Check, ChevronRight, Home, Link, Pencil, ShoppingCart } from 'lucide-react';
import Image from "next/image";
import { ProductDetailedTabs } from '@/components/tienda/productos/ProductDetailedTabs';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const ProductosPrueba = ({params}: {params: {slug: string}}) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { optionName: string; optionPrice: number } | null }>({});
  const [selectedVariant, setSelectedVariant] = useState(false);
  const [variantId, setVariantId] = useState("");
  const [activeOrder, setActiveOrder] = React.useState<OrderPartial>();
  const paramsSlug = params.slug
  const { data: orderData } = useQuery<OrderData>(GET_ACTIVE_ORDER);
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

  const findMatchingVariant = (selectedOptions: SelectedOptions, productData: ProductData | null) => {
    return productData?.product.variants.find((variant) => {
      const variantOptions = variant.options.map((option) => option.name);
      const selectedOptionNames = Object.keys(selectedOptions).map((groupName) => {
        const selectedOption = selectedOptions[groupName];
        if (selectedOption !== null) {
          return selectedOption.optionName;
        }
        return '';
      });
  
      if (variantOptions.length === selectedOptionNames.length) {
        return variantOptions.every((option) => selectedOptionNames.includes(option));
      }
      return false;
    });
  };

  useEffect(() => {
    const matchingVariant = findMatchingVariant(selectedOptions, productData);
    if (matchingVariant) {
      setVariantId(matchingVariant.id);
      setSelectedVariant(true)
    } else {
      console.log('No matching variant found.');
    }
  }, [selectedOptions, productData]);

  const addItem = async () => {
    if (!selectedVariant) {
      toast.error("Selecciona las características del producto antes de añadirlo al carrito")
    } else {
      const result = await query(ADD_ITEM_TO_ORDER, {
        productVariantId: variantId,
        quantity: 1,
      });
      if (result.data.addItemToOrder.__typename !== 'Order') {
        // An error occurred!
        window.alert(result.data.addItemToOrder.message);
      } else {
        setActiveOrder(result.data.addItemToOrder);
        setSelectedVariant(false)
      }
    }
  };

  const handleCheckboxChange = (optionGroup: string, optionName: string, optionPrice: number) => {
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

  const optionPricesArray = Object.values(selectedOptions).map((option: any) => (option ? option.optionPrice : 0)).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const optionPricesArrayWithTax = optionPricesArray + (7/100) * optionPricesArray
  const totalPrice = formatCurrency(productData?.product.variants[0].price + optionPricesArray)
  const totalPriceWithTax = formatCurrency(productData?.product.variants[0].priceWithTax + optionPricesArrayWithTax)


  return (
      <div className='px-20 py-20 flex flex-col space-y-4'>
        <div className=" py-4">
          <ul className='flex space-x-4'>
            <li className='flex space-x-4 items-center'>
              <Home/>
              <p className='text-lg font-semibold'>Home</p>
              <ChevronRight/>
            </li>
            <li className='flex space-x-4 items-center'>
            <p className='text-lg font-semibold'>Tienda</p>
              <ChevronRight/>
            </li>
            <li>
            <p className='text-lg font-bold'>{productData?.product.name}</p>
            </li>
          </ul>
        </div>
        <div className="flex w-full bg-black mb-10">
              {productData?.product?.featuredAsset?.preview && (
                <Image src={productData.product.featuredAsset.preview} alt="Product Preview" width={600} height={600} className='w-[600px] h-[600px] object-cover object-left'/>
              )}
              <div className="flex flex-col p-10">
                <div className="h-[500px] bg-black w-full space-y-4">
                    <p className="text-white font-semibold text-lg">{productData?.product.name}</p>
                    <p className="text-white max-w-xl">{productData?.product.description}</p>
                    {productData?.product.variants[0].price && (
                      <p className="text-white text-3xl">{formatCurrency(productData.product.variants[0].price)}</p>
                    )}
                <ProductDetailedTabs/>
                </div>
                <div className="flex gap-x-4">
                    <Button variant="default" className={cn("bg-main gap-x-4 w-60 text-black bg-first")} onClick={addItem}>
                      <ShoppingCart />
                      <p className="text-[16px]">Añadir al carrito</p>
                      <ArrowRight />
                    </Button>
                    <Button variant="ghost" className="gap-x-4 border border-white hover:bg-white group">
                    <p className="text-[16px] text-white group-hover:text-black">Necesito ayuda</p>
                    </Button>
                </div>
              </div>
        </div>
        {/* {activeOrder && <OrderContents order={activeOrder} />} */}
        <div className="grid grid-cols-6 py-10">
          <div className='flex flex-col space-y-10 col-span-4'>
            {productData?.product.optionGroups.map((optionGroup, index: number) => (
              <div key={optionGroup.name}>
                  <Accordion type="single" collapsible>
                      <AccordionItem value="item-1" className={cn("border border-black/60 mx-4", selectedOptions[optionGroup.name] ? "border-green-400" : "data-[state=open]:border-blue-300")}>
                          <AccordionTrigger className="font-semibold text-lg mx-4 flex">
                              <span className="px-2 rounded-full border border-black mr-4">{index + 1}</span>
                              <div className="w-full text-left">{optionGroup.name}</div>
                              {selectedOptions[optionGroup.name] ? (<Check className="text-green-500"/>) : (<Pencil className="w-5 h-5"/>)}
                          </AccordionTrigger>
                          <AccordionContent className="text-black/60 text-lg mx-4 px-20">
                          <div className="grid grid-cols-8 gap-y-4">
                              {optionGroup.options.map((option) => (
                                      <div key={option.name} className="col-span-3">
                                          <input
                                              type="checkbox"
                                              className="mr-2 col-span-1"
                                              checked={selectedOptions[optionGroup.name]?.optionName === option.name}
                                              onChange={() => handleCheckboxChange(optionGroup.name, option.name, option.customFields.price)}
                                          />
                                          <label htmlFor={`checkbox-${option.name}`}>{option.name}</label>
                                      </div>
                              ))}
                          </div>
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>
              </div>
            ))}
          </div>
          <div className="border border-black/20 col-span-2 rounded-xl p-10">
              <h5 className="font-bold text-2xl">Resumen del producto</h5>
              {productData?.product.optionGroups.map((option) => (
                  <div className="grid grid-cols-1 py-6 gap-y-10">
                      <div>
                          <button onClick={() => clearSelectedOptions(option.name)} className="w-full text-end text-lg">Cambiar</button>
                          <h6 className="text-black/70 text-xl pb-2">{option.name}</h6>
                          <p className="text-black/70 pb-4">{selectedOptions[option.name]?.optionName}</p>
                          <div className="w-full bg-black h-[1px] opacity-40"/>
                      </div>
                  </div>
              ))}
                <div className="flex flex-col py-2">
                  <h6 className="text-black/70 text-xl pb-2 ">Precio final</h6>
                  <div className=""></div>
                  <p className="text-end text-xl font-semibold">IVA EXCL. {totalPrice}</p>
                  <p className="text-end text-xl font-semibold">IVA INCL. {totalPriceWithTax}</p>
                  <Button variant="defaultBlack" className="mt-10 text-lg" onClick={addItem}>Pedir ahora</Button>
                </div>
           </div>
        </div>
      </div>
  );
}

export default ProductosPrueba

