
import { Tag } from "./tag";
import { Links } from "./social-links";
import { MdMailOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

export function ContactMe() {
  return (
    <section id="contact">
      <div className="flex items-center justify-center">
        <Tag props="Надтай холбогдоорой" />
      </div>

      <div className="text-center items-center justify-center pt-5 pb-5 md:text-lg text-sm font-light">
        <p>Та JavaScript хөгжүүлэгч хайж байгаа бол,</p>
        <p>ямар нэгэн асуулт байгаа бол холбогдоорой!</p>
      </div>

      <div className="flex items-center justify-center mb-2">
        <div className="inline-flex items-center gap-4 md:text-4xl text-1xl font-semibold">
        <MdMailOutline />
          <h1>javzaabatmunkh@gmail.com</h1>   
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-4 md:text-4xl text-1xl font-semibold">
          <FiPhoneCall />
          <h1>95347569</h1> 
        </div>
      </div>

      <div className="text-center items-center justify-center pt-10 pb-20 font-light text-sm">
        <p>Энэ платформуудын линкээр орж миний профайлуудыг үзээрэй!</p>
        <div className="inline-flex">
          <Links />
        </div>
      </div>
    </section>
  );
}
