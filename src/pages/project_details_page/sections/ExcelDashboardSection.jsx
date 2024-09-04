// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import EmbedIframe from "@components/embed/EmbedIframe";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ExcelDashboardSection = () => {
  const {active_project} = useContext(ProjectContext);

  
  const iframe_src = active_project?.iframe_src;
  const iframe_height = active_project?.iframe_height || "600";
  const iframe_width = active_project?.iframe_width || "100";
  const iframe_url = active_project?.iframe_url;

  /*
  |----------------------------------------
  | Return For Excel
  |----------------------------------------
  */
  return (
    <>
      <div className="mb-lg-4 mb-3">
        <a
          href={iframe_url}
          className="view_workbook_link"
          target="_blank"
          rel="noreferrer"
        >
          View full-size workbook
        </a>
      </div>
      <EmbedIframe iframe_src={iframe_src} iframe_height={iframe_height} iframe_width={`${iframe_width}%`} />
    </>
  );
};

export default ExcelDashboardSection;
