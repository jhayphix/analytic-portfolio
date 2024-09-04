// ... React modules
import { useContext } from "react";

// ... Context
import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";

// ... Components

// ... Assets
import StatCard from "@components/cards/StatCard";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectStatSection = () => {
  const { projectStats } = useContext(ProfileContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <section id="stat_section" className="bg_shape_grp_5 bg_primary_4 py-5">
      <div className="container-lg">
        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 justify-content-sm-start justify-content-center my-5">
          {projectStats?.map((stat, index) => (
            <div className="col-sm-6 col-11 mb-4 mb-lg-0" key={index}>
              <StatCard stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStatSection;
