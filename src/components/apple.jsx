import React, { useState, useEffect } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { renderIntoDocument } from "react-dom/test-utils";
import PlaceOrderJson from "./placeorderdetails.json";

import { connect } from "react-redux";
import { postPlaceOrder } from "../actions/checkout/placeorderActions";

const CheckoutForm = ({
  stripee,
  postPlaceOrder,
  placeorder,
  userData,
  error,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState(null);
  const [paymentMethodId, setPaymentMethodId] = useState(null); // Add state for payment method ID

  const [jsonData, setJsonData] = useState(PlaceOrderJson);

  // Function to update the JSON data with the new paymentMethodId
  const updateJsonData = (newPaymentMethodId) => {
    // Create a copy of the JSON data
    const updatedData = [...jsonData];

    // Find the specific item you want to update (for example, the first item)
    const itemToUpdate = updatedData[0];

    // Update the "paymentMethodId" property within the "paymentDetail" object
    itemToUpdate.paymentDetail.paymentMethodId = newPaymentMethodId;

    // Update the state with the modified JSON data
    setJsonData(updatedData);

    // postPlaceOrder(jsonData[0]); // post the latest PM ID
  };

  const pmid = jsonData[0]["paymentDetail"]["paymentMethodId"];

  useEffect(() => {
    const pmid = jsonData[0]["paymentDetail"]["paymentMethodId"];
  }, [jsonData]);

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }
    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Fusion Kicthen React",
        amount: 125,
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestShipping: true,
      shippingOptions: [
        {
          id: "standard-global",
          label: "FK Global shipping",
          detail: "Arrives in 5 to 7 days",
          amount: 1150,
        },
      ],
    });
    // Check the availability of the Payment Request API first.
    pr.canMakePayment().then((result) => {
      if (result) {
        //pr.on("paymentmethod", handlePaymentMethodReceived);
        setPaymentRequest(pr);
      }
    });
  }, [stripe, elements]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (paymentRequest) {
    return (
      <>
        <div style={{ margin: "30px 20px" }}>
          {pmid && <div>Payment Method ID: {pmid}</div>}

          {/* {placeorder && <pre>{JSON.stringify(placeorder["message"])}</pre>}
          {placeorder && <div>Client ID: {placeorder["response_code"]}</div>}
           */}
          <PaymentRequestButtonElement options={{ paymentRequest }} />
          <CreatePaymentMethod
            paymentRequest={paymentRequest}
            onPaymentMethodReceived={(paymentMethodId) =>
              setPaymentMethodId(paymentMethodId)
            }
            updateJsonData={updateJsonData}
          />
        </div>
      </>
    );
  }

  // Use a traditional checkout form.
  return "Insert your form or button component here.";
};

const mapStateToProps = (state) => ({
  stripee: state.stripe,
  placeorder: state.placeorder.placeorder, // Replace 'post' with your reducer name
  userData: state.userdata.userData,
});

const mapDispatchToProps = {
  postPlaceOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);

const CreatePaymentMethod = ({
  paymentRequest,
  onPaymentMethodReceived,
  updateJsonData,
}) => {
  paymentRequest.on("paymentmethod", async (ev) => {
    console.log(ev.paymentMethod.id);
    onPaymentMethodReceived(ev.paymentMethod.id);
    updateJsonData(ev.paymentMethod.id);
    // Confirm the PaymentIntent without handling potential next actions (yet).

    // const { paymentIntent, error: confirmError } =
    //   await stripe.confirmCardPayment(
    //     clientSecret,
    //     { payment_method: ev.paymentMethod.id },
    //     { handleActions: false }
    //   );

    // if (confirmError) {
    //   // Report to the browser that the payment failed, prompting it to
    //   // re-show the payment interface, or show an error message and close
    //   // the payment interface.
    //   ev.complete("fail");
    // } else {
    //   // Report to the browser that the confirmation was successful, prompting
    //   // it to close the browser payment method collection interface.
    //   ev.complete("success");
    //   // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
    //   // handle the flow. If using an API version older than "2019-02-11"
    //   // instead check for: `paymentIntent.status === "requires_source_action"`.
    //   if (paymentIntent.status === "requires_action") {
    //     // Let Stripe.js handle the rest of the payment flow.
    //     const { error } = await stripe.confirmCardPayment(clientSecret);
    //     if (error) {
    //       // The payment failed -- ask your customer for a new payment method.
    //     } else {
    //       // The payment has succeeded -- show a success message to your customer.
    //     }
    //   } else {
    //     // The payment has succeeded -- show a success message to your customer.
    //   }
    // }
  });
};
