import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Fuel, Shield, Zap, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Fuel,
    title: "Maximum Power Output",
    stat: "20kW",
    metric: "Continuous Power",
    description: "Heavy-duty generator platform delivers consistent 20kW power for the most demanding radar, EW, and industrial applications.",
    features: ["Primary Generator Power", "No Weather Dependency", "Continuous Operation", "Industrial-Grade Reliability"]
  },
  {
    icon: Shield,
    title: "Military-Grade Platform",
    stat: "MIL-STD",
    metric: "Certified",
    description: "Built to military specifications with NDAA compliance for government contracts and classified operations in hostile environments.",
    features: ["NDAA Compliant", "Classified Operations Ready", "Extreme Environment Operation", "Military Logistics Compatible"]
  },
  {
    icon: Zap,
    title: "High-Power Applications",
    stat: "24/7",
    metric: "Operation",
    description: "Purpose-built for radar arrays, electronic warfare systems, runway lighting, and other continuous high-power applications.",
    features: ["Radar System Support", "EW Equipment Power", "Industrial Applications", "Runway Lighting Systems"]
  }
];

export default function SentinelAdvantagePlusCapabilities() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Maximum <span className="text-[#cbe30b]">Power</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            The Sentinel Advantage+ delivers uncompromising power for the most demanding military and industrial applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="bg-[#0d0d0d]/60 backdrop-blur-sm border border-[#333333] p-8 hover:border-[#cbe30b]/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#cbe30b]/20 group-hover:bg-[#cbe30b]/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#cbe30b]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#cbe30b] transition-colors duration-300">
                      {capability.title}
                    </h3>
                  </div>
                </div>
                
                <div className="text-center mb-6 p-4 bg-[#cbe30b]/10">
                  <div className="text-4xl font-bold text-[#cbe30b] mb-1">
                    {capability.stat}
                  </div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">
                    {capability.metric}
                  </div>
                </div>

                <p className="text-[#e5e5e5] mb-6 leading-relaxed">
                  {capability.description}
                </p>

                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#666666]">
                      <span className="w-2 h-2 bg-[#cbe30b] mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold shadow-xl shadow-[#cbe30b]/25 hover:shadow-[#cbe30b]/40 transition-all duration-300 group">
              Deploy Maximum Power
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}