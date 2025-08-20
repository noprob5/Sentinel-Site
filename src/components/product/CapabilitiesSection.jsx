
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Shield, Zap, Eye, ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Active Deterrence",
    stat: "98%",
    metric: "Crime Reduction",
    description: "Bright LED floodlights, loud speakers, and imposing physical presence actively deter criminal activity before it happens.",
    features: ["10,000 Lumen LED Array", "120dB Audio Alerts", "Strobe Light Patterns", "Two-Way Communication"]
  },
  {
    icon: Eye,
    title: "AI-Powered Detection",
    stat: "< 30sec",
    metric: "Alert Response",
    description: "Advanced artificial intelligence distinguishes between threats and normal activity, sending instant alerts only when needed.",
    features: ["Person & Vehicle Recognition", "Behavioral Analytics", "License Plate Reading", "Perimeter Breach Detection"]
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    stat: "15min",
    metric: "Setup Time",
    description: "No permits, no trenching, no electrical work. Deploy professional-grade security anywhere in under 15 minutes.",
    features: ["Single-Person Operation", "No Power Infrastructure", "Immediate Connectivity", "Plug-and-Play Design"]
  }
];

export default function CapabilitiesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Unmatched <span className="text-[#cbe30b]">Capabilities</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            The Sentinel 1 doesn't just monitor—it actively protects, intelligently analyzes, and rapidly deploys wherever security is needed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="bg-[#0d0d0d]/60 backdrop-blur-sm border border-[#333333] rounded-2xl p-8 hover:border-[#cbe30b]/30 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-[#cbe30b]/20 group-hover:bg-[#cbe30b]/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#cbe30b]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#cbe30b] transition-colors duration-300">
                      {capability.title}
                    </h3>
                  </div>
                </div>
                
                <div className="text-center mb-6 p-4 bg-[#cbe30b]/10 rounded-lg">
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
                      <span className="w-2 h-2 bg-[#cbe30b] rounded-full mr-3 flex-shrink-0"></span>
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
            <Button className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-xl shadow-[#cbe30b]/25 hover:shadow-[#cbe30b]/40 transition-all duration-300 group">
              Experience the Difference
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
