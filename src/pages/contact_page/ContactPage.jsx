// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";

// ... Components
import PageBannerSection from "@components/banners/PageBannerSection";
import ContactSection from "@pages/home_page/sections/ContactSection";

import PageTransition from "@layouts/PageTransition";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ContactPage = () => {
  const { contact_page_effect } = useContext(DefaultContext);
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */
  return (
    <>
      <PageTransition effect={contact_page_effect}>
        <PageBannerSection pageName="Contact Me" />
        <ContactSection showHeader={false} />
      </PageTransition>
    </>
  );
};

export default ContactPage;
