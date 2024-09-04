const ButtonSpace = ({ btn_text, className }) => {
  return (
    <button id="button_space" className={className} type="button">
      <strong>{btn_text}</strong>
      <div id="button_space_container_stars">
        <div id="button_space_stars"></div>
      </div>

      <div id="button_space_glow">
        <div className="button_space_circle"></div>
        <div className="button_space_circle"></div>
      </div>
    </button>
  );
};

ButtonSpace.defaultProps = [
  {
    btn_text: "Button",
  },
];

export default ButtonSpace;
