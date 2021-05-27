import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({ onItemSelect, items, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem
              ? "clickable list-group-item active"
              : "clickable list-group-item"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  selectedItem: PropTypes.string,
  onItemSelect: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

ListGroup.defaultProps = {
  onItemSelect: (item) => console.log("Clicked"),
  selectedItem: null,
};

export default ListGroup;
