// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
import PageTransition from "@layouts/PageTransition";

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
// import ServiceSection from "@pages/home_page/sections/ServiceSection";
import SkillsOverviewSection from "@pages/home_page/sections/SkillsOverviewSection";

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
        <div>
          <PageBannerSection pageName="SKILLS" />

          <div className="container-lg">
            <SkillsOverviewSection />
          </div>
          {/* <ServiceSection showHeader={true} /> */}
        </div>
      </PageTransition>
    </>
  );
};

export default ServicePage;
