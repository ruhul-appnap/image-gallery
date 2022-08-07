import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex px-80 shadow py-4 shadow-blue-200">
      <div className="text-xl text-blue-600 font-bold">Logo</div>
      <div className="grow  flex justify-center text-lg">
        <ul className="flex font-semibold space-x-8">
          <li className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Home
            </NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink
              to="/upload"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              Upload
            </NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              {" "}
              About
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
            >
              {" "}
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
