
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // Card and CardContent are retained as they were in the original file, even if not directly used in the updated logic.
import {
  Siren,
  Bot,
  BatteryCharging,
  Truck
} from "lucide-react";

const solutionData = {
  deterrence: {
    icon: Siren,
    title: "Active Deterrence",
    description: "Our towers don't just record crime; they prevent it. With brilliant floodlights, loud speakers, and an imposing physical presence, would-be criminals are immediately put on notice.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154763/IMG_9619_fsjgru.jpg"
  },
  automation: {
    icon: Bot,
    title: "Intelligent Automation",
    description: "Leverage our AI-powered software to automatically detect threats, distinguish between people and vehicles, and send real-time alerts to your device, ensuring you never miss a critical event.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1974&auto=format&fit=crop"
  },
  power: {
    icon: BatteryCharging,
    title: "Autonomous Power",
    description: "Designed for true remote operation, Sentinel Towers are 100% solar-powered, with a high-capacity battery system that provides days of runtime, even with no sun.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop"
  },
  design: {
    icon: Truck,
    title: "Rapid Deployment Design",
    description: "The entire system is built onto a mobile trailer, allowing for delivery and setup by a single person in under 30 minutes. Secure any location, no matter how remote, on a moment's notice.",
    image: "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154761/IMG_0354_zum8rp.jpg"
  }
};

const SolutionContent = ({ data }) => {
  const Icon = data.icon;
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
                <div className="p-3 rounded-lg bg-[#cbe30b]/20">
                  <Icon className="w-6 h-6 text-[#cbe30b]" />
                </div>
                <h3 className="text-2xl font-bold text-white">{data.title}</h3>
            </div>
            <p className="text-lg text-[#666666] leading-relaxed">{data.description}</p>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover"/>
        </div>
    </div>
  );
};

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState('deterrence');

  const tabs = [
    { id: 'deterrence', title: 'Deterrence', icon: Siren },
    { id: 'automation', title: 'Automation', icon: Bot },
    { id: 'power', title: 'Power', icon: BatteryCharging },
    { id: 'design', title: 'Design', icon: Truck }
  ];

  const activeContentData = solutionData[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            The Complete Security <span className="text-[#cbe30b]">Solution</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            More than just a camera on a pole. Sentinel Towers are an end-to-end platform for site security.
          </p>
        </div>
        <div className="flex border-b border-[#333333] overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 group focus:outline-none flex-1 min-w-0
                ${activeTab === tab.id ? 'border-b-2 border-[#cbe30b]' : ''}`
              }
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a1a] group-hover:bg-[#333333] transition-all duration-300">
                <tab.icon className="w-6 h-6 text-[#cbe30b]" />
              </div>
              <span className={`transition-colors duration-300 truncate
                ${activeTab === tab.id ? 'text-white' : 'text-[#666666] group-hover:text-white'}`
              }>
                  {tab.title}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-8">
          <SolutionContent data={activeContentData} />
        </div>
      </div>
    </section>
  );
}
