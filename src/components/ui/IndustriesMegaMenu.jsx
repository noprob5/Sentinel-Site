import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Building, 
  Factory, 
  Store, 
  ShieldCheck
} from "lucide-react";

const industries = [
  {
    category: "Commercial",
    icon: Building,
    items: [
      { name: "Construction", url: createPageUrl("Construction") },
      { name: "Commercial Development", url: createPageUrl("CommercialDevelopment") },
      { name: "Property Management", url: createPageUrl("PropertyManagement") },
      { name: "Entertainment & Events", url: createPageUrl("EntertainmentAndEvents") }
    ]
  },
  {
    category: "Industrial", 
    icon: Factory,
    items: [
      { name: "Manufacturing", url: createPageUrl("Manufacturing") },
      { name: "Energy & Utilities", url: createPageUrl("EnergyAndUtilities") },
      { name: "Transportation", url: createPageUrl("Transportation") },
      { name: "Logistics & Warehousing", url: createPageUrl("LogisticsAndWarehousing") }
    ]
  },
  {
    category: "Retail",
    icon: Store, 
    items: [
      { name: "Automotive Dealerships", url: createPageUrl("AutomotiveDealerships") },
      { name: "Big Box Stores", url: createPageUrl("BigBoxStores") },
      { name: "Shopping Centers", url: createPageUrl("ShoppingCenters") },
      { name: "Gas & Convenience", url: createPageUrl("GasAndConvenience") }
    ]
  },
  {
    category: "Public Safety",
    icon: ShieldCheck,
    items: [
      { name: "Law Enforcement", url: createPageUrl("LawEnforcement") },
      { name: "Military & Defense", url: createPageUrl("MilitaryAndDefense") },
      { name: "Critical Infrastructure", url: createPageUrl("CriticalInfrastructure") },
      { name: "Emergency Management", url: createPageUrl("EmergencyManagement") }
    ]
  }
];

export default function IndustriesMegaMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-1/2 -translate-x-1/2 w-screen bg-[#0d0d0d]/95 backdrop-blur-lg border-t border-[#333333] shadow-2xl z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-screen-xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
          {industries.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[#cbe30b]/20">
                    <Icon className="w-5 h-5 text-[#cbe30b]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link 
                        to={item.url}
                        onClick={onClose}
                        className="block text-[#aaa] hover:text-[#cbe30b] transition-colors duration-200 py-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#333333] text-center">
          <p className="text-[#666666] mb-4">Need a custom security solution for your unique industry?</p>
          <Link 
            to={createPageUrl("Contact")}
            onClick={onClose}
            className="inline-flex items-center px-6 py-2 bg-[#cbe30b] hover:bg-[#a8bf0a] text-black font-semibold rounded-md transition-colors duration-200"
          >
            Contact Our Specialists
          </Link>
        </div>
      </div>
    </div>
  );
}