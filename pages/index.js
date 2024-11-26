import { Header } from "@/components/Header";
import { About } from "@/components/about";
import { ContactMe } from "@/components/contact-me";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";



export default function Home() {
  return (
    <main className=" text-gray-600 dark:bg-[#030712] dark:text-white">
      <Header />
      <Hero /> 
      {/* <About/> */}
      <Skills/>
      {/* <Experience/> */}
      <Work/>
      <ContactMe/>
      <Footer/> 
    </main>
  );
}
