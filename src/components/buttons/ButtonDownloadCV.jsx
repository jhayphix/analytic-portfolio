// Modules
import { useContext } from "react";

// Context
import { NavigationContext } from "@contexts/NavigationContextProvider";

// Components
import ButtonDocument from "@components/buttons/ButtonDocument";

const ButtonDownloadCV = () => {
  const { resume_path } = useContext(NavigationContext);

  const handleDownloadClick = () => {
    window.open(resume_path, "_blank");
  };

  return (
    <ButtonDocument onClick={handleDownloadClick} btn_text="View My Resume" />
  );
};

export default ButtonDownloadCV;
