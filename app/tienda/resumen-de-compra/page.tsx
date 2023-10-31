"use client"

import { query, useQuery } from '@/lib/test';
import { OrderPartial } from '@/lib/type';
import { ADD_ITEM_TO_ORDER, ADJUST_ORDER_LINE, GET_ACTIVE_ORDER, REMOVE_ITEM_FROM_ORDER } from '@/lib/document';
import { VendureAsset } from '@/components/tienda/prueba/VendureAsset';
import { formatCurrency } from '@/lib/utils';
import { useState } from 'react';

export default function Prueba() {
  const [activeOrder, setActiveOrder] = useState<OrderPartial>();
  const { data, loading, error } = useQuery(GET_ACTIVE_ORDER);

  if (data?.activeOrder && !activeOrder) {
      setActiveOrder(data.activeOrder);
    } 

  const addItem = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser from reloading the page
    event.preventDefault();
    // Read the form data
    const form = event.target;
    const variantId = new FormData(form).get('productVariantId');
    const result = await query(ADD_ITEM_TO_ORDER, {
      productVariantId: variantId,
      quantity: 1,
    });
    if (result.data.addItemToOrder.__typename !== 'Order') {
      // An error occurred!
      window.alert(result.data.addItemToOrder.message);
    } else {
      setActiveOrder(result.data.addItemToOrder);
    }
  };

  const adjustOrderLine = async (orderLineId: string, quantity: number) => {
    const result = await query(ADJUST_ORDER_LINE, {
      orderLineId,
      quantity,
    });
    if (result.data.adjustOrderLine.__typename !== 'Order') {
      // An error occurred!
      window.alert(result.data.adjustOrderLine.message);
    } else {
      setActiveOrder(result.data.adjustOrderLine);
    }
  };

  const removeItem = async (orderLineId: string) => {
    const result = await query(REMOVE_ITEM_FROM_ORDER, {
      orderLineId,
    });
    if (result.data.removeOrderLine.__typename !== 'Order') {
      // An error occurred!
      window.alert(result.data.removeOrderLine.message);
    } else {
      setActiveOrder(result.data.removeOrderLine);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='px-32 py-20'>
              <form method="post" onSubmit={addItem}>
        <select name="productVariantId">
          <option value="77">Balloon Chair</option>
          <option value="2">Twin Lens Camera</option>
          <option value="3">Boxing Gloves</option>
          <option value="4">Spiky Cactus</option>
        </select>
        <button type="submit">Add to order</button>
      </form>
        <h3 className="font-bold text-4xl">Resumen de compra</h3>
      <div className='shadow-lg shadow-right shadow-left shadow-bottom p-10'>
        {activeOrder ? (
          <table>
            <tbody>
              {activeOrder.lines.map((line) => (
                <div key={line.id} className='grid grid-cols-5'>
                  <div className='col-span-1'>
                    <VendureAsset
                      preview={line.featuredAsset.preview}
                      preset="tiny"
                      alt={line.productVariant.name}
                    />
                  </div>
                  <div className='flex flex-col space-y-2 col-span-4'>
                    <div className='font-semibold'>{line.productVariant.name}</div>
                    <div>{line.productVariant.description ? line.productVariant.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</div>
                    <div className='font-bold'>Detalles del producto</div>
                    <div className='bg-black h-[2px] w-44'></div>
                    <div className='font-bold'>Personalización:</div>
                  </div>
                  <td>
                    <div className="qty-cell">
                      <button
                        onClick={() => adjustOrderLine(line.id, line.quantity - 1)}
                      >
                        -
                      </button>
                      <span>{line.quantity}</span>
                      <button
                        onClick={() => adjustOrderLine(line.id, line.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button onClick={() => removeItem(line.id)}>remove</button>
                  </td>
                  <td>
                    {formatCurrency(
                      line.linePriceWithTax,
                      activeOrder.currencyCode
                    )}
                  </td>
                </div>
              ))}
              <tr className="totals">
                <td></td>
                <td>Total</td>
                <td>{activeOrder.totalQuantity}</td>
                <td>
                  {formatCurrency(
                    activeOrder.totalWithTax,
                    activeOrder.currencyCode
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>Order is empty</div>
        )}
      </div>
    </div>
  );
}
