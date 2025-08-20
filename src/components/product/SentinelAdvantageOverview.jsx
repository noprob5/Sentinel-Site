
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Zap, Battery, Shield } from "lucide-react";

export default function SentinelAdvantageOverview() {
  return (
    <div className="bg-[#0d0d0d] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#cbe30b]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#cbe30b]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Coming Soon Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block border border-[#cbe30b]/50 px-8 py-4 mb-8 sm:mb-12 bg-[#cbe30b]/5 backdrop-blur-sm">
            <span className="text-[#cbe30b] font-bold text-xl tracking-wider">CLASSIFIED • IN DEVELOPMENT</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Next-Level
            <br />
            <span className="text-[#cbe30b]">Hybrid Power</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#cbe30b] to-transparent mx-auto mb-8 sm:mb-12"></div>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 sm:mb-16 leading-relaxed">
            When solar isn't enough and failure isn't an option
          </p>
        </div>
      </section>

      {/* Key Specs Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 lg:divide-x divide-[#333333]">
            {[
              { icon: Zap, title: "3kW Continuous", subtitle: "Hybrid Power System" },
              { icon: Battery, title: "Zero Downtime", subtitle: "Auto-Start Generator" },
              { icon: Shield, title: "NDAA Compliant", subtitle: "Military Grade" }
            ].map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="relative group py-8 lg:py-0 lg:px-8 border-b border-[#cbe30b]/20 lg:border-none last:border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#cbe30b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  <div className="relative bg-[#1a1a1a]/60 backdrop-blur-sm border border-[#333333] p-12 text-center hover:border-[#cbe30b]/50 transition-all duration-500">
                    <Icon className="w-16 h-16 text-[#cbe30b] mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-2">{spec.title}</h3>
                    <p className="text-gray-400 text-lg">{spec.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">Ready to Learn More?</h3>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12">
            Contact our team to discuss specifications and explore partnership opportunities.
          </p>
          <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-12 py-6 text-xl font-bold shadow-2xl shadow-[#cbe30b]/25 group">
            <Link to={createPageUrl("Contact")}>
              Request Intelligence Brief
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
