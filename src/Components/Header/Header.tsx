// React
import React from "react";
// React
// CSS
import styles from "./Header.module.css";
// CSS
// Images
// Images
// Modules
// Modules
const Header = () => {
  return (
    <header
      className={`${styles.headerContainer} flex flex-row-reverse items-center justify-between fixed`}
    >
      <input
        type="text"
        placeholder="جستجو در محصولات"
        className="rounded-2xl"
      />
      <span>LOGO</span>
    </header>
  );
};

export default Header;
