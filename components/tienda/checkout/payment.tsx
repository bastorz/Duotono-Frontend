import CheckoutForm from '@/components/tienda/checkout/checkout-form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51OmkaeLP27jwpJnpet93FMxqwMgFhIQAJ7A0emTwuIxZWxT7lic4esPeYc9WgUqf5Hi1VtFCZFJLFn0d1tLDIFDT00sO656l6l'
);

type StripePaymentsProps = {
  clientSecret: string;
  orderCode: string;
};

export function StripePayments({
  clientSecret,
  orderCode,
}: StripePaymentsProps) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm orderCode={orderCode} />
    </Elements>
  );
}
