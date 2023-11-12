"use client"

import { query, useQuery } from '@/lib/use-query';
import { ClientSecret, EligibleShippingMethodsData, OrderData, OrderPartial } from '@/lib/type';
import { GET_ACTIVE_ORDER, REMOVE_ITEM_FROM_ORDER, GET_ELIGIBLE_SHIPPING_METHODS, ADD_SHIPPING_METHOD, ADD_CUSTOMER_FOR_ORDER, ADD_SHIPPING_ADDRESS, ADD_BILLING_ADDRESS, TRANSITION_ORDER_TO_ARRANGING_PAYMENT, ADD_PAYMENT_TO_ORDER, GET_CLIENT_SECRET, TRANSITION_ORDER_TO_CANCELLED } from '@/lib/document';
import { cn, formatCurrency } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { ArrowRight, Circle, CreditCard, Home, Pencil, ShoppingCart, Trash } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { StripePayments } from '@/components/tienda/checkout/payment';
import { useRouter } from 'next/navigation';

export default function Prueba() {
  const [activeOrder, setActiveOrder] = useState<OrderPartial>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [company, setCompany] = useState<string>("No tengo empresa");
  const [phone, setPhone] = useState<string>();
  const [postalCode, setPostalCode] = useState<string>()
  const [streetLine, setStreetLine] = useState<string>()
  const [country, setCountry] = useState<string>()
  const [city, setCity] = useState<string>()
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<string>();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>();
  const [selectedStripe, setSelectedStripe] = useState(false);
  const [selectedBizum, setSelectedBizum] = useState(false);
  const [successConfiguration, setSuccessConfiguration] = useState(false)
  const [clientSecretUpdated, setClientSecretUpdated] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState<string>("")
  const { data: orderData, loading, error } = useQuery<OrderData>(GET_ACTIVE_ORDER);
  const { data: eligibleShippingMethodsData } = useQuery<EligibleShippingMethodsData>(GET_ELIGIBLE_SHIPPING_METHODS);
  const { data: clientStripePaymentIntent } = useQuery<ClientSecret>(
    GET_CLIENT_SECRET,
    { clientSecret: clientSecretUpdated },
    [clientSecretUpdated] // Include the variable here to trigger re-fetch
  );
  const router = useRouter()

  useEffect (() => {
    if (clientStripePaymentIntent?.createStripePaymentIntent !== undefined) {
      setClientSecret(clientStripePaymentIntent?.createStripePaymentIntent)
    }
  }, [clientStripePaymentIntent?.createStripePaymentIntent])

  if (orderData?.activeOrder && !activeOrder) {
    setActiveOrder(orderData.activeOrder as any);
  } 

  const removeItem = async (orderLineId: string) => {
    setIsLoading(true)
    try {
      await query(REMOVE_ITEM_FROM_ORDER, {
        orderLineId,
      })
      window.location.reload()
      setIsLoading(false)
    } catch (error) {
      console.error('Error removing item:', error);
      setIsLoading(false);
    }
  };

  const addShippingMethod = async () => {
    await query(ADD_SHIPPING_METHOD, {
      shippingMethodId: selectedShippingMethod,
    })
  };

  const addShippingAddress = async () => {
    const fullName = firstName + ' ' + lastName
    await query(ADD_SHIPPING_ADDRESS, {
      fullName: fullName,
      company: company,
      phoneNumber: phone,
      streetLine1: streetLine,
      city: city,
      postalCode: postalCode,
      countryCode: "ES",
    })
  };

  const addBillingAddress = async () => {
    const fullName = firstName + ' ' + lastName
    await query(ADD_BILLING_ADDRESS, {
      fullName: fullName,
      company: company,
      phoneNumber: phone,
      streetLine1: streetLine,
      city: city,
      postalCode: postalCode,
      countryCode: "ES",
    })
  };

  const addUserData = async () => {
    await query(ADD_CUSTOMER_FOR_ORDER, {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phone,
      emailAddress: email,
    })
  };

  const transitionOrderToArrangingPayment = async () => {
    await query(TRANSITION_ORDER_TO_ARRANGING_PAYMENT, {
    })
  };

  const cancelOrder = async () => {
    await query(TRANSITION_ORDER_TO_CANCELLED, {
    })
  };

  const checkClientSecret = () => {
    if (clientStripePaymentIntent?.createStripePaymentIntent !== undefined) {
      setClientSecret(clientStripePaymentIntent?.createStripePaymentIntent)
    }
  }

  const updateOrderState = async (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsLoading(true)
      await addShippingMethod()
      await addUserData()
      await addShippingAddress()
      await addBillingAddress()
      await transitionOrderToArrangingPayment()
      await checkClientSecret()
      setClientSecretUpdated(true)
      setIsLoading(false)
  }

  const getTotalPrice = () => {
    if (activeOrder?.totalWithTax != undefined) {
      return activeOrder?.totalWithTax
    }
    return 0
  }

  const handleStripeContainerClick = () => {
    if (!selectedStripe && successConfiguration) {
      setSelectedStripe(true);
      setSelectedBizum(false); // Deselect Bizum
      setSelectedPaymentMethod("stripe");
    } else {
      toast.error("Configura los datos de envío")
      setSelectedStripe(false);
      setSelectedPaymentMethod(""); // Reset payment method
    }
  };
  
  const handleBizumContainerClick = () => {
    if (!selectedBizum) {
      setSelectedBizum(true);
      setSelectedStripe(false); // Deselect Stripe
      setSelectedPaymentMethod("bizum");
    } else {
      setSelectedBizum(false);
      setSelectedPaymentMethod("null"); // Reset payment method
    }
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedShippingMethod === undefined || selectedShippingMethod === "Selecciona una opción") {
      toast.error("Selecciona un método de envío.")
    } else {
      setSuccessConfiguration(true)
      toast.success("Datos de envío guardados correctamente.")
    }
  };


  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedShippingMethod(event.target.value);
};

  const total = getTotalPrice()
  const igic = (7 / 100) * total
  const subTotal = total - igic
  
  if (loading) return (
    <div className='h-screen flex items-center justify-center'>
        <div className="animate-spin rounded-full border-t-4 border-black h-16 w-16"></div>
    </div>
  )
  
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='px-10 md:px-20 xl:px-32 py-20'>
      <h3 className="font-bold text-3xl xl:text-4xl pb-10">Resumen de compra</h3>
        {activeOrder ? (
          <div>
            <div className='grid grid-cols-1 xl:grid-cols-6 gap-x-10'>
              {activeOrder.lines.length === 0 ? (
                <div className='flex flex-col space-y-4 col-span-4'>
                <p  font-semibold pb-4 text-lg>El carrito está vacío.</p>
                <Link href="/tienda">
                  <Button className='w-48 font-semibold flex items-center'>
                    <Home className="w-5 h-5 mr-2"/>
                    <p className='text-[16px]'>Ir a la tienda</p>
                  </Button>
                </Link>
                </div>
              ) : (
                <div className='xl:col-span-4 xl:shadow-lg shadow-right shadow-left shadow-bottom xl:p-10'>
                  {activeOrder?.lines.map((line) => (
                    <div key={line.id} className='grid grid-cols-1 xl:grid-cols-5 py-4 xl:py-10'>
                      <div className='col-span-1'>
                      {line.featuredAsset.preview && (
                        <Image src={line.featuredAsset.preview} alt="Product Preview" width={600} height={600} className='h-full w-full object-center rounded-xl pb-8 xl:pb-0'/>
                      )}
                      </div>
                      <div className='flex flex-col space-y-4 xl:space-y-2 xl:col-span-4 xl:px-10'>
                        <div className='flex flex-col xl:flex-row w-full justify-between'>
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
                              <button onClick={() => removeItem(line.id)}>
                              {isLoading ? (
                                <div className="flex items-center justify-center">
                                  <div className="animate-spin rounded-full border-t-4 border-black h-4 w-4"></div>
                                </div> ) : 
                                <p><Trash/></p>
                              }
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
                        <div className='w-full bg-black px-2 h-[1px] hidden xl:flex'/>
                      </div>
                    </div>
                  ))}
               </div>
              )}
              <div className='flex flex-col space-y-4 xl:w-max'>
                <div className='xl:col-span-2 bg-black rounded-xl p-4 xl:p-8'>
                    <h4 className='font-semibold text-2xl text-white mb-4'>Resumen</h4>
                    {activeOrder.lines.map((line) => (
                     <div className='flex items-center justify-between py-2 xl:py-0 xl:space-x-10'>
                       <p className=' text-white/80'>{line.productVariant.name.length > 30 ? line.productVariant.name.substring(0, 30) + "..." : line.productVariant.name}</p>
                       <p className=' text-white/80'>{formatCurrency(line.linePriceWithTax)}</p>
                    </div>
                    ))}
                  <div className='w-full bg-white px-2 h-[1px] mt-4'/>
                  <div className='flex flex-col py-6 space-y-10 '>
                     <div className='flex flex-col space-y-2 '>
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
                         <Link href="#datosdeenvio">
                           <Button variant="default" className={cn("bg-main gap-x-4 w-full text-black bg-first")}>
                            <ShoppingCart />
                            <p className="text-[16px]">Pedir ahora</p>
                            <ArrowRight />
                           </Button>
                         </Link>
                    </div>
                </div>
              </div>
          </div>
          <div className='py-10' id='datosdeenvio'>
            <h5 className='font-bold text-3xl xl:text-4xl pb-10'>Configura tu envío</h5>
            <div className={cn('px-4 py-8 xl:p-8 border border-black/40 rounded-md', successConfiguration ? 'border-green-500' : '')}>
              <p className='font-semibold'>Datos de envío</p>
              <div className='h-[1px] bg-black my-6 '/>  
              <form className='grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-10 xl:gap-x-10 xl:gap-y-6' onSubmit={handleSubmitForm}>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">Nombre</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Juan Manuel"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">Apellido</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Afonso"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="juanmanuel@email.com"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">Teléfono</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="633 333 333"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">Empresa</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Duotono Design"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2 col-span-2 xl:col-span-1">
                  <label className="font-bold">Método de envío</label>
                  <select className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30" 
                    value={selectedShippingMethod} 
                    onChange={handleSelectChange} 
                    required
                  >
                    <option>Selecciona una opción</option>
                    {eligibleShippingMethodsData?.eligibleShippingMethods.map((method) => (
                          <option 
                            key={method.id}
                            value={method.id}
                            >
                              {method.name} - {formatCurrency(method.price)}
                          </option>
                    ))}
                </select>
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">Código postal</label>
                  <input
                    type="text"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="39001"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">País</label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="España"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-bold">Ciudad</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Santa Cruz de Tenerife"
                    className="w-full xl:max-w-[40rem] px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <div className="flex flex-col space-y-2 xl:col-span-2">
                  <label className="font-bold">Dirección</label>
                  <input
                    type="text"
                    required
                    value={streetLine}
                    onChange={(e) => setStreetLine(e.target.value)}
                    placeholder="Calle José Tejedor 7..."
                    className="w-full px-4 py-2 rounded-md border border-black/30"
                  />
                </div>
                <Button type='submit' className={cn("bg-main gap-x-4 text-black bg-first mt-8 font-semibold col-span-2 xl:col-span-1")}>
                   Guardar datos de envío
                </Button>
              </form>
            </div>
          </div>
          <div className='py-0 xl:py-10'>
            <h5 className='font-bold text-3xl xl:text-4xl pb-10'>Selecciona el método de pago</h5>
            <div
              className={cn('px-8 py-10 m-4 cursor-pointer border border-black/40 rounded-md flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0 xl:space-x-10', selectedStripe ? 'bg-blue-500/5 border-blue-400' : 'bg-white')}
              onClick={!selectedStripe ? handleStripeContainerClick : undefined}
            >
              <div className='flex space-x-4 items-center '>
                <Circle className={cn('text-blue-400')}
                fill={selectedStripe ? '#60a5fa' : 'white'}/>
                <CreditCard className='w-8 h-8'/>
                <p className='font-semibold'>Tarjeta de crédito o débito</p>
              </div>
                  {selectedStripe && (
                    <Dialog>
                      <DialogTrigger >
                      <Button variant="default" className={cn("bg-main gap-x-4 w-64 xl:w-80 text-black bg-first")} onClick={updateOrderState}>
                        <ShoppingCart />
                        <p className="text-[12px] xl:text-[16px]">Pagar a través de Stripe</p>
                        <ArrowRight />
                      </Button>
                      </DialogTrigger>
                      <DialogContent>
                          {isLoading ? (
                            <div className="flex items-center justify-center h-[300px]">
                              <div className="animate-spin rounded-full border-t-4 border-blue-500 border-t-blue-500 h-16 w-16"></div>
                            </div> ) :
                           (
                            <DialogHeader>
                              <DialogTitle className='pb-4'>Pasarela de pago de Stripe.</DialogTitle>
                              <StripePayments clientSecret={clientSecret} orderCode={""}/>
                            </DialogHeader>
                          )}
                      </DialogContent>
                    </Dialog>
                  )}
            </div>
            {/* AÑADIR METODO DE PAGO BIZUM. */}
            {/* <div
              className={cn('px-8 py-10 m-4 cursor-pointer border border-black/40 rounded-md flex items-center justify-between space-x-10', selectedBizum ? 'bg-blue-500/5 border-blue-400' : 'bg-white')}
              onClick={handleBizumContainerClick}
            >
              <div className='flex space-x-4 items-center'>
              <Circle className='text-blue-400' fill={selectedBizum ? '#60a5fa' : 'white'}/>
                <Image src="/bizum.jpg" alt={''} width={50} height={50}/>
                <p className='font-semibold'>Bizum</p>
              </div>
                {selectedBizum && (
                  <Button variant="default" className={cn("bg-main gap-x-4 w-80 text-black bg-first")} onClick={updateOrderState}>
                    <ShoppingCart />
                    <p className="text-[16px]">Pagar a través de Bizum</p>
                    <ArrowRight />
                  </Button>
                )}
            </div> */}
          </div>
        </div>
        ) : (
          <div className='flex flex-col space-y-4'>
            <p  font-semibold pb-4 text-lg>El carrito está vacío.</p>
            <Link href="/tienda">
              <Button className='w-48 font-semibold flex items-center'>
                <Home className="w-5 h-5 mr-2"/>
                <p className='text-[16px]'>Ir a la tienda</p>
              </Button>
            </Link>
          </div>
        )}

    </div>
  );
}
