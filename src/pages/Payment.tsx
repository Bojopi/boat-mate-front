
import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement } from "@stripe/react-stripe-js";

import { CheckoutForm } from "../components/CheckoutForm";

const stripePromise = loadStripe('pk_test_51Mm0zsBsgcRKB5Gs49JZ1DS91rSBpaVinPPsC2Z5HNFK2YZvhKALtydZLvFRxzuZOiKbezgTmxnLj2SnQxCCK6MA00uzoTbkk5');

const Payment = () => {
  
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default Payment;