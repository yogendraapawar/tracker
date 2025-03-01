import React from "react";
import PropTypes from "prop-types";

const CategoryItem = ({ emoji, bgColor, onClick, categoryName }) => {
  return (
    emoji && (
      <div className="flex flex-col items-center">
        <div
          className="p-4 rounded-[10px] flex-shrink-0 flex items-center justify-center"
          style={{ backgroundColor: bgColor }}
          onClick={onClick}
        >
          <div className="text-2xl">{emoji}</div>
        </div>
        <div className="mt-2 text-center text-sm">{categoryName}</div>
      </div>
    )
  );
};

CategoryItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  categoryName: PropTypes.string.isRequired,
};

export default CategoryItem;
