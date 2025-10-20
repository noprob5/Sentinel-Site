
import React from "react";
import { AdvancedTabs } from "@/components/ui/AdvancedTabs";
import { 
  Camera, 
  Battery, 
  Wifi, 
  Ruler
} from "lucide-react";

const features = {
  camera: {
    hero: {
      title: "4K Camera & Active Deterrence",
      description: "Professional-grade surveillance with AI-powered analytics and active threat deterrence",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/ebd1f453-79f5-434b-eaca-dbdc17c07600/public"
    },
    specs: [
      { title: "4K Ultra HD Resolution", description: "Crystal clear video recording at 3840 × 2160 resolution" },
      { title: "360° Pan & Tilt", description: "Complete coverage with remote-controlled positioning" },
      { title: "Advanced Night Vision", description: "See clearly up to 150ft in complete darkness" },
      { title: "Up to 22x Optical Zoom", description: "Get close-up detail on distant subjects" },
      { title: "Police-Grade Blue Strobes", description: "High-intensity deterrent lighting system" },
      { title: "Scene Lights & Loudspeakers", description: "Illuminate areas and broadcast audio warnings" }
    ]
  },
  power: {
    hero: {
      title: "Solar + Battery Power System",
      description: "Complete energy independence with renewable solar power and extended battery backup",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/f3317aa9-7e18-474e-f4ed-ec43df72c400/public"
    },
    specs: [
      { title: "400-800W Solar Array", description: "Four 200W monocrystalline panels provide reliable energy" },
      { title: "1,500Ah Lithium Battery", description: "Extended runtime for up to 12 days without sun" },
      { title: "Smart Power Management", description: "Intelligent systems optimize power consumption" },
      { title: "Zero Grid Dependency", description: "Complete energy independence for remote deployments" }
    ]
  },
  connectivity: {
    hero: {
      title: "Advanced Connectivity Suite",
      description: "Real-time streaming and cloud management with cellular network options",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/8dd3842c-25c0-45ae-45af-a7a2275b9400/public"
    },
    specs: [
      { title: "Cellular Connectivity", description: "Reliable data transmission via cellular networks" },
      { title: "Real-Time HD Streaming", description: "Live video streaming with minimal latency" },
      { title: "Cloud-Based Storage", description: "Unlimited secure storage with intelligent retention" },
      { title: "Remote Management", description: "Complete system control via web portal and mobile apps" }
    ]
  },
  physical: {
    hero: {
      title: "Rapid Deployment Platform",
      description: "Engineered for quick setup and reliable operation in any environment",
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/6474e343-349d-4018-10ed-cb120ff10100/public"
    },
    specs: [
      { title: "15-Minute Setup", description: "Single-person deployment with no special tools required" },
      { title: "8-22ft Telescopic Mast", description: "Manual winch system for optimal positioning" },
      { title: "80mph Wind Rating", description: "Engineered to withstand extreme weather conditions" },
      { title: "Mobile Trailer Platform", description: "Easy relocation as security needs change" }
    ]
  }
};

const FeatureContent = ({ feature }) => (
  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
    <div className="aspect-square rounded-xl overflow-hidden">
      <img 
        src={feature.hero.image} 
        alt={feature.hero.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="space-y-6">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{feature.hero.title}</h3>
        <p className="text-base md:text-lg text-[#666666] leading-relaxed">{feature.hero.description}</p>
      </div>
      <div className="space-y-4">
        {feature.specs.map((spec, index) => (
          <div key={index} className="flex items-start space-x-3 md:p-4 md:bg-[#1a1a1a]/50 md:rounded-lg md:border md:border-[#333333]">
            <div className="w-2 h-2 bg-[#cbe30b] rounded-full mt-1.5 flex-shrink-0"></div>
            <div>
              <h4 className="font-semibold text-white mb-1">{spec.title}</h4>
              <p className="text-[#666666] text-sm">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function FeaturesSection() {
  const tabs = [
    { id: 'camera', title: 'Camera', icon: Camera, content: <FeatureContent feature={features.camera} /> },
    { id: 'power', title: 'Power', icon: Battery, content: <FeatureContent feature={features.power} /> },
    { id: 'connectivity', title: 'Connectivity', icon: Wifi, content: <FeatureContent feature={features.connectivity} /> },
    { id: 'physical', title: 'Physical', icon: Ruler, content: <FeatureContent feature={features.physical} /> }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Advanced <span className="text-[#cbe30b]">Features</span>
          </h2>
          <p className="text-lg md:text-xl text-[#666666] max-w-3xl mx-auto">
            Every component of the Sentinel 1 is engineered for reliability, performance, and ease of use in the field.
          </p>
        </div>
        <div className="bg-[#0d0d0d]/50 rounded-2xl p-4 md:p-8">
          <AdvancedTabs tabs={tabs} layout="horizontal" />
        </div>
      </div>
    </section>
  );
}
