// ... React modules
import { Link } from "react-router-dom";
import { useContext } from "react";

// ... Context
import { NavigationContext } from "@contexts/NavigationContextProvider";
import { ProjectContext } from "@contexts/ProjectContextProvider";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const PortfolioBreadCrumb = ({ project_category, project_name }) => {
  const { home, portfolio } = useContext(NavigationContext);
  const { changeProjectCategory } = useContext(ProjectContext);

  const home_path = home?.path || "";
  const portfolio_path = portfolio?.path || "";

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <>
      <nav
        style={{ "--bs-breadcrumb-divider": "none" }}
        aria-label="breadcrumb"
        className="mt-lg-2 mt-1"
      >
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to={home_path}>Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link
              to={portfolio_path}
              onClick={() => changeProjectCategory("all")}
            >
              Projects
            </Link>
          </li>
          <li className="breadcrumb-item active">
            {/* <Link
              to={portfolio_path}
              onClick={() => {
                changeProjectCategory(project_category);
              }}
            >
              {project_category || ""}
            </Link> */}
            {project_category || ""}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {project_name || ""}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default PortfolioBreadCrumb;
