"use client"

import * as React from 'react';
import { OrderPartial, ProductVariantPartial } from '@/lib/type';
import { GET_ACTIVE_ORDER } from '@/queries/get-active-order';
import { query, useQuery } from '@/lib/test';
import { ADD_ITEM_TO_ORDER, GET_PRODUCT_DETAIL } from '@/lib/document';
import { VendureAsset } from '@/components/tienda/prueba/VendureAsset';
import { OrderContents } from '@/components/tienda/prueba/OrderContents';
import { formatCurrency } from '@/lib/utils';

const ProductosPrueba = ({params}: {params: {slug: string}}) => {
const paramsSlug = params.slug
  const [selectedVariant, setSelectedVariant] =
    React.useState<ProductVariantPartial>();
  const [activeOrder, setActiveOrder] = React.useState<OrderPartial>();
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
          </div>
          <form method="post" onSubmit={addItem}>
            <input name="quantity" type="number" min="0" defaultValue={1} />
            <button type="submit">Add to cart</button>
          </form>
        </div>
      )}
      {activeOrder && <OrderContents order={activeOrder} />}
    </div>
  );
}

export default ProductosPrueba