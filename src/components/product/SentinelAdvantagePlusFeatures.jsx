
import React from "react";
import { AdvancedTabs } from "@/components/ui/AdvancedTabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Fuel, 
  Zap, 
  Wifi, 
  Ruler
} from "lucide-react";

const features = {
  camera: { // This new key replaces 'integration' conceptually for the data structure
    hero: {
      title: "Heavy Payload Integration",
      description: "Supports large-format radar, high-power electronic warfare suites, and multi-sensor arrays.",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/f887c6c5-1454-48e3-afe3-f70833879d00/public"
    },
    specs: [ // Existing 'integration' specs moved here
      { title: "High-Power Military Systems", description: "Purpose-built for radar arrays, EW systems, runway lighting, and other 20kW continuous-load applications" },
      { title: "Industrial Equipment Support", description: "Power heavy machinery, welding equipment, and industrial processes in remote locations" },
      { title: "Military-Grade Construction", description: "Built to MIL-STD specifications with shock, vibration, and EMI protection" },
      { title: "Custom Integration Services", description: "Expert engineering team designs and implements custom solutions for unique requirements" },
      { title: "Rapid Field Deployment", description: "Designed for quick setup by military personnel in tactical environments" },
      { title: "NDAA Compliance", description: "Fully compliant with NDAA requirements for government and military contracts" }
    ]
  },
  power: {
    hero: {
      title: "20kW Primary Power Generation",
      description: "A robust 20kW diesel generator provides the continuous, high-current power needed for the most demanding mission equipment.",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/05953327-bfa5-4fd4-85d9-ae60ba7ce000/public"
    },
    specs: [ // Existing 'power' specs moved here
      { title: "20kW Primary Generator", description: "Heavy-duty diesel generator provides continuous 20kW power for the most demanding military and industrial applications" },
      { title: "No Solar Dependency", description: "Pure generator power eliminates weather-related power fluctuations for consistent, reliable operations" },
      { title: "Extended Fuel Capacity", description: "Large fuel tank provides days of continuous operation without refueling for sustained missions" },
      { title: "Automatic Load Management", description: "Intelligent power distribution optimizes generator efficiency and extends operational runtime" },
      { title: "Redundant Systems", description: "Backup generator and dual fuel systems ensure maximum uptime for critical operations" },
      { title: "Remote Fuel Monitoring", description: "Real-time fuel level monitoring and consumption tracking with predictive refueling alerts" }
    ]
  },
  connectivity: {
    hero: {
      title: "Integrated C5ISR Networking",
      description: "Features integrated networking hardware for secure data backhaul over cellular, SATCOM, or tactical radio.",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/19936a60-d170-4fa5-2b1f-240fdcfb1b00/public"
    },
    specs: [ // Existing 'connectivity' specs moved here
      { title: "Military Communication Systems", description: "Support for SATCOM, tactical radios, and secure communication networks" },
      { title: "High-Throughput Data", description: "Power and connectivity for high-bandwidth radar and sensor data transmission" },
      { title: "Secure Network Architecture", description: "Encrypted communications with support for classified and sensitive operations" },
      { title: "Command & Control Integration", description: "Seamless integration with existing C4ISR systems and battlefield networks" },
      { title: "Redundant Communication Paths", description: "Multiple communication options ensure mission continuity even if primary links fail" },
      { title: "Remote System Management", description: "Secure remote monitoring and control capabilities for distributed operations" }
    ]
  },
  physical: {
    hero: {
      title: "Heavy-Duty Trailer Platform",
      description: "A dual-axle, 10,000 lbs trailer designed for stability and transport of heavy, mission-critical systems.",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/545301a8-07d3-4cf6-25d2-328a83bb9100/public"
    },
    specs: [ // Existing 'physical' specs moved here
      { title: "Heavy-Duty Platform", description: "Reinforced chassis and mounting systems support up to 1,000lbs of integrated equipment" },
      { title: "All-Terrain Deployment", description: "Rugged construction enables deployment in extreme environments and challenging terrain" },
      { title: "Extended Height Capability", description: "Heavy-duty telescopic mast extends from 15ft to 40ft for maximum equipment elevation" },
      { title: "Military Trailer Standards", description: "Built to military trailer specifications for compatibility with existing logistics systems" },
      { title: "Extreme Weather Operation", description: "Operates reliably in temperatures from -50°F to 160°F with wind resistance up to 120mph" },
      { title: "Modular Configuration", description: "Configurable equipment bays and mounting points adapt to specific mission requirements" }
    ]
  }
};

const FeatureContent = ({ specs }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {specs.map((spec, index) => (
      <Card key={index} className="bg-[#1a1a1a] backdrop-blur-sm border border-[#333333] hover:border-[#cbe30b]/30 transition-all duration-300 group">
        <CardContent className="p-6">
          <h4 className="font-semibold text-white mb-3 group-hover:text-[#cbe30b] transition-colors duration-300">
            {spec.title}
          </h4>
          <p className="text-[#666666] leading-relaxed">
            {spec.description}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default function SentinelAdvantagePlusFeatures() {
  const tabs = [
    { id: 'power', title: 'Generator Power', icon: Fuel, content: <FeatureContent specs={features.power.specs} /> },
    // Changed from 'integration' to 'camera' based on new 'features' structure
    { id: 'camera', title: 'Payload Integration', icon: Zap, content: <FeatureContent specs={features.camera.specs} /> }, 
    { id: 'connectivity', title: 'Communications', icon: Wifi, content: <FeatureContent specs={features.connectivity.specs} /> },
    { id: 'physical', title: 'Platform', icon: Ruler, content: <FeatureContent specs={features.physical.specs} /> }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Heavy-Duty <span className="text-[#cbe30b]">Features</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            The Sentinel Advantage+ delivers uncompromising power and reliability for the most demanding military and industrial applications.
          </p>
        </div>
        <div className="bg-[#0d0d0d]/50 p-8">
          <AdvancedTabs tabs={tabs} layout="horizontal" />
        </div>
      </div>
    </section>
  );
}
