const BlockContent = ({ style, listItem, children, renderMarks }) => {
  return (
    <div
      className={`__story_block ${style} ${
        listItem === "bullet" ? "__list_bullet" : ""
      } ${listItem === "number" ? "__list_number" : ""} 
          `}
    >
      {children &&
        children?.map((child) => (
          <span key={child._key} className={renderMarks(child.marks)}>
            {child.text}
          </span>
        ))}
    </div>
  );
};

export default BlockContent;
