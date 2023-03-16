
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { Payment } from '../hooks/payment';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { pay } = Payment()

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe!.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!,
    });
    console.log(error, paymentMethod)

    pay(paymentMethod)

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};