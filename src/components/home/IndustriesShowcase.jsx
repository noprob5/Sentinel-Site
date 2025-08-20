
import React from "react";
import { AdvancedTabs } from "@/components/ui/AdvancedTabs";
import { 
  Building, 
  Factory, 
  Store,
  ShieldCheck
} from "lucide-react";

const industriesData = [
  {
    id: 'commercial',
    icon: Building,
    title: "Commercial",
    content: {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
      title: 'Protecting Commercial Properties',
      verticals: ['Construction Sites', 'Office Buildings', 'Parking Garages', 'Logistics Centers'],
      useCases: ['Prevent theft of materials and equipment', 'Monitor for unauthorized access', 'Deter vandalism and property damage'],
      results: '95% reduction in after-hours incidents'
    }
  },
  {
    id: 'industrial',
    icon: Factory,
    title: "Industrial",
    content: {
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
      title: 'Securing Industrial Facilities',
      verticals: ['Manufacturing Plants', 'Warehouses', 'Energy Sector', 'Utility Substations'],
      useCases: ['Secure vast perimeters and access points', 'Protect critical infrastructure', 'Monitor for safety compliance'],
      results: 'Enhanced operational oversight'
    }
  },
  {
    id: 'retail',
    icon: Store,
    title: "Retail",
    content: {
      image: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=2071&auto=format&fit=crop',
      title: 'Retail & Automotive Lot Security',
      verticals: ['Car Dealerships', 'Big Box Retailers', 'Shopping Centers', 'Distribution Hubs'],
      useCases: ['Prevent vehicle and inventory theft', 'Deter "push-out" theft and vandalism', 'Monitor parking lots for safety'],
      results: '70% reduction in parking lot incidents'
    }
  },
   {
    id: 'public-safety',
    icon: ShieldCheck,
    title: "Public Safety",
    content: {
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1996&auto=format&fit=crop',
      title: 'Enhancing Community & Event Security',
      verticals: ['Law Enforcement', 'Public Parks', 'Festivals & Events', 'Emergency Management'],
      useCases: ['Provide situational awareness for officers', 'Monitor crowd flow and public spaces', 'Deter illegal dumping and activity'],
      results: 'Force multiplier for law enforcement'
    }
  },
];

const IndustryContent = ({ data }) => (
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    <div className="aspect-video lg:aspect-square rounded-lg overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
    </div>
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">{data.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <h4 className="font-semibold text-[#cbe30b] mb-3">Key Markets</h4>
                <ul className="space-y-2">
                    {data.verticals.map((item, i) => (
                       <li key={i} className="flex items-start">
                           <span className="text-[#cbe30b] mr-2 mt-1">&#8227;</span>
                           <span className="text-[#e5e5e5]">{item}</span>
                       </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-[#cbe30b] mb-3">Applications</h4>
                <ul className="space-y-2">
                    {data.useCases.map((item, i) => (
                        <li key={i} className="flex items-start">
                           <span className="text-[#cbe30b] mr-2 mt-1">&#8227;</span>
                           <span className="text-[#e5e5e5]">{item}</span>
                       </li>
                    ))}
                </ul>
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-[#cbe30b] mb-2">Impact:</h4>
            <p className="text-lg font-medium text-white">{data.results}</p>
        </div>
    </div>
  </div>
);

export default function IndustriesShowcase() {
    const tabs = industriesData.map(uc => ({
        id: uc.id,
        title: uc.title,
        icon: uc.icon,
        content: <IndustryContent data={uc.content} />
    }));

    return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Perfect for Any <span className="text-[#cbe30b]">Application</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            The Sentinel 1 adapts to diverse security needs across industries and environments.
          </p>
        </div>
        <AdvancedTabs tabs={tabs} layout="vertical" defaultTab="commercial" />
      </div>
    </section>
  );
}
