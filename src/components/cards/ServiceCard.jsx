// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ServiceCard = ({ services }) => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="service_card">
      <div className="service_icon_container">
        <img
          className="service_icon"
          src={services?.icon}
          alt={services?.service}
        />
      </div>

      <div className="mt-5">
        <h5 className="fw-bold mb-4 text_secondary_1">{services?.service}</h5>
        <p className="lead text_muted_1">{services?.text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
