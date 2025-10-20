
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function NewHeroSection() {
  return (
    <div className="relative min-h-screen flex items-end justify-center overflow-hidden bg-black">
      {/* Container for the iframe to ensure it's positioned correctly */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* The iframe itself, styled to cover the container */}
        <iframe
          src="https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/8aaf09bf2561b6d16d409c24e7f56a29/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-bxtyzsbpql47g1fu.cloudflarestream.com%2F8aaf09bf2561b6d16d409c24e7f56a29%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            minWidth: '177.77vh', // 16/9 aspect ratio
            height: '56.25vw',    // 16/9 aspect ratio
            minHeight: '100vh',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
          className="opacity-80"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen={true}
        ></iframe>
      </div>
      
      {/* Gradient overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-10">
          The <span className="text-[#cbe30b]">Power</span> Behind the Mission
        </h1>
        
        <div className="flex justify-center items-center">
          <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-10 py-4 text-xl font-bold shadow-2xl shadow-[#cbe30b]/25 hover:shadow-[#cbe3b]/40 transition-all duration-300 group">
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
