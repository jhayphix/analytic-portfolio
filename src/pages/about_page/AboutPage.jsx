// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
import PageTransition from "@layouts/PageTransition";

// ... Components
import AboutSection from "@pages/home_page/sections/AboutSection";
// import ProjectStatSection from "@pages/home_page/sections/ProjectStatSection";
import PageBannerSection from "@components/banners/PageBannerSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const AboutPage = () => {
  const { about_page_effect } = useContext(DefaultContext);
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <>
      <PageTransition effect={about_page_effect}>
        <PageBannerSection pageName="About Me" />
        <AboutSection />
        {/* <ProjectStatSection /> */}
        {/* <ServiceSection showHeader={true} /> */}
      </PageTransition>
    </>
  );
};

export default AboutPage;
