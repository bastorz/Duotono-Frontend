"use client"

import * as React from 'react';
import { OrderPartial, ProductVariantPartial } from '@/lib/type';
import { GET_ACTIVE_ORDER } from '@/queries/get-active-order';
import { query, useQuery } from '@/lib/test';
import { ADD_ITEM_TO_ORDER, GET_PRODUCT_DETAIL } from '@/lib/document';
import { VendureAsset } from '@/components/tienda/prueba/VendureAsset';
import { OrderContents } from '@/components/tienda/prueba/OrderContents';
import { cn, formatCurrency } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/productVariantDetailsAccordion';
import { useState } from 'react';
import { Check, Pencil } from 'lucide-react';

const ProductosPrueba = ({params}: {params: {slug: string}}) => {
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { optionName: string; optionPrice: number } | null }>({});
  const [selectedVariant, setSelectedVariant] = useState<ProductVariantPartial>();
  const [activeOrder, setActiveOrder] = React.useState<OrderPartial>();

  const paramsSlug = params.slug
  const { data: orderData } = useQuery(GET_ACTIVE_ORDER);
  const {
    data: productData,
    loading,
    error,
  } = useQuery(GET_PRODUCT_DETAIL, {
    slug: paramsSlug,
  });

  if (orderData?.activeOrder && !activeOrder) {
    setActiveOrder(orderData.activeOrder);
  }

  if (productData?.product && !selectedVariant) {
    setSelectedVariant(productData.product.variants[0]);
  }

  const selectVariant = (e) => {
    const variantId = e.target.value;
    setSelectedVariant(
      productData.product.variants.find((v) => v.id === variantId)
    );
  };

  const addItem = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const form = e.target;
    const quantity = new FormData(form).get('quantity') ?? 1;
    const result = await query(ADD_ITEM_TO_ORDER, {
      variantId: selectedVariant.id,
      quantity,
    });
    if (result.data.addItemToOrder.__typename !== 'Order') {
      // An error occurred!
      window.alert(result.data.addItemToOrder.message);
    } else {
      setActiveOrder(result.data.addItemToOrder);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;



  //////////////////////////////////// A PARTIR DE AQUI VA LA FUNCIONALIDAD DE LOS ACORDEONES Y LOS INPUTS ///////////////////////////////////////////////



  const optionGroups = productData.product.optionGroups.map((optionGroup) => optionGroup)

  console.log("selectedVariant", optionGroups)

  const handleCheckboxChange = (groupName: string, optionName: string, optionPrice: number) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions[groupName]?.optionName === optionName) {
        // Deselect if the same checkbox is clicked
        const updatedOptions = { ...prevSelectedOptions };
        updatedOptions[groupName] = null;
        return updatedOptions;
      } else {
        // Select the new checkbox
        const updatedOptions = { ...prevSelectedOptions };
        updatedOptions[groupName] = { optionName, optionPrice };
        return updatedOptions;
      }
    });
  };

  return (
    <div className='p-20 flex flex-col space-y-4'>
      <h1>{productData.product.name}</h1>
      <p>{productData.product.description}</p>
      <VendureAsset
        preview={productData.product.featuredAsset.preview}
        preset="medium"
        alt={productData.product.name}
      />

      <select name="productVariantId" onChange={selectVariant}>
        {productData.product.variants.map((v) => (
          <option key={v.id} value={v.id}>
            {v.name}
          </option>
        ))}
      </select>
      {selectedVariant && (
        <div className="variant-details">
          <div className="flex">
            <div>{selectedVariant.sku}</div>
            <div className="stock-level">{selectedVariant.stockLevel}</div>
          </div>
          <div>
            <strong>
              {formatCurrency(
                selectedVariant.priceWithTax,
                selectedVariant.currencyCode
              )}
            </strong>
            <div>{selectedVariant.options.map((option) => option.name)}</div>
          </div>
          {/* <div>{selectedVariant.options}</div> */}
          <form method="post" onSubmit={addItem}>
            <input name="quantity" type="number" min="0" defaultValue={1} />
            <button type="submit">Add to cart</button>
          </form>
        </div>
      )}
      {activeOrder && <OrderContents order={activeOrder} />}

      <div>
      {optionGroups.map((optionGroup: any, index: number) => (
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
                                            {optionGroup.options.map((option: any) => (
                                                    <div key={option.name} className="col-span-3">
                                                        <input
                                                            type="checkbox"
                                                            className="mr-2 col-span-1"
                                                            checked={selectedOptions[optionGroup.name]?.optionName === option.name}
                                                            onChange={() => handleCheckboxChange(optionGroup.name, option.name, option.customFields.Price)}
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
    </div>
  );
}

export default ProductosPrueba