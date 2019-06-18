import React from "react";
import "./tags.scss";

const Tag = ({ size, index }) => {
  const style = {
    width: size,
    height: size,
    marginLeft: index ? -(size / 3) : 0
  };
  return <div className="tag" style={style} />;
};

const Tags = ({ data, size }) => (
  <div className="tags">
    {data.map((x, i) => (
      <Tag key={i} index={i} size={size} />
    ))}
    <span>
      {data.length} tag{data.length > 1 ? "s" : null}
    </span>
  </div>
);

export default Tags;
