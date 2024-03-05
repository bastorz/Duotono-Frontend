import CheckoutForm from '@/components/tienda/checkout/checkout-form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

const stripePromise = loadStripe(
  'pk_test_51OmkaeLP27jwpJnpet93FMxqwMgFhIQAJ7A0emTwuIxZWxT7lic4esPeYc9WgUqf5Hi1VtFCZFJLFn0d1tLDIFDT00sO656l6l'
);

type StripePaymentsProps = {
  clientSecret: string;
  orderCode: string;
  isMyOwnDesign: string | undefined;
};

export function StripePayments({
  clientSecret,
  orderCode,
  isMyOwnDesign,
}: StripePaymentsProps) {
  const [redirectUrl, setRedirectUrl] = useState('/homepage');

  useEffect(() => {
    if (isMyOwnDesign === 'Si') {
      setRedirectUrl('/checkout/cargar-mi-diseno');
    } else {
      setRedirectUrl('/compra-realizada');
    }
  }, [isMyOwnDesign]);

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm orderCode={orderCode} redirectUrl={redirectUrl} />
    </Elements>
  );
}
