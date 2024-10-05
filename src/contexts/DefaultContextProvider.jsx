// Refrence to this context
// import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";
// const { portrait_img } = useContext(DefaultContext);

// ... React modules
import { createContext } from "react";

// ... Context

// ... Components

// ... Assets
import DefDashboardImg1 from "@assets/images/default_dashboard/dashboard_img_1.png";
import DefDashboardImg2 from "@assets/images/default_dashboard/dashboard_img_2.png";
import DefDashboardImg3 from "@assets/images/default_dashboard/dashboard_img_3.png";
import handHoldFeather from "@assets/images/icons/hand_hold_feather.svg";
// import PortraitImg from "@assets/images/portrait/avatar_dark.png";
import PortraitImg from "@assets/images/portrait/portrait.png";

export const DefaultContext = createContext({
  def_project_img_1: "",
  def_project_img_2: "",
  def_project_img_3: "",
});

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const DefaultContextProvider = ({ children }) => {
  const def_project_img_1 = DefDashboardImg1;
  const def_project_img_2 = DefDashboardImg2;
  const def_project_img_3 = DefDashboardImg3;

  const hand_hold_feather = handHoldFeather;
  const portrait_img = PortraitImg;

  /* Effects of motion 
  top | bottom | left | right | fade | flip | scale | rotate | slide-fade
  */
  const transition_duration = 0.6;
  const home_page_effect = "bottom";
  const about_page_effect = "flip";
  const contact_page_effect = "left";
  const service_page_effect = "right";
  const portfolio_page_effect = "bottom";
  const project_details_page_effect = "flip";

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    def_project_img_1,
    def_project_img_2,
    def_project_img_3,
    hand_hold_feather,
    portrait_img,

    transition_duration,
    home_page_effect,
    about_page_effect,
    contact_page_effect,
    service_page_effect,
    portfolio_page_effect,
    project_details_page_effect,
  };
  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <DefaultContext.Provider value={context}>
      {children}
    </DefaultContext.Provider>
  );
};

export default DefaultContextProvider;
