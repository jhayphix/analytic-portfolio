// ... React modules

// ... Context

// ... Components
import SectionHeader from "@components/headers/SectionHeader";
import ServiceThread from "@components/cards/ServiceThread";
import SectionSubText from "@components/headers/SectionSubText";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ServiceSection = ({ showHeader }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <section id="service-section" className="bg_shape_grp_4 py-5">
      <div className="container-lg">
        {showHeader ? (
          <SectionHeader
            title="Services"
            subTitle="Join me as we analyze, interpret, learn, and navigate the ever-evolving landscape of data"
          />
        ) : (
          <SectionSubText subText="Join me as we analyze, interpret, learn, and navigate the ever-evolving landscape of data" />
        )}

        <ServiceThread />
      </div>
    </section>
  );
};

ServiceSection.defaultProps = {
  showHeader: true,
};

export default ServiceSection;
