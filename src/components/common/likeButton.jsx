import React from "react";

const LikeButton = ({ onClick, item }) => {
  let classes = "col fa fa-heart";
  item.liked === true ? (classes += "") : (classes += "-o");
  return (
    <i
      onClick={() => onClick(item)}
      className={(classes, "clickable")}
      aria-hidden="true"
    ></i>
  );
};

export default LikeButton;
