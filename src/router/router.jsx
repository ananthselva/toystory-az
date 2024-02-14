// Assets
// import React, {useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// lazy route
import { lazy } from "react";

// Component
// import Rough from "../rough/rough";
import Home from "../pages/home/home";
// import HomeSlidev1 from "../pages/home/sliderv1";

// Test Component
import Login from "../components/login";
// import SSOLogin from "../components/ssologin";
// import Teststripe from "../components/simplecard";
// import Applepay from "../components/apple";
// import MyuseApp from "../components/useCtest";
import Gpay from "../components/PaymentForm";

// My Account
// import Myaccount from "../pages/myaccount/myaccount-layout";
// import Profile from "../pages/myaccount/components/profile/profile";
// import OrderStatus from "../pages/myaccount/components/orderstatus/orderstatus";
// import WalletTC from "../pages/myaccount/components/wallet-tc/wallet-tc";
// import WalletPage from "../pages/myaccount/components/wallet/wallet";
// import SavedCards from "../pages/myaccount/components/wallet/savedcard";
// import AddCard from "../pages/myaccount/components/wallet/addcard";
// import WalletHistory from "../pages/myaccount/components/wallet/history";
// import AddressBook from "../pages/myaccount/components/addressbook/addressbook";
// import MyOrder from "../pages/myaccount/components/myorder/myorder";
// import OrderDetailPage from "../pages/myaccount/components/myorder/orderdetail";
// import StuartTrack from "../pages/myaccount/components/orderstatus/components/stuart-track";
// import Cookies from "../pages/cookies/cookies";

// Restaurant list
import ListPage from "../pages/listpage/listpage";
// import TermsCondition from "../pages/terms-condition/terms-condition";
// import Partners from "../pages/partners-terms/partners-terms";
// import Brand from "../pages/our-brand/our-brand";
import Stuart from "../pages/stuartT&C/stuart";
// import Faq from "../pages/faq/faq";
// import Allergy from "../pages/allergy/allergy";
// import MenuPage from "../pages/menu/menu-page";
// import AllMenu from "../pages/menu/menu";
// import MenuAbout from "../pages/menu/about";
// import MenuReview from "../pages/menu/review";
// import Rateus from "../pages/rate-us/rate-us";
// import Refund from "../pages/refund-expired/refund";
// import Contactless from "../pages/contactless-dining/contactless";
import Cardrefund from "../pages/card-refund/card-refund";
// import Policyprivacy from "../pages/policy-privacy/policy";
// import Aboutus from "../pages/aboutus/aboutus";
// import Career from "../pages/career/career";
import Errorpage from "../pages/errorpage/errorpage";
// import Becomepartner from "../pages/become-partner/becomepartner";
// import Help from "../pages/help/help";
import WithOrder from "../pages/help/with-order";
import OfferInfo from "../pages/help/offer-information";
import GuideFusion from "../pages/help/guid-fusion";
import AccountOptions from "../pages/help/account-options";
import Leadsignup from "../pages/leadsignup/leadsignup";
import CheckoutPage from "../pages/checkout/checkout";
import Checkoutpageskele from "../pages/checkout/Checkoutpageskeleton";

// import AllCuisines from "../pages/all-cuisines/all-cuisines";
// import AllArea from "../pages/all-area/allarea";
// import Reseller from "../pages/reseller/reseller";
import BlogDetail from "../pages/blogdetails/blogdetails";
// import Blog from "../pages/blog/blog";
import Rateus from "../pages/rate-us/rate-us";
import Refund from "../pages/refund-expired/refund";

import Loadable from "./loadable";

const HomeSlidev1 = lazy(() => import("../pages/home/sliderv1"));
//top bar Lazy
const Becomepartner = Loadable(
  lazy(() => import("../pages/become-partner/becomepartner"))
);
const Help = Loadable(lazy(() => import("../pages/help/help")));
//footer lazy
const Faq = Loadable(lazy(() => import("../pages/faq/faq")));
const Blog = Loadable(lazy(() => import("../pages/blog/blog")));
const TermsCondition = Loadable(
  lazy(() => import("../pages/terms-condition/terms-condition"))
);
const Partners = Loadable(
  lazy(() => import("../pages/partners-terms/partners-terms"))
);
const AllArea = Loadable(lazy(() => import("../pages/all-area/allarea")));
const AllCuisines = Loadable(
  lazy(() => import("../pages/all-cuisines/all-cuisines"))
);
const Brand = Loadable(lazy(() => import("../pages/our-brand/our-brand")));
const Reseller = Loadable(lazy(() => import("../pages/reseller/reseller")));
const Contactless = Loadable(
  lazy(() => import("../pages/contactless-dining/contactless"))
);
const Aboutus = Loadable(lazy(() => import("../pages/aboutus/aboutus")));
const Career = Loadable(lazy(() => import("../pages/career/career")));
const Allergy = Loadable(lazy(() => import("../pages/allergy/allergy")));
const Policyprivacy = Loadable(
  lazy(() => import("../pages/policy-privacy/policy"))
);

// Myaccount Lazy
const Myaccount = Loadable(
  lazy(() => import("../pages/myaccount/myaccount-layout"))
);
const Profile = Loadable(
  lazy(() => import("../pages/myaccount/components/profile/profile"))
);
const OrderStatus = Loadable(
  lazy(() => import("../pages/myaccount/components/orderstatus/orderstatus"))
);

const Orderstatusskle = Loadable(
  lazy(() =>
    import("../pages/myaccount/components/orderstatus/Orderstatusskle")
  )
);
const WalletTC = Loadable(
  lazy(() => import("../pages/myaccount/components/wallet-tc/wallet-tc"))
);
const WalletPage = Loadable(
  lazy(() => import("../pages/myaccount/components/wallet/wallet"))
);
const SavedCards = Loadable(
  lazy(() => import("../pages/myaccount/components/wallet/savedcard"))
);
const AddCard = Loadable(
  lazy(() => import("../pages/myaccount/components/wallet/addcard"))
);
const WalletHistory = Loadable(
  lazy(() => import("../pages/myaccount/components/wallet/history"))
);
const AddressBook = Loadable(
  lazy(() => import("../pages/myaccount/components/addressbook/addressbook"))
);
const MyOrder = Loadable(
  lazy(() => import("../pages/myaccount/components/myorder/myorder"))
);
const OrderDetailPage = Loadable(
  lazy(() => import("../pages/myaccount/components/myorder/orderdetail"))
);
const StuartTrack = Loadable(
  lazy(() =>
    import("../pages/myaccount/components/orderstatus/components/stuart-track")
  )
);
const Cookies = Loadable(lazy(() => import("../pages/cookies/cookies")));

//menuPage Lazy
const MenuPage = Loadable(lazy(() => import("../pages/menu/menu-page")));
const AllMenu = Loadable(lazy(() => import("../pages/menu/menu")));
const MenuAbout = Loadable(lazy(() => import("../pages/menu/about")));
const MenuReview = Loadable(lazy(() => import("../pages/menu/review")));
// import AllMenu from "../pages/menu/menu";
// import MenuAbout from "../pages/menu/about";
// import MenuReview from "../pages/menu/review";

const Routing = (params) => {
  const RoutingPaths = [
    { url: "/", element: <Home /> },
    { url: "*", element: <Errorpage /> },
    { url: "/sliderv1", element: <HomeSlidev1 /> },
    { url: "/login", element: <Login /> },
    // { url: "/teststripe", element: <Teststripe /> },
    // { url: "/testusec", element: <MyuseApp /> },
    { url: "/gpay", element: <Gpay /> },
    { url: "/list", element: <ListPage /> },
    { url: "/general-terms", element: <TermsCondition /> },
    { url: "/partner-terms", element: <Partners /> },
    { url: "/our-brand", element: <Brand /> },
    { url: "/stuart-delivery", element: <Stuart /> },
    { url: "/faq", element: <Faq /> },
    { url: "/allergy", element: <Allergy /> },
    { url: "/cookies", element: <Cookies /> },
    { url: "/refundlinkexpired", element: <Refund /> },
    { url: "/contactlessdinning", element: <Contactless /> },
    { url: "/cardrefund", element: <Cardrefund /> },
    { url: "/privacy", element: <Policyprivacy /> },
    { url: "/about", element: <Aboutus /> },
    { url: "/career", element: <Career /> },
    { url: "/partner", element: <Becomepartner /> },
    { url: "/help", element: <Help /> },
    { url: "/help-with-order", element: <WithOrder /> },
    { url: "/offer-information", element: <OfferInfo /> },
    { url: "/guide-fusion", element: <GuideFusion /> },
    { url: "/account-options", element: <AccountOptions /> },
    { url: "/signup", element: <Leadsignup /> },
    { url: "/area", element: <AllArea /> },
    { url: "/cuisines", element: <AllCuisines /> },
    { url: "/reseller", element: <Reseller /> },
    { url: "/blog", element: <Blog /> },
  ];
  const MyAccountRouts = [
    {
      moblink: true,
      url: "/myaccount",
      element: <Myaccount />,
      subpaths: [
        {
          url: "profile",
          element: <Profile />,
        },
        {
          url: "orderstatus",
          element: <OrderStatus />,
        },

        {
          url: "Orderstatusskle",
          element: <Orderstatusskle />,
        },
        {
          url: "wallet-tc",
          element: <WalletTC />,
        },
        {
          url: "wallet",
          element: <WalletPage />,
        },
        {
          url: "savedcards",
          element: <SavedCards />,
        },
        {
          url: "addcard",
          element: <AddCard />,
        },
        {
          url: "wallethistory",
          element: <WalletHistory />,
        },
        {
          url: "addressbook",
          element: <AddressBook />,
        },
        {
          url: "myorder",
          element: <MyOrder />,
        },
        {
          url: "orderdetail",
          element: <OrderDetailPage />,
        },
        {
          url: "stuarttrack",
          element: <StuartTrack />,
        },
      ],
    },
  ];
  return (
    <>
      <>
        <Routes>
          {RoutingPaths.map((RoutingPath, index) => (
            <Route
              key={index}
              exact
              path={RoutingPath.url}
              orderId={RoutingPath.orderId}
              element={RoutingPath.element}
            />
          ))}
          <Route path="/:path" element={<MenuPage />}>
            <Route index element={<AllMenu />} />
            <Route path="menu" element={<AllMenu />} />
            <Route path="review" element={<MenuReview />} />
            <Route path="about" element={<MenuAbout />} />
          </Route>
          <Route path="/:path/rateus/:orderId" element={<Rateus />}></Route>
          <Route path="/:path/checkout" element={<CheckoutPage/>}></Route>
          <Route
            path="/:path/Checkoutpageskeleton"
            element={<Checkoutpageskele/>}
          ></Route>

          <Route path="/blog/:path" element={<BlogDetail />} />
          {/* MY Account */}
          {/* My Account Desktop URL */}
          {MyAccountRouts.map((MyAccountRout, index) => (
            <>
              <Route
                key={index}
                path={MyAccountRout.url}
                element={MyAccountRout.element}
              >
                <Route index element={<Profile />} />
                {MyAccountRout.subpaths.map((subpath, index) => (
                  <>
                    <Route
                      key={index}
                      path={subpath.url}
                      element={subpath.element}
                    />
                  </>
                ))}
              </Route>
            </>
          ))}
          {/* My Account Mobile URL */}
          {MyAccountRouts[0].subpaths.map((subpath, index) => (
            <Route
              key={index}
              path={"/" + subpath.url}
              element={subpath.element}
            />
          ))}
        </Routes>
      </>
    </>
  );
};
export default Routing;
