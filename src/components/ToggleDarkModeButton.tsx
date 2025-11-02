"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

function ToggleDarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleTheme = (event: SyntheticEvent) => {
    event.stopPropagation();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      id="themeChanger"
      aria-label="Change theme"
      className={`cursor-pointer transition-all duration-700 ease-in-out h-7`}
      onClick={handleTheme}
    >
      {!mounted ? null :
      theme === "light" ? (
        <IoMoon className="w-6 h-6" />
      ) : (
        <IoSunny className="w-6 h-6" />
      )}
    </button>
  );
}

export default ToggleDarkModeButton;
