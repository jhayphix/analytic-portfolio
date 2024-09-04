// Use this context
// import { ProjectContext } from "@contexts/ProjectContextProvider.jsx";
// const { handleProjectClick } = useContext(ProjectContext);

// ... React modules
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";

// ... Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

// ... Components

// ... Assets
import { fetchPosts, fetchProjectCategories } from "@src/fetch.js";

export const ProjectContext = createContext({
  active_project_tab_index: "",
  setProjectTabIndex: () => {},
  active_dashboard_story_tab: "",
  setActiveDashboardAndStoryTab: () => {},
  active_dashboard_story_index: "",
  setActiveDashboardAndStoryIndex: () => {},
  active_project_story_index: "",
  setActiveProjectStoryIndex: () => {},
  active_project: "",
  setActiveProject: () => {},

  active_project_tab_name: "",
  setActiveProjectTabName: () => {},
  changeProjectCategory: () => {},

  projectTabs: [],
  projects: [],
  filteredProjects: [],

  posts: [],
  setPosts: () => {},
  loadPosts: () => {},
  project_is_loading: true,
  setProjectIsLoading: () => {},
  projectIdMap: {},
  setProjectIdMap: () => {},
  projectDetailPageParams: {},
  setProjectDetailPageParams: () => {},
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const ProjectContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Project config
  |----------------------------------------
  */

  // Context
  const { projectDetailsURL } = useContext(NavigationContext);

  // Base config
  const navigate = useNavigate();
  const dashboard_and_story_tab = ["Dashboard", "Story"];

  // Set states
  const [active_project, setActiveProject] = useState({});
  const [active_project_tab_index, setProjectTabIndex] = useState(0);
  const [active_dashboard_story_index, setActiveDashboardAndStoryIndex] =
    useState(1);
  const [active_dashboard_story_tab, setActiveDashboardAndStoryTab] =
    useState("story");
  const [active_project_story_index, setActiveProjectStoryIndex] = useState(0);

  const [active_project_tab_name, setActiveProjectTabName] = useState("all");
  const [posts, setPosts] = useState([]);
  const [project_is_loading, setProjectIsLoading] = useState(true);
  const [projectTabs, setProjectTabs] = useState(["All"]);
  const [projectIdMap, setProjectIdMap] = useState({});
  const [projectDetailPageParams, setProjectDetailPageParams] = useState({});

  /*
  |----------------------------------------
  | Fetch Data
  |----------------------------------------
  */
  // Fetch all posts (Projects)
  const loadPosts = async () => {
    setProjectIsLoading(true);
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
    setProjectIsLoading(false);
  };
  // Fetch project's categories eg. Excel, Python, Timeseries
  const loadProjectCategories = async () => {
    const fetchedCategories = await fetchProjectCategories();
    const titlesArray = [
      "All",
      ...fetchedCategories?.map((item) => item.title),
    ];
    setProjectTabs(titlesArray);
  };
  // Lood the posts (Projects)
  useEffect(() => {
    loadPosts();
    loadProjectCategories();
  }, []);

  /*
  |----------------------------------------
  | Filter projects
  |----------------------------------------
  */
  // Filter projects base on selected category or tab clicked
  const projects = posts;
  const filteredProjects =
    active_project_tab_name === "all"
      ? projects
      : projects?.filter((project) =>
          project?.categories?.some(
            (cat) =>
              cat?.title?.toLowerCase() ===
              active_project_tab_name?.toLowerCase()
          )
        );

  /*
  |----------------------------------------
  | Working with short url
  |----------------------------------------
  */
  const generateShortId = (projectId) => {
    const bufferId = Buffer.from(projectId).toString("base64");
    return bufferId.substring(0, 8);
  };

  // On initial load or when projects change, create the projectIdMap
  useEffect(() => {
    const map = {};
    projects?.forEach((project) => {
      const shortId = generateShortId(project?._id);
      map[shortId] = project._id;
    });
    setProjectIdMap(map);
  }, [projects]);

  // Set the active project based on the short_id
  useEffect(() => {
    const short_id = projectDetailPageParams?.id;
    if (short_id && projectIdMap?.[short_id]) {
      const originalProjectId = projectIdMap?.[short_id];
      const project = projects?.find(
        (project) => project?._id === originalProjectId
      );
      setActiveProject(project);
    }
  }, [projectDetailPageParams?.id, projectIdMap, projects]);

  const handleProjectClick = (project) => {
    const project_category = project?.categories?.[0]?.title || "Category";
    const project_slug = project?.slug?.current || "slug";
    const project_id = project?._id || "";

    const shortId = generateShortId(project_id);
    navigate(projectDetailsURL(project_category, project_slug, shortId));
    setActiveProject(project);
  };

  /*
  |----------------------------------------
  | Tabs and Categories
  |----------------------------------------
  */
  // Get the tab which is clicked's index and category

  // Change selected project category (eg. Excel) when different tab is clicked
  const changeProjectCategory = (active_project_tab_name) => {
    const project_category = active_project_tab_name?.toLowerCase();
    setActiveProjectTabName(project_category);

    projectTabs?.forEach((tab) => {
      if (tab?.toLowerCase() === project_category) {
        const index = projectTabs?.indexOf(tab);
        setProjectTabIndex(index);
      }
    });
  };

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    active_project_tab_index,
    setProjectTabIndex,
    active_dashboard_story_tab,
    setActiveDashboardAndStoryTab,
    active_dashboard_story_index,
    setActiveDashboardAndStoryIndex,
    active_project_story_index,
    setActiveProjectStoryIndex,
    active_project,
    setActiveProject,

    active_project_tab_name,
    setActiveProjectTabName,
    changeProjectCategory,
    dashboard_and_story_tab,
    filteredProjects,

    generateShortId,
    handleProjectClick,
    navigate,

    posts,
    setPosts,
    loadPosts,

    project_is_loading,
    setProjectIsLoading,
    projectTabs,
    projects,
    projectIdMap,
    setProjectIdMap,
    projectDetailPageParams,
    setProjectDetailPageParams,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <ProjectContext.Provider value={context}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
