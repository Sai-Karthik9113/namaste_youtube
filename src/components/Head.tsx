import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import type { AppDispatch } from "../utils/store";

const Head = () => {
  const dispatch: AppDispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col px-4 py-2 m-2">
      <div className="flex items-center gap-5 col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="Hamburger Menu"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-6 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
          alt="Youtube Logo"
        />
      </div>
      <div className="flex justify-center items-center gap-5 col-span-10">
        <div className="flex">
          <input
            className="border border-gray-300 w-lg rounded-l-4xl p-2 pl-4"
            type="text"
            placeholder="Search"
          />
          <button className="flex justify-center items-center border border-l-0 border-gray-300 w-16 rounded-r-4xl p-2 bg-gray-100">
            <img
              className="h-6"
              src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
              alt="Search"
            />
          </button>
        </div>
        <button className="bg-gray-100 p-2 rounded-4xl">
          <img
            className="h-6"
            src="https://icons.veryicon.com/png/o/object/material-design-icons-1/microphone-46.png"
            alt="Microphone"
          />
        </button>
      </div>
      <div className="flex items-center justify-end col-span-1">
        <div className="flex px-3 py-2 border border-gray-300 rounded-4xl gap-2 cursor-pointer">
          <img
            className="h-5"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="User Icon"
          />
          <span className="text-gray-600 font-medium text-sm"> Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default Head;
