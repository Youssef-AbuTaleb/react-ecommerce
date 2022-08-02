import React from "react";
import classes from "./Header.module.css";

import coverSrc from "../../assets/cover2.jpg";
import CustomNavbar from "./CustomNavBar";

const Header = (props) => {
  return (
    <header id="top">
      <CustomNavbar onShow={props.onShow} />
      <div className={classes["main-image"]}>
        <img src={coverSrc} alt="Header main" />
      </div>
    </header>
  );
};

export default Header;
