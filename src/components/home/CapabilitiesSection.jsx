
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, Cpu, Eye, Wifi, Zap, Shield } from "lucide-react";

const capabilitiesData = {
  "electronic-warfare": {
    icon: Radio,
    title: "Electronic Warfare Support",
    description: "Power and mount RF detection, jamming, and countermeasure systems. Our platform provides the stable, high-power foundation your EW equipment needs to operate effectively in the field.",
    features: ["High-power RF equipment support", "Electromagnetic shielding options", "Multi-frequency antenna mounting", "Extended runtime for continuous operations"],
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/4e11e108-856c-4e0a-6954-19c0a3eefb00/public"
  },
  "systems-integration": {
    icon: Cpu,
    title: "Systems Integration",
    description: "Bring your hardware and software; we make it mission-ready. Our engineering team works with you to integrate your technology seamlessly into our mobile platform.",
    features: ["Custom mounting solutions", "Power management integration", "Data connectivity options", "Environmental protection systems"],
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/1f2c8adf-baf2-4020-59ce-bae2574b0900/public"
  },
  "edge-computing": {
    icon: Cpu,
    title: "Edge Computing",
    description: "Deploy AI and analytics at the source with onboard processing. Reduce latency and bandwidth requirements by processing data where it's collected.",
    features: ["High-performance computing platforms", "AI/ML processing capabilities", "Local data storage solutions", "Real-time analytics deployment"],
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/2c8e1000-f015-4e18-160b-ef3803267600/public"
  },
  "surveillance": {
    icon: Eye,
    title: "Surveillance & Recon",
    description: "Cameras, gunshot detection, and situational awareness tools. Mount and power advanced surveillance systems with 360-degree coverage and intelligent analytics.",
    features: ["Multi-sensor integration", "Thermal and night vision support", "Automated threat detection", "Real-time video streaming"],
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/f1900b40-d103-4515-7285-c21f6ebf1a00/public"
  },
  "communications": {
    icon: Wifi,
    title: "Communications Relay",
    description: "Provide LTE, mesh, and satellite uplink in remote areas. Establish reliable communications networks where traditional infrastructure isn't available.",
    features: ["Multi-band radio support", "Satellite communication integration", "Mesh network capabilities", "Emergency communication backup"],
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/8ff5533b-d9d7-4f45-1d3e-213ce3477a00/public"
  }
};

export default function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState('electronic-warfare');

  const tabs = [
    { id: 'electronic-warfare', title: 'Electronic Warfare', icon: Radio },
    { id: 'systems-integration', title: 'Systems Integration', icon: Shield },
    { id: 'edge-computing', title: 'Edge Computing', icon: Cpu },
    { id: 'surveillance', title: 'Surveillance & Recon', icon: Eye },
    { id: 'communications', title: 'Communications', icon: Wifi }
  ];

  const activeCapability = capabilitiesData[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#cbe30b]">Capabilities</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Comprehensive integration platforms designed to make any technology mission-ready in the field.
          </p>
        </div>

        <div className="flex flex-nowrap justify-start md:justify-center border-b border-[#333333] mb-12 overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-col items-center gap-3 px-4 py-6 text-sm font-medium transition-all duration-300 group focus:outline-none min-w-[140px] ${
                  activeTab === tab.id ? 'border-b-2 border-[#cbe30b]' : ''
                }`}
              >
                <div className={`flex items-center justify-center w-12 h-12 transition-all duration-300 ${
                  activeTab === tab.id ? 'bg-[#cbe30b]/20' : 'bg-[#1a1a1a] group-hover:bg-[#333333]'
                }`}>
                  <Icon className="w-6 h-6 text-[#cbe30b]" />
                </div>
                <span className={`transition-colors duration-300 text-center ${
                  activeTab === tab.id ? 'text-white' : 'text-[#666666] group-hover:text-white'
                }`}>
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#cbe30b]/20">
                <activeCapability.icon className="w-8 h-8 text-[#cbe30b]" />
              </div>
              <h3 className="text-3xl font-bold text-white">{activeCapability.title}</h3>
            </div>
            
            <p className="text-lg text-[#e5e5e5] leading-relaxed">
              {activeCapability.description}
            </p>

            <div className="space-y-3">
              {activeCapability.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#cbe30b] mt-2 flex-shrink-0"></div>
                  <span className="text-[#e5e5e5]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-video overflow-hidden">
            <img 
              src={activeCapability.image} 
              alt={activeCapability.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
