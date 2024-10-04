import {
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaProjectDiagram,
  FaUser,
  FaClipboardList,
} from "react-icons/fa";

/*
  |----------------------------------------
  | Navigation
  |----------------------------------------
*/

const base_route = "/analytic-portfolio";
const mobile_icon_size = 20;

const navigation_db = {
  base_route: base_route,
  home: {
    name: "Home",
    path: `${base_route}/`,
    icon: <FaHome size={mobile_icon_size} />,
    end: true,
  },
  about: {
    name: "About",
    path: `${base_route}/about`,
    icon: <FaUser size={mobile_icon_size} />,
    end: false,
  },
  experience: {
    name: "Experience",
    path: `${base_route}/experience`,
    icon: <FaBriefcase size={mobile_icon_size} />,
    end: false,
  },
  service: {
    name: "Skills",
    path: `${base_route}/skills`,
    icon: <FaClipboardList size={mobile_icon_size} />,
    end: false,
  },
  contact: {
    name: "Contact",
    path: `${base_route}/contact`,
    icon: <FaEnvelope size={mobile_icon_size} />,
    end: false,
  },
  portfolio: {
    name: "Projects",
    path: `${base_route}/portfolio`,
    icon: <FaProjectDiagram size={mobile_icon_size} />,
    end: false,
  },
  project: {
    name: "Project",
    path: `${base_route}/p/:cat/:slug-:id`,
    icon: null,
    end: false,
  },
};

export default navigation_db;
