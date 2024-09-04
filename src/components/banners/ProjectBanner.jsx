// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectBanner = ({ projectImg, projectName }) => {
  return (
    <div className="project_banner_container container-lg mb-lg-4 mt-lg-4 mt-3 mb-3">
      <img className="project_img" src={projectImg} alt={projectName} />
    </div>
  );
};

// ProjectBanner.defaultProps = [{ projectImg }];

export default ProjectBanner;
