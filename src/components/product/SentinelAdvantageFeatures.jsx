
import React from "react";
import { AdvancedTabs } from "@/components/ui/AdvancedTabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Battery, 
  Zap, 
  Wifi, 
  Ruler
} from "lucide-react";

const features = {
  camera: {
    hero: {
      title: "High-Performance ISR Payloads",
      description: "Integrates with advanced long-range camera systems, radar, and signals intelligence equipment.",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/f1900b40-d103-4515-7285-c21f6ebf1a00/public"
    },
    // Although the outline didn't explicitly list specs for camera,
    // the structure implies consistency with power, and FeatureContent expects a 'specs' array.
    // Adding an empty array here ensures future compatibility if a 'camera' tab is added.
    specs: [] 
  },
  power: {
    hero: {
      title: "Hybrid Power System",
      description: "Combines a 400-800W solar array with a 1,500Ah battery and a 3kW auto-start diesel generator for continuous operation.",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/892c122d-2c01-42af-49fa-5e5e40556600/public"
    },
    specs: [ // This array contains the original power features
      { title: "Hybrid Power System", description: "400-800W solar array combined with 1,500Ah lithium battery bank for baseline power" },
      { title: "3kW Auto-Start Generator", description: "Intelligent backup generator automatically starts when battery levels drop or power demand exceeds solar capacity" },
      { title: "Uninterrupted Operation", description: "Seamless transition between solar, battery, and generator power ensures zero downtime for critical systems" },
      { title: "Extended Runtime", description: "Operates continuously for weeks without sun, with automatic fuel management and monitoring" },
      { title: "Smart Load Management", description: "Intelligent power distribution prioritizes critical systems and optimizes fuel consumption" },
      { title: "Remote Monitoring", description: "Real-time power status, fuel levels, and system health monitoring via cloud dashboard" }
    ]
  },
  integration: [
    { title: "High-Power Equipment Support", description: "Designed for radar systems, EW equipment, and communications arrays requiring up to 3kW continuous power" },
    { title: "Ruggedized Mounting", description: "Military-grade shock and vibration resistant mounting systems for sensitive equipment" },
    { title: "Environmental Protection", description: "IP67 rated enclosures protect critical components from dust, water, and extreme temperatures" },
    { title: "Custom Integration", description: "Work with our engineers to integrate your specific hardware and software requirements" },
    { title: "Quick Deployment", description: "Rapid setup and breakdown for tactical operations and emergency response scenarios" },
    { title: "NDAA Compliance", description: "All components sourced and manufactured to meet NDAA requirements for government contracts" }
  ],
  connectivity: [
    { title: "Multi-Network Support", description: "4G LTE with 5G ready connectivity plus satellite communication backup options" },
    { title: "High-Bandwidth Data", description: "Support for high-throughput data transmission from radar and sensor systems" },
    { title: "Secure Communications", description: "Encrypted data transmission with VPN support for sensitive military and government operations" },
    { title: "Remote Management", description: "Complete system control and monitoring via secure web portal and mobile applications" },
    { title: "Mesh Networking", description: "Create resilient communication networks between multiple deployed platforms" },
    { title: "Redundant Connections", description: "Multiple communication pathways ensure critical data always reaches command centers" }
  ],
  physical: [
    { title: "Heavy-Duty Construction", description: "Reinforced steel frame designed to support up to 500lbs of integrated equipment" },
    { title: "All-Terrain Mobility", description: "Rugged trailer platform capable of deployment in challenging terrain and weather conditions" },
    { title: "Extended Height Options", description: "Telescopic mast extends from 12ft to 30ft for optimal sensor and antenna positioning" },
    { title: "Rapid Deployment", description: "Two-person setup in under 45 minutes with integrated stabilization and leveling systems" },
    { title: "Weather Resilience", description: "Engineered to withstand winds up to 90mph and operate in temperatures from -40°F to 140°F" },
    { title: "Modular Design", description: "Configurable payload bays and mounting options adapt to evolving mission requirements" }
  ]
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

export default function SentinelAdvantageFeatures() {
  const tabs = [
    // Updated to access 'specs' array within the 'power' object
    { id: 'power', title: 'Hybrid Power', icon: Battery, content: <FeatureContent specs={features.power.specs} /> },
    { id: 'integration', title: 'Integration', icon: Zap, content: <FeatureContent specs={features.integration} /> },
    { id: 'connectivity', title: 'Connectivity', icon: Wifi, content: <FeatureContent specs={features.connectivity} /> },
    { id: 'physical', title: 'Platform', icon: Ruler, content: <FeatureContent specs={features.physical} /> }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Advanced <span className="text-[#cbe30b]">Features</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            The Sentinel Advantage combines the reliability of solar power with the assurance of generator backup for mission-critical operations.
          </p>
        </div>
        <div className="bg-[#0d0d0d]/50 p-8">
          <AdvancedTabs tabs={tabs} layout="horizontal" />
        </div>
      </div>
    </section>
  );
}
