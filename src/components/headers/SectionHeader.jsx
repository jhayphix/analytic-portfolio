// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const SectionHeader = ({ title, subTitle }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="text-center mb-5">
      <h2 className="display-6 fw-bold mb-2 ">{title?.toUpperCase()}</h2>
      <p className="lead text_muted_1 text-center">{subTitle}</p>
    </div>
  );
};

SectionHeader.defaultProps = [
  {
    title: "Header",
    subTitle: "Sub Header",
  },
];
export default SectionHeader;
