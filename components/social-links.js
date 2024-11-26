import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
// import { LuTwitter } from "react-icons/lu";
// import { LuFigma } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";


const socialLinks = [
  {
    imagePath: <FaGithub />,
    link: "https://github.com/JavzaaBatmunkh",
  },
  {
    imagePath: <FaFacebook />,
    link: "https://www.facebook.com/japaamgaa",
  },
  // {
  //   imagePath: <LuFigma />,
  //   link: "/figma",
  // },
];
export function Links() {
  return (
    <div className="flex mt-10">
      {socialLinks.map((social, index) => (
        <Link key={index} href={social.link} className="text-2xl flex w-12 dark:text-white">
          {social.imagePath}
        </Link>
      ))}
    </div>
  );
}
