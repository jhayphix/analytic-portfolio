import { FaWrench } from "react-icons/fa";

const BrandName = () => {
  return (
    <>
      <span className="text_accent_1"> &#123; Jhay</span>Ph
      <span className="text_accent_1">
        <FaWrench className="brand_wrench" />
      </span>
      x <span className="text_accent_1"> &#125; </span>
    </>
  );
};

export default BrandName;
