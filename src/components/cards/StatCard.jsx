// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const StatCard = ({ stat }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="stat_card_container">
      <div className="stat_icon_container mb-2">
        <img src={stat?.icon} alt="Jhayphix" className="stat_icon" />
      </div>
      <h3 className="stat mb-2">{stat?.stat}</h3>
      <p className="lead text_muted_1">{stat?.text}</p>
    </div>
  );
};

export default StatCard;
