import { Icon } from "./icon";
import { Tag } from "./tag";

export function Skills() {
  return (
    <div id="skills" style={{ paddingTop: "80px", paddingBottom: "80px" }} className="max-w-7xl mx-auto px-[3%]">
      <div class="flex items-center justify-center">
        <Tag props="Ур чадварууд"/>
      </div>

      <div class="text-center pt-5 pb-5 text-normal font-light">
        <p>Миний эзэмшсэн технологиуд ба чадварууд :</p>
      </div>

      <div className="grid md:grid-cols-8 grid-cols-3 gap-12">
        <Icon title="Javascript" pic="icon-javscript.svg" />
        <Icon title="Typescript" pic="icon-typescript.svg" />
        <Icon title="React" pic="icon-react.svg" />
        <Icon title="Next.js" pic="next.svg" />
        <Icon title="Node.js" pic="nodejs.svg" />
        <Icon title="Express.js" pic="icon-express.svg" />
        {/* <Icon title="Nest.js" pic="icon-nest.svg" />
        <Icon title="Socket.io" pic="icon-socket.svg" /> */}
        <Icon title="PostgreSQL" pic="icon-postgresql.svg" />
        <Icon title="MongoDB" pic="icon-mongodb.svg" />
        {/* <Icon title="Sass/Scss" pic="icon-sass.svg" /> */}
        <Icon title="Tailwindcss" pic="icon-tailwindcss.svg" />
        <Icon title="Figma" pic="icon-figma.svg" />
        <Icon title="GraphQL" pic="GraphQL.png" />
        <Icon title="Vercel" pic="vercel.svg" />
        <Icon title="Git" pic="icon-git.svg" />
      </div>
    </div>
  );
}
