// ... React modules
import { BsArrowUpShort } from "react-icons/bs";

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const BackToTopButton = () => {
  /*
  |----------------------------------------
  | Functions
  |----------------------------------------
  */
  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling
    });
  };
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <div
      role="button"
      className="back_to_top d-sm-flex d-none align-items-center justify-content-center"
      onClick={scrollToTop}
    >
      <BsArrowUpShort size={30} className="back_to_top_icon" />
    </div>
  );
};

export default BackToTopButton;
