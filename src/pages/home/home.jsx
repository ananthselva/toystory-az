// *******~ Import ~******** //
import React, { useEffect,lazy } from "react";
// React
// Assets
// Components
// Redux home page code
import { connect } from "react-redux";
import { getHomepage } from "../../actions/home/homepageActions";
import CommonLoadable from "../../router/commonloadable";
import { OrderFlow } from "../../App";
// *******~ Import ~******** //
// import ZeroCommission from "./components/zerocommission/zerocommission";
// import Slider from "./components/slider/slider";
// import Feedback from "./components/feedback/feedback";
// import ClientLogo from "./components/client-logo/client-logo";
// import FKflow from "./components/fkflow/fkflow";
// import AppLink from "./components/down-app/down-app";
// import Customer from "./components/customer/customer";
const ZeroCommission=CommonLoadable(lazy(()=>import('./components/zerocommission/zerocommission')));
const Slider=CommonLoadable(lazy(()=>import('./components/slider/slider')));
const Feedback=CommonLoadable(lazy(()=>import('./components/feedback/feedback')));
const ClientLogo=CommonLoadable(lazy(()=>import('./components/client-logo/client-logo')));
const FKflow=CommonLoadable(lazy(()=>import('./components/fkflow/fkflow')));
const AppLink=CommonLoadable(lazy(()=>import('./components/down-app/down-app')));
const Customer=CommonLoadable(lazy(()=>import('./components/customer/customer')));






// CSS
// Images
// Icons



const Home = ({ getHomepage, isLoading, error, response }) => {
  const {setFooterLoading,footerLoading}=OrderFlow();
    const handleFooter=()=>{
    console.log(footerLoading);
    setFooterLoading(false);
    }
    useEffect(()=>{
     handleFooter();
    },[]);
    useEffect(()=>{
     if(footerLoading===false){
      setTimeout(() => {
        setFooterLoading(true);
      }, 2000);
     }
    },[footerLoading])
  useEffect(() => {
    getHomepage();
  }, [getHomepage]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <main>

        <Slider/>
        <ClientLogo/>
        <FKflow />
        <AppLink />
        <Customer />
        <ZeroCommission />
        <Feedback  />
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.homepage.isLoading,
  response: state.homepage.response,
  error: state.homepage.error,
});

const mapDispatchToProps = {
  getHomepage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
