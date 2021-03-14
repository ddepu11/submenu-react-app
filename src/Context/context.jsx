import React, { useState, createContext, useContext } from "react";
import menu from "../data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isShowMiddleMenu, setIsShowMiddleMenu] = useState(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const [subMenu, setSubMenu] = useState([{ page: "", links: {} }]);

  const displayMiddleMenu = () => {
    setIsShowMiddleMenu(true);
  };

  const hideMiddleMenu = () => {
    setIsShowMiddleMenu(false);
  };

  const displaySubMenu = (menuText) => {
    const f = menuText.toLocaleLowerCase();
    const filteredMenu = menu.filter((item) => {
      const cw = item.page.toLocaleLowerCase();
      return f === cw;
    });
    setSubMenu([...filteredMenu]);

    setIsShowSubMenu(true);
  };

  const hideSubMenu = () => {
    setIsShowSubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        menu,
        isShowMiddleMenu,
        hideMiddleMenu,
        displayMiddleMenu,
        isShowSubMenu,
        displaySubMenu,
        hideSubMenu,
        subMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
