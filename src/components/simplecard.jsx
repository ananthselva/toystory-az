// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";

// const CreatePaymentMethod = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       setErrorMessage(error.message);
//       return;
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="card-element-container">
//         <CardElement options={{ style: cardElementStyle }} />
//       </div>
//       <button type="submit" disabled={!stripe || !elements}>
//         Create Payment Method
//       </button>
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// const cardElementStyle = {
//   base: {
//     fontSize: "20px",
//     color: "#32325d",
//     fontFamily: "Arial, sans-serif",
//     "::placeholder": {
//       color: "#aab7c4",
//     },
//   },

//   invalid: {
//     color: "#fa755a",
//     iconColor: "#fa755a",
//   },
// };

// const TestStripe = () => {
//   const [stripe, setStripe] = useState(null);

//   useEffect(() => {
//     const loadStripeObject = async () => {
//       const stripeObject = await loadStripe(
//         "pk_test_9CnYE16SY0ju0M4GcnOBHzku00gC8VQDPF"
//       );
//       setStripe(stripeObject);
//     };

//     loadStripeObject();
//   }, []);

//   return (
//     <div>
//       {stripe && (
//         <Elements stripe={stripe}>
//           <CreatePaymentMethod />
//         </Elements>
//       )}
//     </div>
//   );
// };

// export default TestStripe;

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe, CardNumberElement, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "black",
			fontWeight: 500,
      border: "1px solid #ddd", // Add border style here
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "26px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "black" },
			"::placeholder": { color: "black" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "black"
		}
	}
}

const CreatePaymentMethod = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardExpiryElement, CardNumberElement,CardCvcElement)
    })

    if (error) {
        setErrorMessage(error.message);
        return;
      }

      console.log('Payment method created:', paymentMethod);

  };

  return (
    <>

        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className='FormGroup'>
                <div className="FormRow">
                    <CardNumberElement  options={CARD_OPTIONS}  />
                </div>
            </fieldset>
            <fieldset className='FormGroup'>
                <div className="FormRow">
                    <CardExpiryElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <fieldset className='FormGroup'>
                <div className="FormRow">
                    <CardCvcElement options={CARD_OPTIONS} />
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div className="payment-success">
            <h2>Payment successful</h2>
            <h3 className='Thank-you'>Thank you for your patronage</h3>
        </div>
    }

    </>
  );
};

const cardElementStyle = {
  base: {
    fontSize: '20px',
    color: '#32325d',
    fontFamily: 'Arial, sans-serif',
    '::placeholder': {
      color: '#aab7c4',
    },
  },

  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a',
  },
};

const TestStripe = () => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const loadStripeObject = async () => {
      const stripeObject = await loadStripe('pk_live_DIodJvzwckwG0omwLcjh3E2k00A880PBDB');
      setStripe(stripeObject);
    };

    loadStripeObject();
  }, []);

  return (
    <div>
      {stripe && (
        <Elements stripe={stripe}>
          <CreatePaymentMethod />
        </Elements>
      )}
    </div>
  );
};

export default TestStripe;
