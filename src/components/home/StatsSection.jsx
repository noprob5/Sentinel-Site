
import React from "react";
import { TrendingUp, Shield, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: Shield,
    number: "98%",
    label: "Crime Reduction",
    description: "Average decrease in incidents where towers are deployed"
  },
  {
    icon: Clock,
    number: "< 30",
    label: "Minutes Setup",
    description: "From delivery to full operational status"
  },
  {
    icon: TrendingUp,
    number: "24/7",
    label: "Monitoring",
    description: "Continuous surveillance and AI-powered alerts"
  },
  {
    icon: Users,
    number: "500+",
    label: "Sites Protected",
    description: "Across construction, retail, and public safety"
  }
];

export default function StatsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven <span className="text-[#cbe30b]">Performance</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Numbers that speak to the effectiveness of our surveillance solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#cbe30b]/20 border border-[#cbe30b]/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#cbe30b]" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-[#cbe30b] mb-2">{stat.label}</div>
                <p className="text-[#666666] text-sm leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
