import { Buttons } from "./button";
import { FiSun } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
import { Navigation } from "./navigation";
import { IoMdCloseCircleOutline } from "react-icons/io";

const navigations = [
  {
    name: "Миний тухай",
    link: "#about",
  },
  {
    name: "Ур чадварууд",
    link: "#skills",
  },
  {
    name: "Төслүүд",
    link: "#work",
  },
  {
    name: "Холбогдох",
    link: "#contact",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }
  const [light, setLight] = useState(true);
  function onLight() {
    setLight(true);
    document.documentElement.classList.remove("dark");
  }
  function offLight() {
    setLight(false);
    document.documentElement.classList.add("dark");
  }

  return (
    <header className=" py-[16px] sticky top-0 bg-gray-50 dark:bg-[#1F2937] relative z-30">
      <div className="max-w-7xl mx-auto px-[3%] flex justify-between">
      <div className="font-semibold text-2xl">{"< Javzaa />"}</div>

      <div>
        <div
          className={`fixed top-0 bottom-0 w-full bg-slate-500/90  transition-all 
            ${open ? "opacity-100 right-64" : "opacity-0 -right-full"}`}
          onClick={closeMenu}
        ></div>
        <div
          className={` p-8 fixed top-0 bottom-0  w-64 bg-white dark:bg-slate-800 dark:text-white shadow-lg text-black transition-all 
        ${open ? "right-0 " : "-right-full"}`}
        >
          <Navigation closeMenu={closeMenu} />
          <button onClick={closeMenu} className="absolute top-8 right-8 text-2xl hover:text-orange-500 transition-colors duration-200">
          <IoMdCloseCircleOutline />
          </button>
        </div>
      </div>
      <div className="text-[16] leading-6 font-medium items-center hidden md:flex md:gap-4">
        {navigations.map((nav, index) => (
          <Link
            href={nav.link}
            className="hover:text-orange-500 transition-colors duration-200"
          >
            {nav.name}
          </Link>
        ))}

        <button onClick={onLight} className={light ? "hidden" : "block"}>
          <FiSun />
        </button>
        <button onClick={offLight} className={light ? "block" : "hidden"}>
          <LuMoonStar />
        </button>
        <Buttons />
      </div>
      <button className="md:hidden text-4xl" onClick={openMenu}>
        <IoMenu />
      </button>
      </div>
    </header>
  );
}
