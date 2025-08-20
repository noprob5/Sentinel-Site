
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Zap, Shield, Battery, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Hybrid Power Assurance",
    stat: "3kW",
    metric: "Continuous Power",
    description: "Combines solar, battery, and generator power for uninterrupted operation of mission-critical systems regardless of weather conditions.",
    features: ["Solar + Battery + Generator", "Auto-Start Backup", "Zero Downtime Switching", "Extended Runtime Capability"]
  },
  {
    icon: Shield,
    title: "Mission-Critical Reliability",
    stat: "99.9%",
    metric: "Uptime Guarantee",
    description: "Engineered for military and defense applications where system failure is not an option. Redundant systems ensure continuous operation.",
    features: ["Military-Grade Construction", "Redundant Power Systems", "Environmental Protection", "24/7 Remote Monitoring"]
  },
  {
    icon: Battery,
    title: "Extended Autonomy",
    stat: "Continuous",
    metric: "Operation",
    description: "Operates for extended periods through intelligent fuel management and high-capacity energy storage, tailored to mission load and environment.",
    features: ["Intelligent Fuel Management", "Smart Load Prioritization", "Predictive Maintenance Alerts", "Remote Fuel Monitoring"]
  }
];

export default function SentinelAdvantageCapabilities() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Unmatched <span className="text-[#cbe30b]">Capabilities</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            The Sentinel Advantage delivers the power assurance and reliability demanded by military, defense, and critical infrastructure applications.
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
              Power Your Mission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
