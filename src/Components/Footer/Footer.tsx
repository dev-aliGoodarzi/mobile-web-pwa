// React
import React from "react";
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
};
const Footer: React.FunctionComponent<FooterProps> = ({ isUserLoggedIn }) => {
  const footerData: I_FooterData[] = [
    {
      Icon: <AiFillHome />,
      nameForShow: "خانه",
      routeForRedirect: "/home",
    },
    {
      Icon: <AiOutlineSetting />,
      nameForShow: "تنظیمات",
      routeForRedirect: "/setting",
    },
    {
      Icon: <CgProfile />,
      nameForShow: "پروفایل",
      routeForRedirect: "/profile",
    },
  ];
  return (
    <div
      className={`${styles.footerContainer} flex flex-row items-center justify-between fixed bottom-0 px-10 rounded-3xl`}
    >
      {footerData.map((item) => (
        <Link
          to={item.routeForRedirect}
          className="flex flex-col items-center justify-center"
        >
          {item.Icon}
          <span>{item.nameForShow}</span>
        </Link>
      ))}
      {isUserLoggedIn ? (
        <Link to="/cart" className="flex flex-col items-center justify-center">
          <AiOutlineShoppingCart />
          <span>سب خرید</span>
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
