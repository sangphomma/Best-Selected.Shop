import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosAdd as AddIcon } from "react-icons/io";
import { FiAlignJustify as MobileMenu } from "react-icons/fi";
import { FiX as CloseX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex relative justify-between items-center max-h-16 w-full px-[10%] py-2 bg-transparent md:bg-sky-400 md:shadow-lg">
      <div className="py-1 px-3 relative  rounded bg-yellow-200  border-yellow-400 border-b-2 shadow-sm ">
        <div
          className="bg-red-500 w-12 h-12 absolute 
          sm:mix-blend-hue  rounded-md
          left-0 top-[50%] translate-x-[-50%] translate-y-[-50%]"
        ></div>
        <NavLink to="/" className="hidden sm:block ">
          <div className="z-20 font-Nunito">
            <span className="text-indigo-700 font-semibold">
              Best-Selected.
              <span className="text-green-500 font-bold">Shop</span>
            </span>
          </div>
        </NavLink>
      </div>

      <div className="hidden md:flex space-x-2  ">
        <div className="bg-sky-200 hover:bg-sky-100 cursor-pointer px-3 py-2 rounded ">
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <div className="bg-sky-200 hover:bg-sky-100 cursor-pointer px-3 py-2 rounded ">
          <NavLink to="/addtodo">Add Todo</NavLink>
        </div>
        <div className="bg-sky-200 hover:bg-sky-100 cursor-pointer px-3 py-2 rounded ">
          <NavLink to="/todos/1">Show Todo</NavLink>
        </div>
      </div>
      <div className="md:hidden flex gap-1">
        <div className="p-2 rounded bg-sky-200 hover:bg-sky-100 cursor-pointer shrink-0">
          <AddIcon size={30} />
        </div>
        <div
          onClick={() => setMenuOpen((curr) => !curr)}
          className="p-2 rounded bg-sky-200 hover:bg-sky-100 cursor-pointer shrink-0"
        >
          <MobileMenu size={30} />
        </div>
      </div>

      {menuOpen && (
        <div
          className="absolute  z-10 flex flex-col justify-center items-center top-0 right-0 h-screen w-full 
         bg-slate-600"
        >
          <div
            onClick={() => setMenuOpen((curr) => !curr)}
            className="w-8 h-8 flex justify-center items-center cursor-pointer
            absolute top-3 right-3 bg-slate-50 rounded-full"
          >
            <CloseX size={40} />
          </div>
          <div className="flex flex-col w-[300px] place-self-center z-40 ">
            <div
              onClick={() => setMenuOpen((curr) => !curr)}
              className="bg-sky-200 hover:bg-sky-100 w-full cursor-pointer px-3 py-2 border-b-4 border-r-sky-300 "
            >
              <NavLink to="/todos">Todos</NavLink>
            </div>
            <div
              onClick={() => setMenuOpen((curr) => !curr)}
              className="bg-sky-200 hover:bg-sky-100 w-full cursor-pointer px-3 py-2 border-b-4 border-r-sky-300  "
            >
              <NavLink to="/addtodo">Add Todo</NavLink>
            </div>
            <div
              onClick={() => setMenuOpen((curr) => !curr)}
              className="bg-sky-200 hover:bg-sky-100 w-full cursor-pointer px-3 py-2 border-b-4 border-r-sky-300  "
            >
              <NavLink to="/todos/1">Show Todo</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
