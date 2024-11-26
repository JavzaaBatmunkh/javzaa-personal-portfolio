import Image from "next/image";
import { Tag } from "./tag";
import Link from "next/link";
export function About() {
  
  return (
    <div className="bg-gray-50 dark:bg-[#111827]" id="about">
    <div
      
      className=" max-w-7xl mx-auto px-[3%]"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="flex items-center justify-center">
        <Tag props="About me" />
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-10 pt-10">
        
        
        
        <div className="relative bg-slate-200 w-[80%] aspect-[5/6] hidden md:block mb-14 mt-[10%]">
        <Image
          src="/images/about.png"
          width={480}
          height={480}
          className=" w-full h-full object-cover relative bottom-[7.5%] left-[9%]"
        />  
        </div>
        <div className="relative bg-slate-200 mx-auto w-[60%] aspect-[8/9] md:hidden mb-16 mt-10">
        <Image
          src="/images/about.png"
          width={480}
          height={480}
          className=" w-[94%] h-full object-cover relative bottom-[3%] right-[3%] left-[3%]"
        />
      </div>

        <div className="flex flex-col ">
          <div className="font-medium text-3xl">
            Curious about me? Here you have it:
          </div>
          <div className="mt-5">
            I am a passionate, <u>self-proclaimed designer</u> who specializes
            in full stack development React.js & Node.js. I am very enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </div>
          <div className="mt-5">
            I began my journey as a web developer in 2015, and since then, I
            have continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I am building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </div>
          <div className="mt-5">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </div>
          <div className="mt-5">
            When I am not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on{" "}
            <u>Twitter</u> where I share tech-related bites and build in public,
            or you can follow me on{" "}
            <Link href={"https://github.com/JavzaaBatmunkh"}>
              <u className="font-bold">GitHub.</u>
            </Link>
            
          </div>
          <div className="mt-5">Finally, some quick bits about me.</div>
          <ul className="list-disc list-inside grid grid-cols-2 mt-5">
            <li>B.E. in Computer Engineering</li> <li>Avid learner</li>{" "}
            <li>Full time freelancer</li> <li>Aspiring indie hacker</li>
          </ul>
          <div className="mt-5">
            One last thing, I am available for freelance work, so feel free to
            reach out and say hello! I promise I do not bite 😉{" "}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
