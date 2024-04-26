import React, { useState } from "react";
import "./NavBar.css";
import { motion } from "framer-motion";
// import { SiCalendly } from "react-icons/si";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const buttonVariants = {
    initial: { rotate: 0 },
    crossed: { rotate: 45, scale: 1.15 },
  };
  return (
    <div
      className=" navbar-main  text-gray-300 text-1xl font-semibold w-full h-20 px-2 sm:px-24 flex justify-end sm:justify-between  items-center "
      style={{ boxShadow: "2px 2px 10px rgb(10, 10, 1" }}
    >
      <div className=" raheemTxt h-full  font-serif text-3xl text-pink-900 italic tracking-wide leading-tight">
        {/* raheem */}
      </div>{" "}
      <div className="hidden sm:flex">
        <ul className="text-gray-500 hidden sm:flex items-center  gap-4  ">
          <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">
            <a href="/">Home</a>
          </li>
          <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">
                        <a href="/">About</a>

          </li>
          <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">
                         <a href="/">Projects</a>

          </li>
          <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">
                         <a href="/">Contact</a>

          </li>
          <motion.button
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.08 },
          }}
          whileTap={{ scale: 1,
            transition: { duration: 0.1 }
         }}
          className="bg-gradient-to-br from-purple-600 to-gray-950 rounded-md px-5 py-2 text-gray-300 hover:text-white hover:bg-purple-700 animate-none">
            Lets Talk
          </motion.button>
        </ul>
      </div>
      <div className="flex sm:hidden absolute">
        <button
          onClick={() => setMenu(!menu)}
          type="button"
          className="hover:bg-gray-950 hover:text-white rounded-md px-3 py-2 hover:scale-105 flex flex-col gap-3 active:border"
          // use defined variants
        >
          <motion.span
            initial={false}
            animate={menu ? "crossed" : "initial"} // animate based on menu state
            variants={buttonVariants}
            className="h-0.5 w-8 block bg-gray-400 rounded-md"
          ></motion.span>
          <span className="h-0.5 w-8 block bg-gray-400 rounded-md"></span>
          <span className="h-0.5 w-8 block bg-gray-400 rounded-md"></span>
        </button>
      </div>
      {menu && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "-10%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className=" relative z-20 bg-black   p-32 top-60  flex justify-center h-full items-center gap-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", width: "100ch" }}
        >
          <div className=" flex">
            <ul className="text-gray-500 items-center flex flex-col gap-2 pb-10 ">
              <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105 ">
                <a href="/">Home</a>
              </li>
              <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">
                About
              </li>
              <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">
                Projects
              </li>
              <li className=" text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hover:scale-105">
                Contact
              </li>
              <motion.button
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.08 },
          }}
          whileTap={{ scale: 1,
            transition: { duration: 0.1 }
         }}
          className="bg-gradient-to-br from-purple-600 to-gray-950 rounded-md px-5 py-2 text-gray-300 hover:text-white hover:bg-purple-700 animate-none">
            Lets Talk
          </motion.button>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;
