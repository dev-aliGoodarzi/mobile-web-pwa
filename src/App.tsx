// React
import React, { useEffect, useState } from "react";
// React
// Modules
import { Routes, Route } from "react-router-dom";
// Modules
// CSS
import styles from "./App.module.css";
// CSS
// Components
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Setting from "./Components/Setting/Setting";
import Home from "./Containers/Home/Home";
// Components

const App = () => {
  // **********************************
  // States
  // **********************************
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [themeColor, setThemeColor] = useState<string>("rgb(166, 33 , 196)");
  // **********************************
  // States
  // **********************************
  // **********************************
  // LifeCycles
  // **********************************
  // for change Color Of HTML TAG
  useEffect(() => {
    document.getElementsByTagName("html")[0].classList.toggle("nightMode");
  }, [isNightMode]);
  // for change Color Of HTML TAG
  // **********************************
  // LifeCycles
  // **********************************
  // **********************************

  // **********************************
  return (
    <div className={isNightMode ? "nightMode" : ""}>
      <Header />
      <main
        className={`${styles.masterAppContainer}
                      flex flex-col items-center justify-start
                  `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/setting"
            element={
              <Setting
                currentTheme={themeColor}
                setThemeColor={setThemeColor}
                isNightMode={isNightMode}
                setNightMode={setIsNightMode}
              />
            }
          />
        </Routes>
      </main>
      <Footer
        isUserLoggedIn={isUserLoggedIn}
        themeColor={themeColor}
        isNightMode={isNightMode}
      />
    </div>
  );
};

export default App;
