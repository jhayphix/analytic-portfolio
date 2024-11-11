// For both excel and python because of iframe


// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import EmbedIframe from "@components/embed/EmbedIframe";
import EmbedIframe2 from "@components/embed/EmbedIframe2";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ExcelDashboardSection = () => {
  const {active_project} = useContext(ProjectContext);

  
  const iframe_src = active_project?.iframe_src;
  const iframe_url = active_project?.iframe_url;
  const project_category = active_project?.categories?.[0]?.title || "Category";
  const porject_category_lowercase = project_category?.toLowerCase();

  /*
  |----------------------------------------
  | Return For Excel
  |----------------------------------------
  */
  return (
    <>
      <div className="mb-lg-2 mb-2">
        <a
          href={iframe_url}
          className="view_workbook_link"
          target="_blank"
          rel="noreferrer"
        >
          View full-size workbook
        </a>
      </div>
      {
        porject_category_lowercase === "excel" && <EmbedIframe iframe_src={iframe_src} />
      }
      {
        porject_category_lowercase === "python" && <EmbedIframe2 iframe_src={iframe_src} />
      }
      
    </>
  );
};

export default ExcelDashboardSection;
