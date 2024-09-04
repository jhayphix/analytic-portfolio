// ... React modules

// ... Context

// ... Components
import AboutContactSection from "@pages/home_page/sections/AboutContactSection";
import AboutMeTextSection from "@pages/home_page/sections/AboutMeTextSection";
import SkillsOverviewSection from "@pages/home_page/sections/SkillsOverviewSection";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AboutSection = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <>
      <section id="about-section" className="bg_primary_2 bg_shape_grp_2 py-5">
        <div className="container-lg">
          <div className="row gap-3 justify-content-center">
            {/* Profile */}
            <AboutContactSection />

            {/* About info */}
            <AboutMeTextSection />

            {/* Skills */}
            <SkillsOverviewSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
