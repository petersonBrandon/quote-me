"use client";

import React, { useEffect, useState } from "react";
import { TbHome, TbDatabase, TbLogout2 } from "react-icons/tb";
import Link from "next/link";

const index = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <nav className="fixed left-0 h-screen flex flex-col items-center justify-between z-50 w-60">
      <div className="absolute -right-6 h-full flex flex-col justify-center items-center">
        <span className="h-11/12 w-[1px] bg-gray-500 dark:bg-white opacity-50" />
      </div>
      <div className="flex flex-col space-y-3 justify-start items-center w-full h-full mt-10">
        <Link
          href="/admin"
          className="group relative flex justify-start items-center w-full"
        >
          <span className="absolute w-full h-full rounded-r-full ring-2 ring-inset ring-black dark:ring-white group-hover:scale-110 scale-95 ease-in-out duration-300 -translate-x-2" />
          <div className="flex justify-start items-center space-x-2 rounded-r-full px-10 py-3 w-full bg-white dark:bg-black z-10">
            <TbHome size={30} />
            <p>Home</p>
          </div>
        </Link>
        {/* <span className="h-[1px] w-4/5 opacity-50 bg-gray-500 dark:bg-white" /> */}
        <Link
          href="/admin"
          className="group relative flex justify-start items-center w-full"
        >
          <span className="absolute w-full h-full rounded-r-full ring-2 ring-inset ring-black dark:ring-white group-hover:scale-110 scale-95 ease-in-out duration-300 -translate-x-2" />
          <div className="flex justify-start items-center space-x-2 rounded-r-full px-10 py-3 w-full bg-white dark:bg-black z-10">
            <TbDatabase size={30} />
            <p>Quote DB</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-start mb-10 w-full">
        <button
          onClick={() => {
            // TODO: Log Out User
          }}
          className="group relative flex justify-start items-center w-full"
        >
          <span className="absolute w-full h-full rounded-r-full ring-2 ring-inset ring-black dark:ring-white group-hover:scale-110 scale-95 ease-in-out duration-300 -translate-x-2" />
          <div className="flex justify-start items-center space-x-2 rounded-r-full px-10 py-3 w-full bg-white dark:bg-black z-10">
            <TbLogout2 size={30} />
            <p>Log Out</p>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default index;
