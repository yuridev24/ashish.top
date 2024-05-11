import HeroSection from "@/app/components/sections/HeroSection";
import { AboutSection } from "@/app/components/sections/AboutSection";
import { SkillsSection } from "@/app/components/sections/SkillsSection";
import { ProjectsSection } from "@/app/components/sections/ProjectsSection";
import { EmailSection } from "@/app/components/sections/EmailSection";
import { AchievementsSection } from "@/app/components/sections/AchievementsSection";
import { BooksSection } from "@/app/components/sections/BooksSection";

export default function Home() {
  return (
    <div className="pt-16 md:pt-10">
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <SkillsSection />
      <BooksSection />
      <ProjectsSection />
      <EmailSection />
    </div>
  );
}