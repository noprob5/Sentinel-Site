
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Warehouse, Package, Bot, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "90%", label: "Reduction in Trailer Theft", description: "From storage yards" },
  { number: "24/7", label: "Dock Door Monitoring", description: "Prevent unauthorized access" },
  { number: "360°", label: "Perimeter Coverage", description: "For even the largest facilities" },
  { number: "100%", label: "Evidence Capture", description: "High-resolution video for any incident" }
];

const challenges = [
  "Securing massive warehouse facilities and distribution centers.",
  "Preventing internal and external theft of high-value goods.",
  "Monitoring hundreds of dock doors and access points.",
  "Deterring after-hours break-ins and trailer theft from yards.",
  "Maintaining safety and security without disrupting operations."
];

const benefits = [
  { icon: Eye, title: "Complete Facility Oversight", description: "From the fence line to the dock door, get a bird's-eye view of your entire operation, 24/7." },
  { icon: Shield, title: "Deter High-Value Theft", description: "A visible, active security presence deters organized criminals targeting your inventory." },
  { icon: Package, title: "Protect Goods in Transit", description: "Monitor staging areas and loading docks to ensure inventory is secure at its most vulnerable points." },
  { icon: Bot, title: "Focus on Real Threats", description: "AI analytics filter out noise, alerting you only to verified human or vehicle activity in restricted zones." }
];

const faqItems = [
    { question: "Can this system tell the difference between an employee and an intruder?", answer: "The system's AI is trained on human and vehicle detection. While it doesn't identify specific individuals, it can be scheduled to only alert you to human activity in secure zones after operational hours, drastically reducing false alarms." },
    { question: "How many dock doors can one tower monitor?", answer: "A single tower, strategically placed, can monitor a long line of dock doors. For very large facilities with multiple sides, two or more towers can create a seamless surveillance network." },
    { question: "Does this help prevent internal theft?", answer: "While primarily a perimeter and yard solution, the visible presence of comprehensive surveillance is a strong deterrent against all forms of theft, including internal. It promotes a more secure and accountable environment." },
    { question: "Is it difficult to move the tower if our yard layout changes?", answer: "Not at all. The towers are designed for mobility. They can be easily relocated in under 15 minutes with a standard forklift or truck, adapting to your operational needs." },
    { question: "What happens if a camera is tampered with?", answer: "Our systems feature tamper detection. If a camera's view is obstructed, spray-painted, or disconnected, an immediate alert is sent to our monitoring center and to you." }
];

export default function LogisticsAndWarehousing() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059825/wh_and_dist_wh95hk.jpg" alt="Large warehouse facility" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Warehousing & Distribution</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Ironclad Security for <span className="text-[#cbe30b]">Your Inventory</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Protect your distribution centers and storage yards from internal and external threats, 24/7, with an intelligent security powerhouse.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Secure Your Facility</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Warehouse Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059861/wh_and_dist_ampcpu.jpg" alt="Warehouse loading bay" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Biggest Asset is Your Biggest Target</h2>
              <p className="text-lg text-[#666666] mb-8">Massive facilities with high-value inventory are prime targets for sophisticated criminals. A simple camera isn't enough.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Total Inventory Protection</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Lock Down Your Logistics</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Stop inventory shrink and protect your facility from every angle. Get a comprehensive security plan today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
