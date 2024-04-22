import React from "react";

export const BookTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-primary-500 text-white bg-gradient-to-r from-primary-500  via-primary-450 to-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`transition duration-75 rounded-full border-2 px-6 py-3 text-xl m-1 md:m-0 cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
