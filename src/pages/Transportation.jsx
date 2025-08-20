
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Truck, Train, Ship, Bot } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "85%", label: "Reduction in Cargo Theft", description: "In monitored yards and depots" },
  { number: "24/7", label: "Gate & Fence Monitoring", description: "Across entire facility perimeters" },
  { number: "98%", label: "Accuracy in Vehicle Logging", description: "Compared to manual check-ins" },
  { number: "Zero", label: "Blind Spots", description: "With strategic tower placement" }
];

const challenges = [
  "Preventing cargo theft from trailers and containers.",
  "Securing large, open storage and container yards.",
  "Monitoring access gates and fence lines for unauthorized entry.",
  "Deterring fuel theft from parked vehicles and on-site tanks.",
  "Maintaining accurate records of all vehicles entering and leaving."
];

const benefits = [
  { icon: Shield, title: "Secure Your Supply Chain", description: "Protect valuable cargo at rest in your yards, ports, and depots, preventing costly losses." },
  { icon: Truck, title: "Automated Gate & Yard Logging", description: "Use license plate recognition to maintain an accurate, automated log of all vehicle traffic." },
  { icon: Train, title: "Deter Trespassing & Vandalism", description: "A strong visual deterrent keeps unauthorized personnel out of secure areas and away from assets." },
  { icon: Ship, title: "Port & Terminal Security", description: "Monitor vast areas, from shipping berths to container stacks, with a flexible, powerful solution." }
];

const faqItems = [
    { question: "Can the system automatically log truck license plates at our gate?", answer: "Yes, our cameras feature license plate recognition (LPR) technology that can automatically capture and log every plate that enters or exits, creating a searchable digital record." },
    { question: "How effective is it at monitoring a large, crowded container yard?", answer: "Very effective. The elevated perspective of the tower allows it to see over stacked containers, and we can deploy multiple towers to create overlapping fields of view, eliminating blind spots." },
    { question: "Can we use this to monitor for fuel theft?", answer: "Yes. Cameras can be positioned to monitor fuel depots and vehicle fleets. The system's AI can detect individuals near fuel tanks during off-hours and trigger alerts." },
    { question: "Is the system rugged enough for a busy port environment?", answer: "Absolutely. Our towers are built with industrial-grade materials to withstand harsh weather, vibrations, and the demanding environment of a busy transportation hub." },
    { question: "How can we review footage of a specific incident?", answer: "All footage is stored and can be accessed securely via our web or mobile app. You can easily search by date, time, and camera to find and export the exact clip you need for investigations." }
];

export default function Transportation() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059826/transportation_jvrdd5.jpg" alt="Container shipping port" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Transportation & Logistics</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Your Cargo is <span className="text-[#cbe30b]">Always on Watch</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Secure your yards, depots, and logistics hubs. Deter cargo theft and monitor your entire supply chain with autonomous surveillance.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Protect Your Hub</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Logistics Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059862/transportation_sslzpj.jpg" alt="Truck loading dock" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Supply Chain is a Target</h2>
              <p className="text-lg text-[#666666] mb-8">Cargo at rest is cargo at risk. From organized criminals to opportunistic thieves, your transportation hubs are constant targets.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Total Asset Visibility</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Keep Your Logistics Moving Securely</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Don't let theft disrupt your operations. Secure your transportation hubs with a smart, proactive security solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
