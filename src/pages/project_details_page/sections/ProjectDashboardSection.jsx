// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import ExcelDashboardSection from "@pages/project_details_page/sections/ExcelDashboardSection.jsx";
import DefaultDashboardSection from "@pages/project_details_page/sections/DefaultDashboardSection.jsx";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectDashboardSection = () => {
  // Context
  const {active_project} = useContext(ProjectContext);

  const project_category = active_project?.categories?.[0]?.title || "Category";
  const mod_project_category = project_category?.toLowerCase()
  const project_iframe_status = active_project?.iframe_status || false

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  if (mod_project_category === "excel" && project_iframe_status === true) {
    return <ExcelDashboardSection />;
  } else {
    return <DefaultDashboardSection />;
  }
};

export default ProjectDashboardSection;
