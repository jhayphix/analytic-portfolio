const LinkContent = ({ style, children, renderMarks, markDefs }) => {
  const linkMarkDefs = markDefs?.find((item) => item?._type === "link");

  const href = linkMarkDefs?.href;

  return (
    <a
      className={`__story_block ${style} __link
          `}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children &&
        children?.map((child) => (
          <span key={child._key} className={renderMarks(child.marks)}>
            {child.text} okay
          </span>
        ))}
    </a>
  );
};

export default LinkContent;
