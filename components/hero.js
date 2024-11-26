import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { Links } from "./social-links";

export function Hero() {
  return (
    <div className=" md:grid grid-cols-3 py-24  flex flex-col-reverse gap-[3.4%] max-w-7xl mx-auto px-[3%] mt-10">
      <div className="col-span-2 text-base">
        <h1 className="text-6xl text-gray-900 dark:text-white font-bold mb-2">
        Сайн уу ? Жавзанпагам байна.
        👋
        </h1>
        <p className="mt-10">Би Pinecone Academy-д MERN stack developer (MongoDB, Express, React, Node)-өөр суралцаж төгсөөд байна. Сүүлийн үеийн технологиудыг ашиглан дижитал бүтээгдэхүүний харагдац (frontend ) бас логик ажиллагааг (backend) бүтээх нь маш их таалагддаг. Дизайны дагуу, нямбай, уншиж ойлгоход хялбар код бичихийг ямагт эрмэлзэж байна. Цаашид олон төсөлд оролцож улам хөгжих байх гэж найдаж байна.</p>

        <div class="flex items-center flex-row mt-12 gap-2">
          <IoLocationOutline />
          Сүхбаатар дүүрэг, Улаанбаатар
        </div>
        <div class="flex items-center flex-row mt-1 gap-2">
          <GoDotFill className="text-green-600" />
          Шинэ төсөлд оролцох боломжтой
        </div>
        <Links />
      </div>
      
      <div className="relative bg-slate-200 mx-auto w-[80%] aspect-[7/8] hidden md:block ">
        <Image
          src="/images/Javzaa-pineconed.jpeg"
          width={300}
          height={300}
          className=" w-full h-full object-cover relative bottom-[11.25%] right-[12.87%]"
        />  
      </div>
      <div className="relative bg-slate-200 mx-auto aspect-[1/1] md:hidden mb-16">
        <Image
          src="/images/Javzaa-pineconed.jpeg"
          width={300}
          height={300}
          className=" w-[94%] h-full object-cover relative bottom-[4%] right-[3%] left-[3%]"
        />
      </div>
      
      
    </div>
  );
}
