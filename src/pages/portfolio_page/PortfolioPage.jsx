// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
import PageTransition from "@layouts/PageTransition";

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
// import ProjectStatSection from "@pages/home_page/sections/ProjectStatSection";
import PortfolioSection from "@pages/home_page/sections/PortfolioSection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const PortfolioPage = () => {
  const { portfolio_page_effect } = useContext(DefaultContext);
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <PageTransition effect={portfolio_page_effect}>
      <section>
        <PageBannerSection pageName="Portfolio" />
        <PortfolioSection showHeader={false} />
        {/* <ProjectStatSection /> */}
      </section>
    </PageTransition>
  );
};

export default PortfolioPage;
