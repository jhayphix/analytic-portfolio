// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const SectionSubText = ({ subText }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="text-center mb-3">
      <p className="lead text_muted_1 text-center">{subText}</p>
    </div>
  );
};

SectionSubText.defaultProps = [
  {
    subText: "About the section",
  },
];
export default SectionSubText;
