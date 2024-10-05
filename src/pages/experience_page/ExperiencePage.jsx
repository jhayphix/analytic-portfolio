// React modules
import { useContext } from "react";

// Context
import { NavigationContext } from "../../contexts/NavigationContextProvider";

// Components

const ExperiencePage = () => {
  const { resume_path } = useContext(NavigationContext);

  return (
    <>
      <div style={{ height: "100vh" }}>
        <embed
          src={resume_path}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default ExperiencePage;
