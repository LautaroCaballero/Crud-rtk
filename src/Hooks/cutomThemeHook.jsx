import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.themeSelected ? localStorage.themeSelected : "light");

    // ---- IMPORTANTE!!! EN tailwind.config AGREGAR A module.exports = { darkMode: 'class', content...} ---- //

  const handleThemeButton = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("themeSelected", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("themeSelected", "dark");
    }
  };

  const getTheme = () => {
    if (localStorage.themeSelected) {
      setTheme(localStorage.themeSelected);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const changeDocumentTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(()=>{
    getTheme()
  },[])

  useEffect(()=>{
    changeDocumentTheme()
  },[theme])

  return {theme, handleThemeButton, changeDocumentTheme};
};

export default useTheme;