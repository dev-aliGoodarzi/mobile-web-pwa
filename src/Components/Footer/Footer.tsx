// React
import React, { useState } from "react";
// React
// CSS
import styles from "./Footer.module.css";
// CSS
// Modules
import { Link } from "react-router-dom";
// Modules
// SVG
import {
  AiFillHome,
  AiOutlineLogin,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { I_FooterData } from "../../Models/interfaces";
// SVG

type FooterProps = {
  isUserLoggedIn: boolean;
  themeColor: string;
  isNightMode: boolean;
};
const Footer: React.FunctionComponent<FooterProps> = ({
  isUserLoggedIn,
  themeColor,
  isNightMode,
}) => {
  const footerInitialState: I_FooterData[] = [
    {
      Icon: <AiFillHome />,
      nameForShow: "خانه",
      routeForRedirect: "/",
      isSelected: true,
    },
    {
      Icon: <AiOutlineSetting />,
      nameForShow: "تنظیمات",
      routeForRedirect: "/setting",
      isSelected: false,
    },
    {
      Icon: <AiOutlineShoppingCart />,
      nameForShow: "سبد خرید",
      routeForRedirect: "/cart-items",
      isSelected: false,
    },
  ];
  const [footerItems, setFooterItems] =
    useState<I_FooterData[]>(footerInitialState);

  const colorChangerHandler = (e: React.MouseEvent<HTMLElement>): void => {
    const elId = e.currentTarget.id;
    const copyOfState: I_FooterData[] = [...footerItems];
    const selectedIndex = copyOfState.findIndex(
      (item) => item.routeForRedirect === elId
    );
    copyOfState.forEach((item) => (item.isSelected = false));
    copyOfState[selectedIndex].isSelected = true;
    setFooterItems(copyOfState);
    return;
  };
  return (
    <div
      className={`${
        styles.footerContainer
      } flex flex-row items-center justify-between fixed bottom-0 px-10 rounded-3xl ${
        isNightMode ? styles.nightMode : ""
      }`}
    >
      {footerItems.map((item) => (
        <Link
          to={item.routeForRedirect}
          key={item.routeForRedirect}
          className="flex flex-col items-center justify-center"
          id={item.routeForRedirect}
          style={{
            color: !isNightMode
              ? item.isSelected
                ? themeColor
                : "rgba(0,0,0,1)"
              : item.isSelected
              ? themeColor
              : "rgba(255,255,255,0.8)",
          }}
          onClick={(e) => {
            colorChangerHandler(e);
          }}
        >
          {item.Icon}
          <span>{item.nameForShow}</span>
        </Link>
      ))}
      {isUserLoggedIn ? (
        <Link
          to="/profile"
          className="flex flex-col items-center justify-center"
        >
          <CgProfile />
          <span>پروفایل</span>
        </Link>
      ) : (
        <Link to="/login" className="flex flex-col items-center justify-center">
          <AiOutlineLogin />
          <span>ورود</span>
        </Link>
      )}
    </div>
  );
};

export default Footer;
