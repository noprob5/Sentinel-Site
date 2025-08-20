
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Radio, Cpu, Eye, Zap, Wifi, ArrowRight, CheckCircle, ArrowDown } from "lucide-react";
import { createPageUrl } from "@/utils";
import NewCTASection from "../components/home/NewCTASection";

const capabilitiesData = [
  {
    icon: Eye,
    title: "Surveillance & Monitoring",
    description: "Provide persistent overwatch with state-of-the-art surveillance payloads. Our platforms support high-resolution EO/IR cameras, thermal imagers, and ground-based radar for 360-degree, 24/7 situational awareness.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1754942334/surveillance_reuqa6.jpg"
  },
  {
    icon: Radio,
    title: "Electronic Warfare Support",
    description: "Dominate the spectrum by deploying your EW systems where they're most effective. Our platforms provide the stable, high-power foundation your equipment needs to operate, from SIGINT to tactical jamming.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1754940069/EW_warfare_vmgmb6.png"
  },
  {
    icon: Shield,
    title: "Systems Integration",
    description: "Your technology, mission-ready. Our expert engineering team specializes in integrating third-party sensors, cameras, and software into our ruggedized mobile platforms, ensuring seamless operation in the field.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1754942335/systems_integration_wplkjt.jpg"
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Process data at the source to reduce latency and bandwidth requirements. Our platforms support powerful onboard computing with AI accelerators for real-time analytics, threat assessment, and decision support.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1754942334/edge_computing_ywickp.jpg"
  },
  {
    icon: Wifi,
    title: "Communications Relay",
    description: "Establish and extend your tactical network with multi-modal communications. Our platforms serve as reliable LTE, mesh, and satellite communication hubs where traditional infrastructure is unavailable or compromised.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1754942606/communications_relay_ntn0du.jpg"
  },
  {
    icon: Zap,
    title: "Mobile Power Systems",
    description: "Ensure your critical equipment stays online in the most remote and austere environments. Our hybrid power systems with solar, battery, and optional generators provide unmatched energy resilience.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1754942333/mobile_power_systems_srwiff.jpg"
  }
];

const CapabilitySection = ({ capability, index }) => {
  const Icon = capability.icon;
  const isReversed = index % 2 !== 0;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
      <div className={`aspect-square relative ${isReversed ? 'lg:col-start-2' : ''}`}>
        <img src={capability.image} alt={capability.title} className="w-full h-full object-cover rounded-2xl shadow-2xl" />
      </div>
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-black/10 rounded-xl">
            <Icon className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-3xl font-bold text-black">{capability.title}</h3>
        </div>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {capability.description}
        </p>
        <Button asChild className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-3 group">
          <Link to={createPageUrl("Contact")}>
            Learn More
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default function Capabilities() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-black">
      {/* Hero Section */}
      <section className="relative py-32 sm:py-48 px-4 sm:px-6 lg:px-8 text-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754942335/systems_integration_wplkjt.jpg"
            alt="Technical schematic background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Mission-Ready <span className="text-[#cbe30b]">Integration</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Bring your technology. We'll provide the platform, power, and expertise to make it mission-ready in the field.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 text-white/50" />
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Our <span className="text-black">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive integration platforms designed to make any technology mission-ready in the field.
            </p>
          </div>
          <div className="space-y-32">
            {capabilitiesData.map((capability, index) => (
              <CapabilitySection key={capability.title} capability={capability} index={index} />
            ))}
          </div>
        </div>
      </section>

      <NewCTASection />
    </div>
  );
}
