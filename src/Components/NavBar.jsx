import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div
      className=" navbar-main  text-gray-300 text-1xl font-semibold w-full h-20 px-2 sm:px-24 flex justify-end sm:justify-between  items-center "
      style={{ boxShadow: "2px 2px 10px rgb(10, 10, 31" }}
    >
      <div className="h-full  font-serif text-3xl text-pink-900 italic tracking-wide leading-tight">
      </div>{" "}
      <div className="hidden sm:flex">
        <ul className="text-gray-500 hidden sm:flex items-center  gap-4  ">
          <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105"><a href="/">Home</a></li>
          <li  className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">About</li>
          <li  className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">Projects</li>
          <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">Contact</li>
          <button className="bg-gradient-to-br from-purple-600 to-black rounded-md px-5 py-2 text-gray-300 hover:text-white hover:bg-purple-700">
            Let's Talk
          </button>
        </ul>
      </div>
      <div className="flex sm:hidden absolute">
        <button type="button" 
        className=" hover:bg-gray-950 hover:text-white rounded-md px-3 py-2 hover:scale-105 flex flex-col gap-3 "
        >
          <span className="h-0.5 w-8 block bg-gray-400 rounded-md"></span>
          <span className="h-0.5 w-8 block bg-gray-400 rounded-md"></span>
          <span className="h-0.5 w-8 block bg-gray-400 rounded-md"></span>
          
        </button>
      </div>
    </div>
  );
};

export default NavBar;
