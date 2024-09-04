// ... React modules
import { useContext } from "react";

// ... Context
import { ProfileContext } from "@contexts/ProfileContextProvider.jsx";

// ... Components
import ServiceCard from "@components/cards/ServiceCard";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ServiceThread = () => {
  const { fullServiceData } = useContext(ProfileContext);
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  const services = fullServiceData;
  return (
    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-sm-start justify-content-center my-5">
      {services?.map((services, index) => (
        <div className="col-sm-6 col-11 mb-5" key={index}>
          <ServiceCard services={services} />
        </div>
      ))}
    </div>
  );
};

export default ServiceThread;
