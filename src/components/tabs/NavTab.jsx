// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const NavTab = ({ activeTabIndex, tab_names, handleTabClick }) => {
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div className="nav_tab_container d-flex justify-content-center align-items-center">
      <div className="nav_tab bg_primary_5 py-1 d-flex justify-content-center align-items-center">
        {tab_names?.map((tab, index) => (
          <div
            key={index}
            className={`tab_item px-3 my-lg-0 my-1 ${
              activeTabIndex === index ? "tab_active" : ""
            }`}
            onClick={() => handleTabClick(index, tab.toLowerCase())}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavTab;
