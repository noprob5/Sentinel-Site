
import React from "react";
import NewHeroSection from "../components/home/NewHeroSection";
import ScrollingTruckSection from "../components/home/ScrollingTruckSection";
import WhySentinelSection from "../components/home/WhySentinelSection";
import CapabilitiesSection from "../components/home/CapabilitiesSection";
import SolutionsProductLine from "../components/home/SolutionsProductLine";
import IndustriesServedSection from "../components/home/IndustriesServedSection";
import NewCTASection from "../components/home/NewCTASection";

export default function Home() {
  return (
    <div className="bg-[#0d0d0d]">
      <NewHeroSection />
      <WhySentinelSection />
      <ScrollingTruckSection />
      <CapabilitiesSection />
      <SolutionsProductLine />
      <IndustriesServedSection />
      <NewCTASection />
    </div>
  );
}
