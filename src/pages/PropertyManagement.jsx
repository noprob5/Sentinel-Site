
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Building2, Users, Bot, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "75%", label: "Reduction in Loitering", description: "In parking lots and common areas" },
  { number: "50%", label: "Decrease in Vehicle Break-Ins", description: "Across protected communities" },
  { number: "24/7", label: "Amenity Monitoring", description: "For pools, clubhouses, and gyms" },
  { number: "10%", label: "Insurance Premium Reduction", description: "Potential savings from reduced liability" }
];

const challenges = [
  "Ensuring resident safety in parking lots and common areas.",
  "Preventing unauthorized use of amenities like pools and gyms.",
  "Deterring vehicle break-ins, catalytic converter theft, and illegal dumping.",
  "Managing liability and providing evidence for incidents.",
  "Providing a visible security presence without high guard costs."
];

const benefits = [
  { icon: Users, title: "Enhance Resident Safety", description: "Create a safer environment for tenants, improving satisfaction and retention rates." },
  { icon: Shield, title: "Reduce Liability", description: "Deter criminal activity and capture clear evidence of any incidents to protect your assets." },
  { icon: Building2, title: "Protect Property Value", description: "A secure community is a desirable community, helping to maintain and increase property value." },
  { icon: Bot, title: "Cost-Effective Security", description: "Get 24/7/365 monitoring for a fraction of the cost of hiring overnight security guards." }
];

const faqItems = [
    { question: "Can this monitor our community pool after hours?", answer: "Absolutely. The system's AI can be configured to detect human presence in restricted areas during specific times and issue an automated audio warning, deterring unauthorized use." },
    { question: "Will this help with illegal dumping near our dumpsters?", answer: "Yes. The cameras can monitor waste disposal areas 24/7. When the system detects a vehicle or person dumping illegally, it can trigger an alert and audio message." },
    { question: "How does this compare to hiring a security guard?", answer: "A Sentinel Tower provides constant, unbiased monitoring of a wide area without breaks or distractions. It's a significant cost saving while often providing more comprehensive coverage than a single guard can." },
    { question: "Can residents access the camera feeds?", answer: "Access is typically restricted to property management and owners for privacy reasons. However, footage of specific incidents can be reviewed and shared with law enforcement as needed." },
    { question: "Where is the best place to install a tower in our community?", answer: "We recommend placing towers at key entry/exit points and locations that provide a clear view of large parking areas or critical amenities. We provide a free site assessment to determine optimal placement." }
];

export default function PropertyManagement() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059830/property_management_zwkdtc.jpg" alt="Modern apartment complex" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Property Management Security</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">A Safer Community, <span className="text-[#cbe30b]">A Better Bottom Line</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Enhance resident safety, deter crime, and reduce liability across your properties with intelligent, 24/7 surveillance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Secure Your Community</Link></Button>
            </div>
          </div>
        </div>
      </section>

       <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Management by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div>
                <div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059867/property_managment_hghl5z.jpg" alt="Apartment parking lot at night" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Parking Lots and Common Areas Are Vulnerable</h2>
              <p className="text-lg text-[#666666] mb-8">Unmonitored spaces invite crime that can harm your residents and your reputation. Proactive deterrence is key.</p>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge) => <div key={challenge} className="flex items-start space-x-3"><div className="w-2 h-2 bg-[#cbe30b] rounded-full mt-2 flex-shrink-0"></div><span className="text-[#e5e5e5]">{challenge}</span></div>)}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits for Managers and Residents</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => { const Icon = benefit.icon; return (<div key={benefit.title} className="text-center space-y-4"><div className="p-4 rounded-full bg-[#cbe30b]/20 w-max mx-auto"><Icon className="w-8 h-8 text-[#cbe30b]" /></div><h3 className="text-xl font-bold text-white">{benefit.title}</h3><p className="text-[#666666] leading-relaxed">{benefit.description}</p></div>); })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border-[#333333]"><AccordionTrigger className="text-white text-lg hover:text-[#cbe30b] text-left">{item.question}</AccordionTrigger><AccordionContent className="text-[#666666] text-base">{item.answer}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Elevate Your Property's Security</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Show residents you care about their safety and protect your investment. Get a quote for your properties today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Request a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
