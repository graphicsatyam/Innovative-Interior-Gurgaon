import React, { useState } from "react";
import "./Header.css";
import { GoSidebarExpand } from "react-icons/go";


  const Header = () => {
    // Now Here we use React Hooks
    const [menuOpened, setmenuOpened] = useState(false);
    // const HeaderShadow = useHeaderShadow();
    
    const getMenuStyles = (menuOpened) => {
      if (document.documentElement.clientWidth <= 640) {
        // console.log("outside of sidebar reached")
        return { right: !menuOpened && "-100%" };
      }
    };
  return (
    <div className="wrapper">
      <div className="logo">
        <img src="/images/logo.png" alt=""/>
      </div>
      <div className="list">
        <ul
          style={getMenuStyles(menuOpened)}
          className="menu"
          >
          <li> <a href="#"> HOME </a> </li>
          <li>  <a href="#about"> ABOUT US </a> </li>
          <li> <a href="#product"> PRODUCT </a></li>
          <li> <a href="#clients"> OUR CLIENTS </a></li>
          {/* <li> <a href="#views"> PEOPLE VIEWS </a></li> */}
          <li> <a href="#contact"> CONTACT US </a></li>
         </ul>
         <div
            className="menuIcon"
            onClick={() => setmenuOpened((prev) => !prev)}
          >
            <GoSidebarExpand size={25} /> 
          </div>
      </div>
    </div>
  );
};

export default Header;
