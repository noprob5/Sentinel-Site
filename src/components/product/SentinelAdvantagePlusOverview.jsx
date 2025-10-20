import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Radar, Zap, Fuel } from "lucide-react";

export default function SentinelAdvantagePlusOverview() {
  return (
    <div className="bg-[#0d0d0d] relative overflow-hidden">
      {/* Complex Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbe30b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#cbe30b]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#cbe30b]/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-[#cbe30b]/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-[#cbe30b]/50 to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#cbe30b]/60 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#cbe30b]/40 animate-ping delay-500"></div>
      </div>

      {/* Top Secret Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 border-2 border-red-500 px-6 sm:px-8 py-4 mb-8 sm:mb-12 bg-red-500/10 backdrop-blur-sm">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 font-bold text-lg sm:text-xl tracking-widest">TOP SECRET • PROTOTYPE</span>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            20<span className="text-[#cbe30b]">kW</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-400">OF PURE POWER</span>
          </h2>
        </div>
      </section>

      {/* Power Visualization Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
              {[
                { icon: Radar, title: "Radar Arrays", power: "8kW+" },
                { icon: Zap, title: "EW Systems", power: "12kW+" },
                { icon: Fuel, title: "Industrial Loads", power: "20kW" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="relative w-28 mx-auto mb-8">
                      <div className="relative w-24 h-24 bg-[#1a1a1a] border-2 border-[#333333] rounded-full flex items-center justify-center mx-auto group-hover:border-[#cbe30b] transition-colors duration-500">
                        <Icon className="w-10 h-10 text-[#cbe30b]" />
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#cbe30b] rounded-full flex items-center justify-center text-black text-lg font-bold z-10">!</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-2xl font-bold text-[#cbe30b]">{item.power}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mysterious CTA */}
      <section className="py-16 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <div className="inline-block text-6xl mb-4">⚡</div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">This Changes Everything</h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Revolutionary capabilities designed for the most demanding applications.
            </p>
          </div>

          <Button asChild className="bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a] hover:from-[#a8bf0a] hover:to-[#cbe30b] text-black px-12 py-6 text-xl font-bold shadow-2xl shadow-[#cbe30b]/25 group">
            <Link to={createPageUrl("Contact")}>
              Request Briefing
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}