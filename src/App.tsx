// React
import React, { useState } from "react";
// React
// Modules
import { Routes, Route } from "react-router-dom";
// Modules
// CSS
import styles from "./App.module.css";
// CSS
// Components
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Setting from "./Components/Setting/Setting";
import Home from "./Containers/Home/Home";
// Components

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  return (
    <div>
      <div
        className={`${styles.masterAppContainer}
                      flex flex-col items-center justify-start
                  `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
      <Footer isUserLoggedIn={isUserLoggedIn} />
    </div>
  );
};

export default App;
