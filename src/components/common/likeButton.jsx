import React from "react";

const LikeButton = ({ onClick, item }) => {
  let classes = "clickable col fa fa-heart";
  item.liked === true ? (classes += "") : (classes += "-o");
  return (
    <i onClick={() => onClick(item)} className={classes} aria-hidden="true"></i>
  );
};

export default LikeButton;
