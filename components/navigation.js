import { Buttons } from "./button";
import { FiSun } from "react-icons/fi";

import Link from "next/link";
import { useState } from "react";
import { LuMoonStar } from "react-icons/lu";
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

export function Navigation({closeMenu}) {

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
    <>
      <div className="font-semibold text-2xl mb-5">{"< Javzaa />"}</div>
      <hr />
      <div className="text-[16] leading-6 font-medium items-left flex gap-4 flex-col mt-4">
        {navigations.map((nav, index) => (
          <Link key={index}
            href={nav.link}
            onClick={closeMenu}
            className="hover:text-orange-500 transition-colors duration-200"
          >
            {nav.name}
          </Link>
        ))}
        <hr />

        <button onClick={onLight} className={`flex justify-between  hover:text-orange-500 transition-colors duration-200 ${light ? "hidden" : "block"}`} >
          Theme солих
          <FiSun />
        </button>
        <button onClick={offLight} className={`flex justify-between  hover:text-orange-500 transition-colors duration-200 ${light ? "block" : "hidden"}`}>
          Theme солих
          <LuMoonStar />
        </button>
        <Buttons />
      </div>
    </>
  );
}
