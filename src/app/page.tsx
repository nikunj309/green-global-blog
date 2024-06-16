import BottomBanner from "@/components/BottomBanner";
import ComponyDetailsCard from "@/components/ComponyDetailsCard";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import NewsAndAnouncement from "@/components/NewsAndAnnouncement/NewsAndAnouncement";
import ServicesAndSolutionCmp from "@/components/ServicesAndSolutions/ServicesAndSolutionCmp";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen items-center justify-center p-6 md:p-24">
        <div>
          <HeroSection />
        </div>
      </main>
      <div>
        <HomeAboutSection />
        {/* <div className="flex flex-col md:flex-row md:gap-36 gap-8 p-12 items-center justify-center">
          <ComponyDetailsCard
            number="72+"
            title="Professional Experts"
            description="Harnessing the Power of Professional Expertise to Drive Sustainable Solutions"
          />
          <ComponyDetailsCard
            number="150+"
            title="Product Supply"
            description="Supplying Excellence: Navigating Global Markets with Precision and Integrity"
          />
          <ComponyDetailsCard
            number="200+"
            title="World-wide Clients"
            description="Building Bridges: Connecting World-Class Products with Clients Across Continents"
          />
        </div> */}
        <ServicesAndSolutionCmp />
        <NewsAndAnouncement />
        <BottomBanner />
      </div>
    </>
  );
}
