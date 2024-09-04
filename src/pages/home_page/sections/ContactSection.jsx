// ... React modules
// import { useContext } from "react";

// ... Context
// import { ProjectContext } from "@contexts/ProjectContextProvider";

// ... Components
import SectionHeader from "@components/headers/SectionHeader";
// import ContactForm from "@components/form/ContactForm";
import ContactCard from "@components/form/ContactCard";
import SectionSubText from "@components/headers/SectionSubText";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ContactSection = ({ showHeader }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  const sectionTitle = "Contact Me";
  const sectionSubTitle =
    "Questions to ask? Contact me directly by filling out the form";
  return (
    <section id="contact-section" className="bg_primary_1 py-5 bg_shape_grp_6">
      <div className="container-lg">
        {showHeader ? (
          <SectionHeader title={sectionTitle} subTitle={sectionSubTitle} />
        ) : (
          <SectionSubText subText="Questions to ask? Contact me directly by filling out the form" />
        )}

        {/* Remove contact form and card - bring it back when needed */}
        {/* <div className="row my-5 gap-lg-0 gap-3 justify-content-lg-start justify-content-center">
          <div className="col-lg-8 col-sm-10 col-12 bg_primary_5 py-4 px-sm-4 px-2 rounded-lg">
            <ContactForm />
          </div>
          <div className="col-lg-4 col-sm-8 col-11 pt-3">
            <ContactCard />
          </div>

          <div className="col-lg-4 col-sm-8 col-11 pt-3">
            <ContactCard />
          </div>
        </div> */}

        <div className="row my-5 justify-content-center">
          {/* Contact Card */}
          <div className="col-lg-5 col-sm-8 col-12 pt-3 text-center">
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

ContactSection.defaultProps = {
  showHeader: true,
}

export default ContactSection;
