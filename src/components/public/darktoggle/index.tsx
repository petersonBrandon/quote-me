"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TbSun, TbMoon } from "react-icons/tb";

const index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative group rounded-full bg-white text-black dark:bg-black dark:text-white flex justify-center items-center"
    >
      <div className="absolute w-full h-full rounded-full ring-2 ring-inset ring-black dark:ring-white group-hover:scale-110 scale-95 ease-in-out duration-300" />
      <div className="p-3 bg-white dark:bg-black z-10 rounded-full">
        {theme === "dark" ? <TbSun size={30} /> : <TbMoon size={30} />}
      </div>
    </button>
  );
};

export default index;
