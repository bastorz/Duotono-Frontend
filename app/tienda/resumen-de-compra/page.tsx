"use client"

import { query, useQuery } from '@/lib/test';
import { OrderData, OrderPartial } from '@/lib/type';
import { GET_ACTIVE_ORDER, REMOVE_ITEM_FROM_ORDER } from '@/lib/document';
import { formatCurrency } from '@/lib/utils';
import { useState } from 'react';
import Image from "next/image";
import { ArrowRight, Pencil, ShoppingCart, Trash } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Prueba() {
  const [activeOrder, setActiveOrder] = useState<OrderPartial>();
  const { data: orderData, loading, error } = useQuery<OrderData>(GET_ACTIVE_ORDER);

  if (orderData?.activeOrder && !activeOrder) {
      setActiveOrder(orderData.activeOrder as any);
    } 

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

  const getTotalPrice = () => {
    if (activeOrder?.totalWithTax != undefined) {
      return activeOrder?.totalWithTax
    }
    return 0
  }

  const total = getTotalPrice()
  const igic = (7 / 100) * total
  const subTotal = total - igic

  return (
    <div className='px-32 py-20'>
      <h3 className="font-bold text-4xl pb-10">Resumen de compra</h3>
        {activeOrder ? (
          <div className='grid grid-cols-6 gap-x-10'>
              <div className='col-span-4 shadow-lg shadow-right shadow-left shadow-bottom p-10'>
                {activeOrder.lines.map((line) => (
                  <div key={line.id} className='grid grid-cols-5 py-10'>
                    <div className='col-span-1'>
                    {line.featuredAsset.preview && (
                      <Image src={line.featuredAsset.preview} alt="Product Preview" width={200} height={200} className='w-[200px] h-[200px] object-cover object-left rounded-xl'/>
                     )}
                    </div>
                    <div className='flex flex-col space-y-2 col-span-4 px-10'>
                      <div className='flex w-full justify-between'>
                        <div className='font-semibold pb-4 text-lg'>{line.productVariant.name}</div>
                        <p className='text-xl font-semibold text-slate-600'>
                          {formatCurrency(
                            line.linePriceWithTax,
                            activeOrder.currencyCode
                          )}
                        </p>
                      </div>
                      <div className='flex w-full justify-between'>
                          <div className='flex flex-col space-y-2'>
                              <div className='font-bold'>Detalles del producto</div>
                              <div className='bg-black h-[2px] w-44'></div>
                          </div>
                          <div className='flex space-x-4 items-center pt-2'>
                            <Link href={`http://localhost:3001/tienda/productos-prueba/${line.productVariant.name.toLowerCase().replace(/ /g, '-')}`}>
                              <Pencil/>
                            </Link>
                            <button onClick={() => removeItem(line.id)}>
                              <Trash/>
                            </button>
                          </div>
                      </div>
                      <div className='py-4'>
                        {line.productVariant.options.map((option) => (
                          <div className='flex space-x-4 py-1 items-center'>
                            <div className='font-bold'>{option.code}:</div>
                            <div className=''>{option.name}</div>
                          </div>
                        ))}
                      </div>
                      <div className='w-full bg-black px-2 h-[1px]'/>
                    </div>
                  </div>
                  
                ))}
              </div>
              <div className='col-span-2 bg-black rounded-xl p-8'>
                <div className=''>
                  <h4 className='font-semibold text-2xl text-white mb-4'>Resumen</h4>
                  {activeOrder.lines.map((line) => (
                  <div className='flex items-center justify-between space-y-4'>
                    <p className=' text-white/80'>{line.productVariant.name}</p>
                    <p className=' text-white/80'>{formatCurrency(line.linePriceWithTax)}</p>
                  </div>
                  ))}
                </div>
                <div className='w-full bg-white px-2 h-[1px] mt-4'/>
                <div className='flex flex-col py-6 space-y-10'>
                  <div className='flex flex-col space-y-2'>
                    <div className='flex justify-between'>
                      <p className=' text-white/80'>Subtotal</p>
                      <p className=' text-white/80'>{formatCurrency(subTotal)}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className=' text-white/80'>IGIC</p>
                        <p className=' text-white/80'>{formatCurrency(igic)}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className=' text-white/80'>Total</p>
                        <p className=' text-white/80'>{formatCurrency(activeOrder.totalWithTax)}</p>
                    </div>
                  </div>
                    <Button className='font-semibold'>
                      <ShoppingCart className='mr-4'/>
                      Pedir ahora
                      <ArrowRight className='ml-3'/>
                    </Button>
                    <div className='flex justify-between'>
                      <p className=' text-white/80'>Siguiente</p>
                      <p className=' text-white/80'>Pago / Datos de entrega / Envío de documentos</p>
                    </div>
                  </div>
              </div>
          </div>
        ) : (
          <div>Order is empty</div>
        )}
    </div>
  );
}
