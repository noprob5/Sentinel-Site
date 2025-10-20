
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Shield, Users, Building2, Lock, ArrowRight } from "lucide-react"; // ChevronDown is removed as it's handled internally by AccordionTrigger
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const industries = [
  {
    icon: Shield,
    title: "Military & Defense",
    description: "Battle-tested platforms for tactical operations, base security, and force protection. NDAA compliant and mission-ready.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/2456520c-1b70-4fee-7270-751a72657200/public",
    url: createPageUrl("MilitaryAndDefense")
  },
  {
    icon: Users,
    title: "Law Enforcement & Public Safety", 
    description: "Mobile command posts and surveillance platforms for crowd control, crime deterrence, and emergency response.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/32ec378d-11be-4f37-4d50-a5ab6c2fcd00/public",
    url: createPageUrl("LawEnforcement")
  },
  {
    icon: Building2,
    title: "Critical Infrastructure Protection",
    description: "Secure vital assets like power grids, water systems, and communication networks with autonomous monitoring.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b4d3a29e-b80d-48d9-97e4-ec480c2fac00/public",
    url: createPageUrl("CriticalInfrastructure")
  },
  {
    icon: Lock,
    title: "Private Security",
    description: "Enhanced security solutions for construction sites, commercial properties, and special events with proven ROI.",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/cb38c2db-c67c-4a9e-2926-fbcd3005e500/public",
    url: createPageUrl("PrivateSecurity")
  }
];

export default function IndustriesServedSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Industries <span className="text-[#cbe30b]">We Serve</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            From tactical military operations to commercial security, our platforms adapt to any mission requirement.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="group bg-[#0d0d0d]/60 backdrop-blur-sm border border-[#333333] overflow-hidden hover:border-[#cbe30b]/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#cbe30b]/20 group-hover:bg-[#cbe30b]/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#cbe30b]" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#cbe30b] transition-colors duration-300">
                      {industry.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <Button asChild className="bg-transparent border font-semibold border-[#333333] text-white hover:bg-[#cbe30b] hover:text-black hover:border-[#cbe30b] transition-colors duration-300">
                    <Link to={industry.url}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                  <div className="bg-[#0d0d0d]/60 border border-[#333333]">
                    <AccordionTrigger className="p-4 text-white hover:no-underline [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-4 text-left">
                        <div className="p-3 bg-[#cbe30b]/20">
                           <Icon className="w-6 h-6 text-[#cbe30b]" />
                        </div>
                        <span className="text-lg font-bold">{industry.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                      <div className="aspect-video">
                        <img src={industry.image} alt={industry.title} className="w-full h-full object-cover"/>
                      </div>
                      <div className="p-6">
                        <p className="text-[#666666] mb-6 leading-relaxed">{industry.description}</p>
                        <Button asChild className="w-full bg-transparent border font-semibold border-[#333333] text-white hover:bg-[#cbe30b] hover:text-black hover:border-[#cbe30b] transition-colors duration-300">
                           <Link to={industry.url}>
                             Learn More
                             <ArrowRight className="ml-2 w-4 h-4" />
                           </Link>
                         </Button>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
