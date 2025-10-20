
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, ArrowDown, Eye, Radio, Shield, Cpu, Wifi, Zap } from "lucide-react";
import { motion } from "framer-motion";
import NewCTASection from '../components/home/NewCTASection';

const capabilities = [
  {
    icon: Eye,
    title: "Surveillance & Monitoring",
    description: "Provide persistent overwatch with state-of-the-art surveillance payloads. Our platforms support high-resolution EO/IR cameras, thermal imagers, and ground-based radar for 360-degree, 24/7 situational awareness.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/f1900b40-d103-4515-7285-c21f6ebf1a00/public",
    imagePosition: "left"
  },
  {
    icon: Radio,
    title: "Electronic Warfare Support",
    description: "Dominate the spectrum by deploying your EW systems where they're most effective. Our platforms provide the stable, high-power foundation your equipment needs to operate, from SIGINT to tactical jamming.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/4e11e108-856c-4e0a-6954-19c0a3eefb00/public",
    imagePosition: "right"
  },
  {
    icon: Shield,
    title: "Systems Integration",
    description: "Your technology, mission-ready. Our expert engineering team specializes in integrating third-party sensors, cameras, and software into our ruggedized mobile platforms, ensuring seamless operation in the field.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/1f2c8adf-baf2-4020-59ce-bae2574b0900/public",
    imagePosition: "left"
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Process data at the source to reduce latency and bandwidth requirements. Our platforms support powerful onboard computing with AI accelerators for real-time analytics, threat assessment, and decision support.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/2c8e1000-f015-4e18-160b-ef3803267600/public",
    imagePosition: "right"
  },
  {
    icon: Wifi,
    title: "Communications Relay",
    description: "Establish and extend your tactical network with multi-modal communications. Our platforms serve as reliable LTE, mesh, and satellite communication hubs where traditional infrastructure is unavailable or compromised.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/8ff5533b-d9d7-4f45-1d3e-213ce3477a00/public",
    imagePosition: "left"
  },
  {
    icon: Zap,
    title: "Mobile Power Systems",
    description: "Ensure your critical equipment stays online in the most remote and austere environments. Our hybrid power systems with solar, battery, and optional generators provide unmatched energy resilience.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/d13b028a-b74e-4262-8a80-059e495c5f00/public",
    imagePosition: "right"
  }
];

export default function Capabilities() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative py-64 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/1f2c8adf-baf2-4020-59ce-bae2574b0900/public" 
            alt="Advanced technology deployment" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            Mission-Ready <span className="text-[#cbe30b]">Integration</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Bring your technology. We'll provide the platform, power, and expertise to make it mission-ready in the field.
          </motion.p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities Header */}
      <section className="py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Our Capabilities
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive integration platforms designed to make any technology mission-ready in the field.
          </p>
        </div>
      </section>

      {/* Capabilities Sections */}
      {capabilities.map((capability, index) => {
        const Icon = capability.icon;
        const isImageLeft = capability.imagePosition === "left";
        
        return (
          <section key={capability.title} className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isImageLeft ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Image */}
                <div className={`${!isImageLeft ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${!isImageLeft ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8 text-black" />
                    <h3 className="text-3xl sm:text-4xl font-bold text-black">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {capability.description}
                  </p>
                  <Button className="bg-black hover:bg-gray-800 text-white px-6 py-3 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      <NewCTASection />
    </div>
  );
}
