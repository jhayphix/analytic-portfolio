// ... React modules
import { useContext } from "react";

// ... Context
import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";

// ... Components
import NavTab from "@components/tabs/NavTab";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DashboardAndStoryTab = () => {
  const {
    dashboard_and_story_tab,
    setActiveDashboardAndStoryTab,
    active_dashboard_story_index,
    setActiveDashboardAndStoryIndex,
  } = useContext(ProjectContext);

  const handleDashboardAndStoryTabClick = (tab_index, tab_name) => {
    setActiveDashboardAndStoryIndex(tab_index);
    setActiveDashboardAndStoryTab(tab_name);
  };
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="mb-lg-4 my-3">
      <NavTab
        activeTabIndex={active_dashboard_story_index}
        tab_names={dashboard_and_story_tab}
        handleTabClick={handleDashboardAndStoryTabClick}
      />
    </div>
  );
};

export default DashboardAndStoryTab;
