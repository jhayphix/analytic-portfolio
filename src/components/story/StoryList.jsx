// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const StoryList = ({ style, list, className }) => {
  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */
  return (
    <ul className={`__ul ${className}`}>
      {list?.map((list_item, index) => {
        return (
          // <li key={index} className="mb-2 lead">
          <li key={index} className={`${style}`}>
            {list_item}
          </li>
        );
      })}
    </ul>
  );
};

export default StoryList;
