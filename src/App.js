// *******~ Import ~******** //
// React
import React, { useState, useContext, createContext, useEffect,useRef } from "react";
// Assets
// Components
import Main from "./main";
// import {ThemeSetter} from "./common/theme/components/themeshetter";
import ThemeProvider from "./common/theme/components/contexts/themeprovider";
import {
  // PaymentRequestButtonElement,
  useStripe,
  // useElements,
} from "@stripe/react-stripe-js";

import { connect } from "react-redux";
import { setStripe } from "./actions/stripe/setStripeActions";

// CSS
// Images
// Icons
// *******~ Import ~******** //
export const OrderFlowProvider = createContext({});
export const OrderFlow = () => useContext(OrderFlowProvider);

const App = ({ setStripe }) => {
  const stripe = useStripe();
  const mobileref=useRef();
  // const elements = useElements();

  useEffect(() => {
    if (stripe) {
      setStripe(stripe); // Dispatch the Stripe object to Redux
    }
  }, [stripe, setStripe]);

  const [loginPopupShow, setLoginPopupShow] = useState(false);
  const [getOrderTime, setOrderTime] = useState(
    localStorage.getItem("orderTime")
  );
  const [getOrderMode, setOrderMode] = useState(
    localStorage.getItem("orderMode")
      ? localStorage.getItem("orderMode")
      : "Delivery"
  );
  const [getCollectionTab, setCollectionTab] = useState(true);
  const [getDeliveryTab, setDeliveryTab] = useState(true);
  const [moveToCheck, setMoveToCheck] = useState(false);
  const [stuartStatus, setStuartStatus] = useState(false);
  const [restaurant, setRestaurant] = useState(null);
  const [footerLoading,setFooterLoading]=useState(false);
  //postcode change
  const [reslimit,setReslimit]=useState(1);
  const [restaurantData,setRestaurantData]=useState([]);
  const [hasFetchedData, updateHasFetchedData] = useState(false);
  useEffect(()=>{
    setFooterLoading(false)
  },[])
  useEffect(()=>{
  console.log(footerLoading);
  },[footerLoading])
  const handleclick=()=>{
    setFooterLoading(false);
  }
  return (
    <>
      <ThemeProvider>
        <OrderFlowProvider.Provider
          value={{
            loginPopupShow,
            setLoginPopupShow,
            getOrderTime,
            setOrderTime,
            getOrderMode,
            setOrderMode,
            getCollectionTab,
            setCollectionTab,
            getDeliveryTab,
            setDeliveryTab,
            moveToCheck,
            setMoveToCheck,
            stuartStatus,
            setStuartStatus,
            restaurant,
            setRestaurant,
            footerLoading,
            setFooterLoading,
            handleclick,
            reslimit,setReslimit,
            restaurantData,setRestaurantData,
            hasFetchedData, updateHasFetchedData,
            mobileref
          }}
        >
          <Main />
        </OrderFlowProvider.Provider>
      </ThemeProvider>
    </>
  );
};

const mapDispatchToProps = {
  setStripe,
};

export default connect(null, mapDispatchToProps)(App);
