
import React from "react";
import { AdvancedTabs } from "@/components/ui/AdvancedTabs";
import { 
  Lock,
  Zap,
  ShieldCheck, 
  Flag
} from "lucide-react";

const useCasesData = [
  {
    id: 'private-security',
    icon: Lock,
    title: "Private Security",
    content: {
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/33d85a3e-4e88-4481-ab4f-56dddb80ab00/public',
      title: 'Securing Commercial & Industrial Assets',
      verticals: ['Construction Sites', 'Auto Dealerships', 'Commercial Properties', 'Special Events'],
      useCases: ['Deter theft and vandalism', 'Monitor remote sites 24/7', 'Provide video evidence for incidents', 'Reduce liability and insurance costs'],
      results: 'Proven ROI over traditional guard services'
    }
  },
  {
    id: 'critical-infrastructure',
    icon: Zap,
    title: "Critical Infrastructure",
    content: {
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/3a7cd2b0-74fa-4f0d-6959-91be4eff6500/public',
      title: 'Protecting Essential Services',
      verticals: ['Electrical Substations', 'Water Treatment Plants', 'Data Centers', 'Communication Hubs'],
      useCases: ['Secure perimeters against intrusion', 'Monitor unmanned facilities', 'Automate compliance and reporting', 'Ensure operational continuity'],
      results: 'Enhanced security and regulatory compliance'
    }
  },
  {
    id: 'law-enforcement',
    icon: ShieldCheck,
    title: "Law Enforcement",
    content: {
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/2e90d683-d197-4714-42e8-88110c883c00/public',
      title: 'A Tactical Force Multiplier',
      verticals: ['Police Departments', 'Sheriff\'s Offices', 'Public Safety Agencies', 'Emergency Management'],
      useCases: ['Monitor crime hotspots & public events', 'Provide overwatch for critical incidents', 'Gather high-quality video evidence', 'Establish mobile command posts quickly'],
      results: 'Improved situational awareness and officer safety'
    }
  },
   {
    id: 'military-defense',
    icon: Flag,
    title: "Military & Defense",
    content: {
      image: 'https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/ce9d47da-d232-49f7-9abf-8274050cfa00/public',
      title: 'Mission-Ready ISR & Protection',
      verticals: ['Base Security', 'Force Protection', 'Tactical Operations', 'Training Ranges'],
      useCases: ['Provide persistent ISR for FOBs and perimeters', 'Monitor training exercises and ranges', 'Enhance security for high-value assets', 'Rapidly deploy for expeditionary missions'],
      results: 'NDAA-compliant for secure government use'
    }
  },
];

const UseCaseContent = ({ data }) => (
  <div className="grid lg:grid-cols-2 gap-8 items-center">
    <div className="aspect-video lg:aspect-square rounded-lg overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
    </div>
    <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white">{data.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <h4 className="font-semibold text-[#cbe30b] mb-3">Verticals</h4>
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
                <h4 className="font-semibold text-[#cbe30b] mb-3">Use Cases</h4>
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
            <h4 className="font-semibold text-[#cbe30b] mb-2">Results:</h4>
            <p className="text-lg font-medium text-white">{data.results}</p>
        </div>
    </div>
  </div>
);

export default function UseCasesSection() {
    const tabs = useCasesData.map(uc => ({
        id: uc.id,
        title: uc.title,
        icon: uc.icon,
        content: <UseCaseContent data={uc.content} />
    }));

    return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Perfect for Any <span className="text-[#cbe30b]">Application</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            The Sentinel 1 adapts to diverse security needs across industries and environments.
          </p>
        </div>
        <AdvancedTabs tabs={tabs} layout="vertical" />
      </div>
    </section>
  );
}
