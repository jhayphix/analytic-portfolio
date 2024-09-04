// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
import PageTransition from "@layouts/PageTransition";

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
import ServiceSection from "@pages/home_page/sections/ServiceSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ServicePage = () => {
  const { service_page_effect } = useContext(DefaultContext);
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <>
      <PageTransition effect={service_page_effect}>
        <PageBannerSection pageName="Services" />
        <ServiceSection showHeader={false} />
      </PageTransition>
    </>
  );
};

export default ServicePage;
