import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import "./DarkToLight.css";
const Navbar = () => {
  const [theme, setTheme] = useState(false);
  console.log(theme);
  const handleClick = () => {
    setTheme(!theme);
    console.log(theme);
  };
  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>ToDo List</div>

      <div className={styles.item}>
        <button  className={styles.btn} onClick={handleClick}>{theme ? "Dark" : "Light"}</button>
      </div>
    </div>
  );
};

export default Navbar;
