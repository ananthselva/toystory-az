// *******~ Import ~******** //
// React
import {lazy} from 'react';
// Assets
// Components
// import ZeroCommission from "./components/zerocommission/zerocommission";
// import Slider from "./components/slider/slider";
// import SliderV1 from "./components/slider/sliderv1";
// import Feedback from "./components/feedback/feedback";
// import ClientLogo from "./components/client-logo/client-logo";
// import FKflow from "./components/fkflow/fkflow";
// import DownloadApp from "./components/down-app/down-app";
// import Customer from "./components/customer/customer";

import Loadable from "../../router/loadable"; 

//lazy
const ZeroCommission=Loadable(lazy(()=>import('./components/zerocommission/zerocommission')));
const SliderV1=Loadable(lazy(()=>import('./components/zerocommission/zerocommission')));
const Feedback=Loadable(lazy(()=>import('./components/slider/sliderv1')));
const ClientLogo=Loadable(lazy(()=>import('./components/client-logo/client-logo')));
const FKflow=Loadable(lazy(()=>import('./components/fkflow/fkflow')));
const DownloadApp=Loadable(lazy(()=>import('./components/down-app/down-app')));
const Customer=Loadable(lazy(()=>import('./components/customer/customer')));

// CSS
// Images
// Icons
// *******~ Import ~******** //

export default function HomeSlidev1(params) {
  return (
    <>
      <main>
        {/* <Slider /> */}
        <SliderV1 />
        <ClientLogo />
        <FKflow />
        <DownloadApp />
        <Customer />
        <ZeroCommission />
        <Feedback />
      </main>
    </>
  );
}
