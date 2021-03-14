import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "../Context/context";

export default function MiddleMenu() {
  const { isShowMiddleMenu, menu, hideMiddleMenu } = useGlobalContext();

  return (
    // "outer flex"
    <div
      className={
        isShowMiddleMenu ? "outer flex show-middle-menu" : "outer flex"
      }
    >
      <div className="inner ">
        <div className="close" onClick={hideMiddleMenu}>
          <FaWindowClose />
        </div>
        {menu.map((item, index) => {
          const { page, links } = item;
          return (
            <section key={index}>
              <h4>{page}</h4>
              <div className="grid">
                {links.map((item, index) => {
                  const { label, url, icon } = item;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      <span>{label}</span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
