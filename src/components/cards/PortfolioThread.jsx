// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider";

// ... Components
import ProjectCard from "@components/cards/ProjectCard";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const PortfolioThread = () => {
  const { filteredProjects } = useContext(ProjectContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-sm-start justify-content-center my-5">
      {filteredProjects.length > 0
        ? filteredProjects?.map((project, index) => (
            <div className="col-sm-6 col-11" key={index}>
              <ProjectCard project={project} />
            </div>
          ))
        : "No Project Available"}
    </div>
  );
};

export default PortfolioThread;
