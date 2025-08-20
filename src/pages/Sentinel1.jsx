import React from "react";
import ProductHero from "../components/product/ProductHero";
import ProductBreakdown from "../components/product/ProductBreakdown";
import GallerySection from "../components/product/GallerySection";
import FeaturesSection from "../components/product/FeaturesSection";
import CapabilitiesSection from "../components/product/CapabilitiesSection";
import ComparisonSection from "../components/product/ComparisonSection";
import UseCasesSection from "../components/product/UseCasesSection";
import CTASection from "../components/home/CTASection";

export default function Sentinel1() {
  return (
    <div className="bg-[#0d0d0d]">
      <ProductHero />
      <ProductBreakdown />
      <GallerySection />
      <FeaturesSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <UseCasesSection />
      <CTASection />
    </div>
  );
}