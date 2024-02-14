// *******~ Import ~******** //
// React
// Assets
import { lazy, createContext, useState, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Components
import GoTop from "./common/gototop/gototop";
import ScrollToTop from "./common/scrolltop/scrolltop";
import Routing from "./router/router";
import Header from "./common/header/header";
// import Footer from "./common/footer/footer";
import { useEffect } from "react";
import { OrderFlow } from "./App";
const Footer=(lazy(()=>import("./common/footer/footer")));
// CSS
// Images
// Icons
// *******~ Import ~******** //
const Main=(params) =>{
const {footerLoading,setFooterLoading}=OrderFlow();
  return (
    <>
      <Router basename={"/"}>
        <GoTop />
        <ScrollToTop />
        <Header />
        <Routing stripe={params.stripe}/>
        {footerLoading?(<><Footer/></>):null}
      </Router>
    </>
  );
}
export default Main;
