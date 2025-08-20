
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function SentinelAdvantageHero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden min-h-screen flex items-end pb-20 pt-20">
      <div className="absolute inset-0">
        <img 
          src="https://res.cloudinary.com/dl71jvny5/image/upload/v1755118473/tower_in_desert_d54spo.png" 
          alt="Sentinel Advantage in desert environment"
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto w-full text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Sentinel <span className="text-[#cbe30b]">Advantage</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold shadow-lg group">
            <Link to={createPageUrl("Contact")}>
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
