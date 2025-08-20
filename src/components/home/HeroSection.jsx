import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-60"
        src="https://res.cloudinary.com/dl71jvny5/video/upload/v1753154580/copy_F0A40955-3430-4F81-B327-73D1CA02675C_ef0ldf.mov"
      ></video>
       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Instant. Reliable. Remote.
        </h1>
        <p className="text-xl sm:text-2xl text-[#e5e5e5] max-w-3xl mx-auto leading-relaxed mt-6">
            Sentinel Towers gives you <span className="text-[#cbe30b]">plug-and-play solar-powered security towers</span> with AI-driven real-time alerts and uptime-guaranteed cloud software — so you can secure any property instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold rounded-md shadow-lg shadow-[#cbe30b]/20">
              <Link to={createPageUrl("Contact")}>Request a Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-[#333333] bg-white hover:bg-[#e5e5e5] hover:text-black px-8 py-3 text-lg font-semibold rounded-md">
              <Link to={createPageUrl("Sentinel1")}>Explore Sentinel 1 <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </div>
    </div>
  );
}