import React from "react";
import PropTypes from "prop-types";

const StackedFilter = ({ onFilter, items, currentCategory }) => {
  return (
    <ul className="list-group">
      {items.map((category) => (
        <li
          key={category}
          onClick={() => onFilter(category)}
          className={
            category === currentCategory
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

StackedFilter.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default StackedFilter;
