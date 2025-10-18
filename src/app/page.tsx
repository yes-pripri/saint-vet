import Image from "next/image";
import { Hero } from "@/components /hero";
import CannabisSection from "@/components /cannabisSection";
import { EbookSection } from "@/components /ebookSection";
import { EbookLearningSection } from "@/components /ebookLearningSection"
import { EbookDifferenceSection } from "@/components /ebookDifferenceSection";
import { EbookBonusSection } from "@/components /ebookBonusSection";
import { SpecialOffer } from "@/components /specialOffer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CannabisSection />
      <EbookSection />
      <EbookLearningSection />
      <EbookDifferenceSection />
      <EbookBonusSection />
      <SpecialOffer />
    </main>
    
  );
}
