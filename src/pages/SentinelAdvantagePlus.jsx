import React from "react";
import SentinelAdvantagePlusHero from "../components/product/SentinelAdvantagePlusHero";
import SentinelAdvantagePlusOverview from "../components/product/SentinelAdvantagePlusOverview";

export default function SentinelAdvantagePlus() {
  return (
    <div className="bg-[#0d0d0d]">
      <SentinelAdvantagePlusHero />
      <SentinelAdvantagePlusOverview />
    </div>
  );
}