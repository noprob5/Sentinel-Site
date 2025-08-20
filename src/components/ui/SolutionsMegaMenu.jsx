import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Shield, 
  Eye, 
  Map,
  Camera,
  Zap,
  Cloud
} from "lucide-react";

const useCases = [
    {
        category: "Asset Protection",
        icon: Shield,
        items: [
            { name: "Preventing Equipment Theft", url: createPageUrl("SolutionsUseCaseEquipmentTheft") },
            { name: "Securing Vehicle Inventory", url: createPageUrl("SolutionsUseCaseVehicleInventory") },
            { name: "Stopping Material & Copper Theft", url: createPageUrl("SolutionsUseCaseCopperTheft") }
        ]
    },
    {
        category: "Operational Oversight",
        icon: Eye,
        items: [
            { name: "Monitoring Remote Sites", url: createPageUrl("SolutionsUseCaseRemoteSites") },
            { name: "Managing Large Properties", url: createPageUrl("SolutionsUseCaseLargeProperties") },
            { name: "Enhancing Event Security", url: createPageUrl("SolutionsUseCaseEventSecurity") }
        ]
    },
    {
        category: "Public Safety",
        icon: Map,
        items: [
            { name: "Crime Hotspot Deterrence", url: createPageUrl("SolutionsUseCaseCrimeHotspots") },
            { name: "Incident & Emergency Overwatch", url: createPageUrl("SolutionsUseCaseEmergencyOverwatch") },
            { name: "Securing Public Spaces", url: createPageUrl("SolutionsUseCasePublicSpaces") }
        ]
    }
];

const capabilities = [
    {
        category: "Intelligent Surveillance",
        icon: Camera,
        items: [
            { name: "AI-Powered Detection", url: createPageUrl("SolutionsCapabilityAIDetection") },
            { name: "360° Live PTZ Video", url: createPageUrl("SolutionsCapabilityLiveVideo") },
            { name: "Autonomous Solar Power", url: createPageUrl("SolutionsCapabilityAutonomousPower") }
        ]
    },
    {
        category: "Active Deterrence",
        icon: Zap,
        items: [
            { name: "Live Two-Way Audio", url: createPageUrl("SolutionsCapabilityAudioDeterrence") },
            { name: "High-Intensity Strobe Lights", url: createPageUrl("SolutionsCapabilityStrobeLights") },
            { name: "Physical On-Site Presence", url: createPageUrl("SolutionsCapabilityPhysicalPresence") }
        ]
    },
    {
        category: "Platform & Compliance",
        icon: Cloud,
        items: [
            { name: "Rapid Mobile Deployment", url: createPageUrl("SolutionsCapabilityMobileDeployment") },
            { name: "Cloud VMS & Mobile App", url: createPageUrl("SolutionsCapabilityCloudVMS") },
            { name: "NDAA & TAA Compliant", url: createPageUrl("SolutionsCapabilityNDAACompliance") }
        ]
    }
];

export default function SolutionsMegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 w-screen bg-[#0d0d0d]/95 backdrop-blur-lg border-t border-[#333333] shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            
            {/* Use Cases Column */}
            <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-[#cbe30b] tracking-wider uppercase mb-8 border-b border-[#cbe30b]/30 pb-3 flex-shrink-0">Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
                    {useCases.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div key={category.category}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Icon className="w-4 h-4 text-[#cbe30b]" />
                                    <h4 className="font-bold text-white text-base">{category.category}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {category.items.map((item) => (
                                        <li key={item.name}>
                                            <Link to={item.url} onClick={onClose} className="text-[#aaa] hover:text-[#cbe30b] text-sm transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Capabilities Column */}
            <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-[#cbe30b] tracking-wider uppercase mb-8 border-b border-[#cbe30b]/30 pb-3 flex-shrink-0">Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
                    {capabilities.map((category) => {
                        const Icon = category.icon;
                        return (
                            <div key={category.category}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Icon className="w-4 h-4 text-[#cbe30b]" />
                                    <h4 className="font-bold text-white text-base">{category.category}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {category.items.map((item) => (
                                        <li key={item.name}>
                                            <Link to={item.url} onClick={onClose} className="text-[#aaa] hover:text-[#cbe30b] text-sm transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}