import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ToolboxSection from "@/components/sections/ToolboxSection";

export const metadata: Metadata = {
  title: "Christian Jarold David — Full-Stack Developer & AI Engineer",
  description:
    "Christian Jarold David builds pixel-perfect web interfaces, practical backend systems, and AI-assisted workflows for real products.",
  keywords: ["Christian Jarold David", "Portfolio", "Full-Stack Developer", "AI Engineer"],
  authors: [{ name: "Christian Jarold David" }],
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ExperiencesSection />
      <ProjectsSection />
      <AboutSection />
      <ToolboxSection />
      <ContactSection />
    </main>
  );
}
