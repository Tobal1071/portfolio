import Experience from "@/components/Sections/Experience/Experience";
import Header from "@/components/Header/Header";
import Profile from "@/components/Sections/Profile/Profile";
import Projects from "@/components/Sections/Project/Projects";
import Skills from "@/components/Sections/Skills/Skills";
import Studies from "@/components/Sections/Studies/Studies";

export default function Home() {
  return (
    <main className="max-w-3xl m-auto selection:bg-d_blue">
      <Header />
      <div className="px-5 mt-[550px] sm:mt-[500px]">
        <Profile />
        <Experience />
        <Studies />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
