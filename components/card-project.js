import Image from "next/image";
import Link from "next/link";
import { Tag } from "./tag";
import { FaLink } from "react-icons/fa6";
const projects = [
  {
    imagePath: "/images/e-commerce2.png",
    title: "E-commerce Web Application",
    description:
      `Энэхүү төсөл нь онлайн худалдааны вебсайт юм. Энэ төслийн гол зорилго нь Typescript, Express.js  мөн багаар ажиллахад суралцах байсан. `,
    tags: [
      "MongoDb",
      "Mongoose",
      "Next.js",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Figma",
      "Typescript",
      "ShadcnUi",
      "Git",
      "Vercel"
    ],
    link: "https://e-commerce-web-ten-xi.vercel.app/ ",
    link2: "https://e-commerce-admin-web.vercel.app/products"
  },
  {
    imagePath: "/images/expense-tracker.png",
    title: "Expense Tracker",
    description:
      "Энэхүү төсөл нь өрхийн болон өөрийн орлого зарлагыг бүртгэж хянах зорилготой веб аппликейшн юм. Backend CRUD үйлдлүүдийг бичиж ашиглах мөн SQL database ашиглахад суралцсан. ",
    tags: [
      "React",
      "Next.js",
      "Express.js", 
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Clerk",
      "Shadcn UI",
      "Vercel",
      "Git",
    ],
    link: "https://expense-tracker-web-iota.vercel.app/",
  },
  {
    imagePath: "/images/blog-web-app.png",
    title: "Blog Web Application",
    description:
      "Энэхүү төсөл нь өөрөө автоматаар нийтлэлүүдээ өөрчилдөг бүрэн ажиллагаатай блог вебсайт юм. Next.js-ийг dev.to-гийн API-тай хамтран ашиглахад суралцсан. ",
    tags: [
      "React",
      "Next.js",
      "Tailwindcss",
      "Figma",
      "Daisy UI",
      "Vercel",
      "Git",
    ],
    link: "https://blog-web-application-jet.vercel.app/",
  },
  {
    imagePath: "/images/snake-game.png",
    title: "Snake game",
    description:
      "2000-аад оны үед магадгүй хүүхэд бүрийн тоглодог байсан Snake game юм (Nokia гар утасны цөөхөн тоглоомын нэг байсан). JavaScript -ийн талаархи мэдлэгийг жинхэнэ амьдралын жишээ (real-life example) дээр ашиглаж хэрэглэж сурах нь гол зорилго байсан. ",
    tags: [
      "Javascript",
      "HTML",
      "CSS",
      "Figma",
      "Vercel",
      "Git",
    ],
    link: "https://snake-game-xi-ashen.vercel.app/",
  },
  {
    imagePath: "/images/to-do-list.png",
    title: "To do list",
    description:
      "To Do List аппликейшн нь өдөр тутмын ажлыг хөнгөвчлөх, хийх зүйлсийнхээ жагсаалтыг хянах зорилготой веб апп юм. JavaScript -н талаархи суурь ойлголтыг өөртөө сайн суулгах нь гол зорилго байсан. ",
    tags: [
      "Javascript",
      "HTML",
      "CSS",
      "Figma",
      "Vercel",
      "Git",
    ],
    link: "https://to-do-list-six-blue.vercel.app/",
  },
  {
    imagePath: "/images/gogo.mn-homepage.png",
    title: "GoGo.mn homepage clone",
    description:
      "https:/gogo.mn мэдээний сайтыг статик буюу өөрчлөлт ордоггүй байдлаар дуурайлган хийсэн юм. Зорилго: CSS-ийн ахисан түвшний мэдлэг болон чадварыг өөртөө суулгах",
    tags: [

      "HTML",
      "CSS",
      "Figma",
      "Vercel",
      "Git",
    ],
    link: "https://go-go-mn-homepage.vercel.app",
  },
  {
    imagePath: "/images/Pine-Tour.png",
    title: "Pine Tour Landing Page",
    description:
      "Аялал жуулчлалын компани болох Pinetour-ийн танилцуулга веб хуудас юм. Зорилго: Өөрийн мэдлэгийн хүрээнд өгөгдсөн загвар дизайны дагуу нарийвчлалтай хийх.",
    tags: [

      "HTML",
      "CSS",
      "Figma",
      "Vercel",
      "Git",
    ],
    link: "https://pine-tour-11.web.app/",
  },
  
];

export function CardProject() {
  return (
    <div className="flex flex-col gap-10 ">
      {projects.map((project, index) => (
        <div
          className={`md:flex justify-center rounded-xl shadow-xl 
        ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          key={project.title}
        >
          <div className="bg-gray-50 dark:bg-[#111827] rounded-lg items-center justify-center md:p-12 p-8 md:flex-1">
            <Image src={project.imagePath} width={600} height={600} />
          </div>

          <div className="light:bg-white  md:p-12 p-8 md:flex-1 flex flex-col gap-6">
            <div >
              <strong>{project.title}</strong>
            </div>
            <div >{project.description}</div>

            <div className="flex flex-wrap gap-2 ">
              {project.tags.map((tagName, index) => (
                <Tag key={index} props={tagName} />
              ))}
            </div>

            <Link href={project.link}>
            <div className="flex gap-4">
            <p>Төслийн линк :</p>
            <FaLink className="text-2xl hover:translate-x-1" />
            </div>
            </Link>

            {project.link2 ? (<Link href={project.link2}>
            <div className="flex gap-4">
            <p> Админ апп линк :</p>
            <FaLink className="text-2xl hover:translate-x-1" />
            </div>
            </Link>): ""}
          </div>
        </div>
      ))}
    </div>
  );
}
