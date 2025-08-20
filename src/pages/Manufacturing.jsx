
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Factory, Bot, Package, Truck, Eye, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "90%", label: "Reduction in Metal Theft", description: "At scrap yards and fab shops" },
  { number: "24/7", label: "Perimeter Security", description: "For large, complex facilities" },
  { number: "100%", label: "NDAA Compliant", description: "For sensitive and government contract work" },
  { number: "360°", label: "Lot & Door Coverage", description: "Monitor all vehicle and personnel access" }
];

const challenges = [
  "Securing vast perimeters and outdoor storage yards.",
  "Preventing theft of raw materials, finished goods, and copper.",
  "Monitoring shipping and receiving docks for unauthorized activity.",
  "Ensuring employee safety and compliance with safety protocols.",
  "Needing a robust security presence for insurance and compliance."
];

const benefits = [
  { icon: Eye, title: "Total Site Awareness", description: "Monitor your entire property, from the fence line to the factory floor, with a unified surveillance solution." },
  { icon: Package, title: "Protect Raw Materials", description: "Deter theft of valuable assets like copper, aluminum, and other raw materials stored outdoors." },
  { icon: Truck, title: "Secure Logistics Chain", description: "Keep a watchful eye on shipping/receiving areas to prevent cargo theft and ensure accurate logs." },
  { icon: Shield, title: "Deter Internal & External Theft", description: "A highly visible and always-on security presence deters both opportunistic criminals and internal threats." }
];

const faqItems = [
    { question: "Can the cameras identify license plates of trucks coming and going?", answer: "Yes, our high-resolution cameras with optical zoom are capable of capturing clear license plate images, even from a distance, providing a valuable record of all vehicle traffic." },
    { question: "Our facility has areas with no lighting. Is that a problem?", answer: "Not at all. The cameras deliver exceptional low-light performance and are equipped with infrared (IR) illuminators to see clearly in complete darkness." },
    { question: "How does this help with employee safety?", answer: "The system can monitor for safety compliance in designated areas. More importantly, it provides a rapid way to verify accidents or emergencies, allowing you to dispatch help faster. The visible security presence also deters potential workplace violence." },
    { question: "Can this integrate with our existing access control system?", answer: "We can work with your teams to ensure our system complements your existing security infrastructure, providing visual verification for access control events." },
    { question: "We work on sensitive government contracts. Is your equipment compliant?", answer: "Yes, all our equipment is fully NDAA (National Defense Authorization Act) compliant, making it suitable for facilities with high-security requirements." }
];

export default function Manufacturing() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059828/manufacturing_vcfjuf.jpg" alt="Industrial manufacturing plant" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Manufacturing Security</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Keep Your Production <span className="text-[#cbe30b]">Protected & Profitable</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Safeguard your facility, materials, and supply chain with rugged, intelligent surveillance built for industrial environments.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Industrial Quote</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Manufacturing Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059863/manufacturing_caxxpd.jpg" alt="Industrial storage yard" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Facility is More Than Walls and a Roof</h2>
              <p className="text-lg text-[#666666] mb-8">Outdoor storage yards, sprawling perimeters, and valuable materials make manufacturing plants uniquely vulnerable to theft and disruption.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">An Industrial-Grade Solution</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Fortify Your Facility</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Don't let theft and inefficiency cut into your profits. Secure your manufacturing plant with an intelligent, cost-effective solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
