// PaymentForm.js
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import stripePromise from "./stripe";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Handle this case.
      return;
    }

    const paymentMethod = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (paymentMethod.error) {
      // Handle payment error.
      return;
    }

    // Payment method created successfully. Implement your logic to submit the payment.
  };

  const handleGooglePayClick = async () => {
    const googlePayReady = await stripe.isReadyToPay({
      networks: ["visa", "mastercard"],
    });

    if (googlePayReady) {
      const result = await stripe.paymentRequestWithGooglePay({
        price: "10.00", // Amount in your currency
        currency: "USD", // Change to your currency
      });

      if (result.error) {
        // Handle Google Pay error.
      } else {
        // Payment succeeded. Implement your logic here.
      }
    }
  };

  const handleApplePayClick = async () => {
    const applePayReady = await stripe.isReadyToPay({
      networks: ["amex", "visa", "mastercard"],
      // capabilities: ['3ds'],
    });

    if (applePayReady) {
      const result = await stripe.paymentRequestWithApplePay({
        country: "US",
        currency: "USD",
        total: {
          label: "Demo Payment",
          amount: "1000", // Amount in cents
        },
      });

      if (result.error) {
        // Handle Apple Pay error.
      } else {
        // Payment succeeded. Implement your logic here.
      }
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handlePayment}>
        <CardElement
          options={
            {
              // Customize the appearance of CardElement
            }
          }
        />
        <button type="submit">Pay with Card</button>
        <button type="button" onClick={handleGooglePayClick}>
          Pay with Google Pay
        </button>
        <button type="button" onClick={handleApplePayClick}>
          Pay with Apple Pay
        </button>
      </form>
    </Elements>
  );
};

const WrappedPaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default WrappedPaymentForm;

//export default PaymentForm;
