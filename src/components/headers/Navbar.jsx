import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-h-16 w-full px-[10%] py-2 bg-sky-400 shadow-lg">
      <div className="button-primary">
        <NavLink to="/">Best-Selected.Shop</NavLink>
      </div>

      <div className="flex space-x-2">
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
    </div>
  );
};

export default Navbar;
