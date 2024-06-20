import {HomeSection} from "@/containers/home";
import {AboutSection} from "@/containers/about";
import {SkillsSection} from "@/containers/skills";
import {ProjectsSection} from "@/containers/projects";
import {ContactSection} from "@/containers/contact";
import {ScrollToTop} from "@/components/scroll-to-top";
import {Navbar} from "@/components/navigation/navbar";
import {Footer} from "@/components/navigation/footer";
import {ScrollProgress} from "@/components/ScrollProgress";

export default function Home() {
  return (
      <main className="pt-12">
          <ScrollProgress/>
          <Navbar/>
          <div className="container space-y-16 py-28">
              <HomeSection/>
              <AboutSection/>
              <SkillsSection/>
              <ProjectsSection/>
              <ContactSection/>
          </div>
          <ScrollToTop/>
          <Footer/>
      </main>
  );
}
