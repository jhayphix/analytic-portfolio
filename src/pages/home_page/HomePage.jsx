// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";

import PageTransition from "@layouts/PageTransition";

// ... Components
import HeroSection from "@pages/home_page/sections/HeroSection";
// import AboutSection from "@pages/home_page/sections/AboutSection";
// import PortfolioSection from "@pages/home_page/sections/PortfolioSection";
// import ServiceSection from "@pages/home_page/sections/ServiceSection";
// import ProjectStatSection from "@pages/home_page/sections/ProjectStatSection";
// import ContactSection from "@pages/home_page/sections/ContactSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const HomePage = () => {
  const { home_page_effect } = useContext(DefaultContext);
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <PageTransition effect={home_page_effect}>
      <main>
        <HeroSection />
        {/* <AboutSection />
        <PortfolioSection />
        <ServiceSection />
        <ProjectStatSection />
        <ContactSection /> */}
      </main>
    </PageTransition>
  );
};

export default HomePage;
