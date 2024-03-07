// CheckoutForm.tsx
import { Button } from '@/components/ui/button';
import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { FormEvent, useState } from 'react';

interface CheckoutFormType {
  orderCode: string;
  redirectUrl: string | undefined;
}

const CheckoutForm = ({ redirectUrl, orderCode }: CheckoutFormType) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: location.origin + redirectUrl,
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button className="w-full mt-4 font-semibold" disabled={!stripe}>
        {loading ? (
          <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full border-t-4 border-black h-4 w-4"></div>
          </div>
        ) : (
          <p>Realizar el pago</p>
        )}
      </Button>
    </form>
  );
};

export default CheckoutForm;
