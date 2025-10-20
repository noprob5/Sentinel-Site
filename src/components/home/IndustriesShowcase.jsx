
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
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/38d5a1ed-3d88-4c4f-a4fc-6a14fb906400/public', // Replaced Cloudinary link with new link for Construction/Commercial
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
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/3a7cd2b0-74fa-4f0d-6959-91be4eff6500/public', // Replaced Cloudinary link with new link for Energy & Utilities/Industrial
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
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/93f37d17-a6c2-4e14-8b16-f0de8a33d000/public', // Replaced Cloudinary link with new link for Automotive Dealerships/Retail
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
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/4da53a2f-9ef3-4b07-4949-f139ff0e3900/public', // Replaced Cloudinary link with new link for Transportation/Public Safety
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
