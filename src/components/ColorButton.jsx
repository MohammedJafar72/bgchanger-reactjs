import React from "react";

function ColorButton({ color, text, onColorChange }) {
  const handleClick = () => {
    onColorChange(color);
  };

  return (
    <button
      type="button"
      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm h-10 px-5 py-2 mx-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default ColorButton;
