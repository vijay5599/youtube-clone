import React from "react";

const ButtonList = () => {
  const buttons = [
    "All",
    "Gaming",
    "News",
    "Music",
    "Live",
    "Cricket",
    "Cooking",
    "Javascript",
    "Python",
  ];
  return (
    <div className="flex m-2">
      {buttons.map((title) => (
        <button
          key={title}
          className="px-5 py-2 m-2 bg-gray-200 rounded-md font-semibold"
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
