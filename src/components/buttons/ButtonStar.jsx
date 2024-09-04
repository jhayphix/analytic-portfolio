import SVGStar from "@components/svg_icons/SVGStar";

const ButtonStar = ({ btn_text, onClick, className }) => {
  return (
    <button
      id="button_star"
      className={`${className} custom-button`}
      onClick={onClick}
    >
      {btn_text}
      <div className="star-1">
        <SVGStar />
      </div>
      <div className="star-2">
        <SVGStar />
      </div>
      <div className="star-3">
        <SVGStar />
      </div>
      <div className="star-4">
        <SVGStar />
      </div>
      <div className="star-5">
        <SVGStar />
      </div>
      <div className="star-6">
        <SVGStar />
      </div>
    </button>
  );
};

ButtonStar.defaultProps = [
  {
    btn_text: "Button",
  },
];

export default ButtonStar;
