import React from "react";
import SentinelAdvantageHero from "../components/product/SentinelAdvantageHero";
import SentinelAdvantageOverview from "../components/product/SentinelAdvantageOverview";

export default function SentinelAdvantage() {
  return (
    <div className="bg-[#0d0d0d]">
      <SentinelAdvantageHero />
      <SentinelAdvantageOverview />
    </div>
  );
}