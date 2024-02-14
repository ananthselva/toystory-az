import React, { useState, useEffect } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { renderIntoDocument } from "react-dom/test-utils";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Demo total",
        amount: 1350,
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestShipping: true,
      shippingOptions: [
        {
          id: "standard-global",
          label: "Global shipping",
          detail: "Arrives in 5 to 7 days",
          amount: 350,
        },
      ],
    });
    // Check the availability of the Payment Request API first.
    pr.canMakePayment().then((result) => {
      if (result) {
        pr.on("paymentmethod", handlePaymentMethodReceived);
        setPaymentRequest(pr);
      }
    });
  }, [stripe, elements]);

  if (paymentRequest) {
    return <PaymentRequestButtonElement options={{ paymentRequest }} />;
  }

  // Use a traditional checkout form.
  return "Insert your form or button component here.";
};

export default CheckoutForm;
