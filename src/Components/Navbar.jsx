import React from "react";
import { useGlobalContext } from "../Context/context";
import { FaBars } from "react-icons/fa";
export default function Navbar() {
  const { menu } = useGlobalContext();

  return (
    <nav className="nav flex container">
      <div className="logo">
        <a href="">
          <img src="logo.svg" alt="" />
        </a>
      </div>
      <div className="links">
        <ul className="flex">
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.page}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <a href="#" className="sign-in">
        Sign In
      </a>
      <div className="menu">
        <FaBars />
      </div>
    </nav>
  );
}
