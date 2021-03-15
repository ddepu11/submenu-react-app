import React from "react";
import { useGlobalContext } from "../Context/context";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.svg";

export default function Navbar() {
  const {
    menu,
    displayMiddleMenu,
    isShowSubMenu,
    displaySubMenu,
    subMenu,
    location,
  } = useGlobalContext();

  const { center, bottom } = location;

  // console.log(styleSm);
  function getMenuText(e) {
    const text = e.target.innerText.trim();
    let { left, right, bottom } = e.target.getBoundingClientRect();
    let center = (left + right) / 2;
    bottom = bottom + 5;
    center = center - 150;
    displaySubMenu(text, { center, bottom });
  }

  return (
    <nav className="nav flex container">
      <div className="logo">
        <a href="./index">
          <img src={logo} alt="" />
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
        <div
          style={{ left: `${center}px`, top: `${bottom}px` }}
          className={
            isShowSubMenu ? "sub-menu show-sub-menu" : "sub-menu hide-submenu"
          }
        >
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
