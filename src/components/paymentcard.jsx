// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe('pk_test_9CnYE16SY0ju0M4GcnOBHzku00gC8VQDPF');

// export default function Teststripe() {
//   const options = {
//     // Replace `${id}` and `${secret}` with your actual values
//     clientSecret: `${id}_secret_${secret}`,
//   };

//   return (
//     <Elements stripe={stripePromise} options={options}>
//       <CheckoutForm />
//     </Elements>
//   );
// }



import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('/create-intent', {
      method: 'POST',
    });

    const {client_secret: clientSecret} = await res.json();

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
       Stripe Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe('pk_live_DIodJvzwckwG0omwLcjh3E2k00A880PBDB');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    theme: 'stripe',
    variables: {
      fontWeightNormal: '500',
      borderRadius: '2px',
      colorPrimary: '#f360a6',
      colorIconTabSelected: '#fff',
      spacingGridRow: '16px'
    },
    rules: {
      '.Tab, .Input, .Block, .CheckboxInput, .CodeInput': {
        boxShadow: '0px 3px 10px rgba(18, 42, 66, 0.08)'
      },
      '.Block': {
        borderColor: 'transparent'
      },
      '.BlockDivider': {
        backgroundColor: '#ebebeb'
      },
      '.Tab, .Tab:hover, .Tab:focus': {
        border: '0'
      },
      '.Tab--selected, .Tab--selected:hover': {
        backgroundColor: '#f360a6',
        color: '#fff'
      }
    }
  },

};

const Teststripe = () => (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
);

export default Teststripe;
