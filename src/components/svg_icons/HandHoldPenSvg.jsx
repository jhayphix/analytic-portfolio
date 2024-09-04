// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const HandHoldPenSvg = () => {
  const { hand_hold_feather } = useContext(DefaultContext);

  return (
    <>
      <img className="hand_holding_pen" src={hand_hold_feather} alt="..." />
    </>
  );
};

export default HandHoldPenSvg;
