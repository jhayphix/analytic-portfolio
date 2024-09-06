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
            <div className="col-md-5 col-sm-8 col-12">
              <AboutContactSection />
            </div>

            {/* About info */}
            <div className="col-md-5 col-sm-9 col-11">
              <AboutMeTextSection />
            </div>

            {/* Skills */}
            <div className="col-md-10 col-sm-9 col-11">
              <SkillsOverviewSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
