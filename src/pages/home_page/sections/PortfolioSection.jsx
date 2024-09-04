// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider";

// ... Components
import SectionHeader from "@components/headers/SectionHeader";
import PortfolioThread from "@components/cards/PortfolioThread";
import ProjectNavTab from "@components/tabs/ProjectNavTab";
import SectionSubText from "@components/headers/SectionSubText";
import DefaultSpinner from "@components/spinners/DefaultSpinner";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const PortfolioSection = ({ showHeader }) => {
  const { project_is_loading } = useContext(ProjectContext);
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  const sectionTitle = "My Portfolio";
  const sectionSubTitle = "Have a glance at some of my recent projects";
  return (
    <section
      id="portfolio-section"
      className="bg_primary_1 py-5 bg_shape_grp_3"
    >
      <div className="container-lg">
        {showHeader ? (
          <SectionHeader title={sectionTitle} subTitle={sectionSubTitle} />
        ) : (
          <SectionSubText subText={sectionSubTitle} />
        )}
        {project_is_loading ? (
          <DefaultSpinner />
        ) : (
          <>
            {" "}
            <ProjectNavTab />
            <PortfolioThread />{" "}
          </>
        )}
      </div>
    </section>
  );
};
PortfolioSection.defaultProps = {
  showHeader: true,
};
export default PortfolioSection;
