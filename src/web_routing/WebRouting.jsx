// ... React modules
import { Routes, Route, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

// ... Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

// ... Components
import AboutPage from "@pages/about_page/AboutPage";
import ContactPage from "@pages/contact_page/ContactPage";
import ProjectDetailsPage from "@pages/project_details_page/ProjectDetailsPage";
import HomePage from "@pages/home_page/HomePage";
import PortfolioPage from "@pages/portfolio_page/PortfolioPage";
import ServicePage from "@pages/service_page/ServicePage";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const WebRouting = () => {
  const location = useLocation();
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  const { home, about, portfolio, dashboard, service, contact } =
    useContext(NavigationContext);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Homepage */}
        <Route path={home?.path} element={<HomePage />} />

        {/* About page */}
        <Route path={about?.path} element={<AboutPage />} />

        {/* Portfolio page */}
        <Route path={portfolio?.path} element={<PortfolioPage />} />

        {/* Services page */}
        <Route path={service?.path} element={<ServicePage />} />

        {/* Contact page */}
        <Route path={contact?.path} element={<ContactPage />} />

        {/* Dashboard page */}
        <Route path={dashboard?.path} element={<ProjectDetailsPage />} />

        {/* Not found */}
        <Route path="*" element="Not Found" />
      </Routes>
    </AnimatePresence>
  );
};

export default WebRouting;
