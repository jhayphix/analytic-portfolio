// ... React modules

// ... Context

// ... Components

// ... Assets
/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AnimatedProgressBar = ({ valueNow, valueMin, valueMax }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow={valueNow}
        aria-valuemin={valueMin}
        aria-valuemax={valueMax}
        style={{ width: `${valueNow}%` }}
      ></div>
    </div>
  );
};

AnimatedProgressBar.defaultProps = [
  {
    valueNow: 70,
    valueMin: 0,
    valueMax: 100,
  },
];

export default AnimatedProgressBar;
