// ... React modules
import { useState, useEffect } from "react";

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AutoWriteText = () => {
  const [autoWriteText] = useState("Data and Predictive Analyst...");
  const [autoWriteIndex, setAutoWriteIndex] = useState(0);
  const showcaseAutoWriteEl = document.querySelector(".auto_write_text");

  useEffect(() => {
    function autoWriteFunc() {
      if (showcaseAutoWriteEl) {
        showcaseAutoWriteEl.textContent = autoWriteText.slice(
          0,
          autoWriteIndex
        );
      }

      // setAutoWriteIndex(autoWriteIndex + 1);
      setAutoWriteIndex((prev) => prev + 1);

      if (autoWriteIndex >= autoWriteText.length) {
        setAutoWriteIndex(0);
      }
    }

    const interval = setInterval(autoWriteFunc, 200);

    return () => {
      clearInterval(interval);
    };
  }, [autoWriteText, autoWriteIndex, showcaseAutoWriteEl]);

  return (
    <>
      <span className="auto_write_text text_secondary_1">
        {/* Auto write text here */}
      </span>
    </>
  );
};

export default AutoWriteText;
