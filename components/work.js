import { CardProject } from "./card-project";
import { Tag } from "./tag";

export function Work() {
  return (
    <div
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
      id="work"
      className="max-w-7xl mx-auto px-[3%]"
    >
      <div className="flex items-center justify-center">
        <Tag props="Төслүүд" />
      </div>

      <div class="text-center pt-5 pb-20 text-normal font-light">
        <p>Миний суралцах явцдаа хийсэн төслүүд :</p>
      </div>

      <CardProject />
    </div>
  );
}
