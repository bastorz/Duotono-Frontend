import CheckoutForm from '@/components/tienda/checkout/checkout-form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51O8htxIoDmkR1RkBAeVDFntmpUVn52hBLSTCDfxS5qKID75YIpDLrzRL2dFwOnCZIhB8z0ATHsuMLeL5xSBBBV4W00vsKb64Sp');

type StripePaymentsProps = {
  clientSecret: string;
  orderCode: string;
}

export function StripePayments({ clientSecret, orderCode }: StripePaymentsProps) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  }
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm orderCode={orderCode} />
    </Elements>
  );
}