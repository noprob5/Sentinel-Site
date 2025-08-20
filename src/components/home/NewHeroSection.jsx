import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function NewHeroSection() {
  return (
    <div className="relative min-h-screen flex items-end justify-center overflow-hidden bg-black pb-20 sm:pb-24">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        src="https://res.cloudinary.com/dl71jvny5/video/upload/v1755216746/s1_hero_mytud8.mov"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-10">
          The <span className="text-[#cbe30b]">Power</span> Behind the Mission
        </h1>
        
        <div className="flex justify-center items-center">
          <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-10 py-4 text-xl font-bold shadow-2xl shadow-[#cbe30b]/25 hover:shadow-[#cbe30b]/40 transition-all duration-300 group">
            <Link to={createPageUrl("Sentinel1")}>
              Explore Solutions
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}