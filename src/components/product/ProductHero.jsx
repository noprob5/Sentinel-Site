import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function ProductHero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden min-h-screen flex items-end pb-20 pt-20">
        <div className="absolute inset-0">
             <div 
                className="w-full h-full opacity-90 bg-cover bg-top"
                style={{backgroundImage: "url('https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b5bab9e5-bd1b-4545-b5a2-52f0aedfc300/public')"}}
              />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

      <div className="relative z-10 max-w-screen-xl mx-auto w-full text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Sentinel <span className="text-[#cbe30b]">1</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold shadow-lg">
            <Link to={createPageUrl("Contact")}>Get a Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}