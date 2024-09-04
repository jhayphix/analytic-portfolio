// ... React modules
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
import PageTransition from "@layouts/PageTransition";

// ... Components
import PortfolioBreadCrumb from "@components/breadcrumb/PortfolioBreadCrumb";
import DashboardAndStoryTab from "@components/tabs/DashboardAndStoryTab";
import PageBannerSection from "@components/banners/PageBannerSection";
import DefaultSpinner from "@components/spinners/DefaultSpinner";

import ProjectDashboardSection from "@pages/project_details_page/sections/ProjectDashboardSection";
import StorySection from "@pages/project_details_page/sections/StorySection";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const ProjectDetailsPage = () => {
  const { project_details_page_effect } = useContext(DefaultContext);
  // Context
  const {
    active_dashboard_story_tab,
    active_project,
    project_is_loading,
    setProjectDetailPageParams,
  } = useContext(ProjectContext);

  // Set page params
  const params = useParams();
  useEffect(() => {
    setProjectDetailPageParams(params);
  }, [params, setProjectDetailPageParams]);

  const project_category = active_project?.categories?.[0]?.title || "Category";
  const project_title = active_project?.title || "Title";

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <PageTransition effect={project_details_page_effect}>
      <div className="container-lg" style={{ paddingBottom: "60px" }}>
        <PageBannerSection pageName={project_title} />

        <PortfolioBreadCrumb
          project_category={project_category}
          project_name={project_title}
        />

        <DashboardAndStoryTab />

        {project_is_loading ? (
          <DefaultSpinner />
        ) : active_dashboard_story_tab === "story" ? (
          <PageTransition effect="bottom">
            <StorySection />
          </PageTransition>
        ) : (
          <PageTransition effect="left">
            <ProjectDashboardSection />
          </PageTransition>
        )}
      </div>
    </PageTransition>
  );
};

export default ProjectDetailsPage;
