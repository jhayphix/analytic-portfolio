// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const PageBannerSection = ({ pageName }) => {
  return (
    <div className="page_banner_container pt-4 pb-4 container-lg">
      <h1 className="page_name display-6">{pageName?.toUpperCase()}</h1>
    </div>
  );
};

PageBannerSection.defaultProps = [{ pageName: "Project" }];

export default PageBannerSection;
