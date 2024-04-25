import HeroSection from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EmailSection } from "./components/EmailSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { BooksSection } from "./components/BooksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <SkillsSection />
      <BooksSection />
      <ProjectsSection />
      <EmailSection />
    </>
  );
}
