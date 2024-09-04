// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider";
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DefaultDashboardSection = () => {
  const { def_project_img_2 } = useContext(DefaultContext);

  const { active_project } = useContext(ProjectContext);

  const project_main_image =
    active_project?.main_image?.asset?.url || def_project_img_2;

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <>
      <div className="project_details_section">
        <img
          className="dashboard_img"
          src={project_main_image}
          alt={"Project name"}
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop if the default image fails
            e.target.src = def_project_img_2; // Set the default image on error
          }}
        />
      </div>
    </>
  );
};

export default DefaultDashboardSection;
