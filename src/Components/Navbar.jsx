import React from "react";
import { useGlobalContext } from "../Context/context";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const {
    menu,
    displayMiddleMenu,
    isShowSubMenu,
    displaySubMenu,
    subMenu,
  } = useGlobalContext();

  function getMenuText(e) {
    const text = e.target.innerText.trim();
    const { left, right, top } = e.target.getBoundingClientRect();

    displaySubMenu(text);
  }
  return (
    <nav className="nav flex container">
      <div className="logo">
        <a href="./index">
          <img src="logo.svg" alt="" />
        </a>
      </div>
      <div className="links">
        <ul className="flex">
          {menu.map((item, index) => {
            return (
              <li onMouseOver={getMenuText} key={index}>
                <span>{item.page}</span>
              </li>
            );
          })}
        </ul>
        {/* *********** Sub Menu ***************** */}
        <div className={isShowSubMenu ? "sub-menu" : "sub-menu hide-submenu"}>
          {isShowSubMenu
            ? subMenu.map((item, index) => {
                return (
                  <div key={index} className="sm-inner">
                    <h4>{item.page}</h4>
                    <div className="sm-list flex">
                      {item.links.map((item, index) => {
                        return (
                          <a key={index + 5} href="./home">
                            {item.icon} <span>{item.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        {/* *********####################****************** */}
      </div>
      <a href="./" className="sign-in">
        Sign In
      </a>
      <div className="menu" onClick={displayMiddleMenu}>
        <FaBars />
      </div>
    </nav>
  );
}
