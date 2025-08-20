
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Store, ShoppingCart, Bot, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "70%", label: "Reduction in Loitering", description: "In parking lots and entryways" },
  { number: "24/7", label: "Parking Lot Monitoring", description: "Enhance customer and employee safety" },
  { number: "90%", label: "Deterrence of 'Smash & Grabs'", description: "At protected storefronts" },
  { number: "30%", label: "Decrease in Shrink", description: "From after-hours break-ins" }
];

const challenges = [
  "Securing vast parking lots from crime and ensuring customer safety.",
  "Preventing 'smash and grab' burglaries and after-hours break-ins.",
  "Deterring loitering and other unwanted activity at store entrances.",
  "Monitoring receiving docks and employee entrances for unauthorized access.",
  "Combating Organized Retail Crime (ORC) targeting your store."
];

const benefits = [
  { icon: ShoppingCart, title: "Safer Shopping Experience", description: "A visible security presence in the parking lot makes customers and employees feel safer." },
  { icon: Shield, title: "Prevent Break-Ins", description: "Active deterrence with lights and audio stops criminals before they can breach your storefront." },
  { icon: Eye, title: "Parking Lot Dominance", description: "Monitor the entire parking lot for vehicle break-ins, suspicious activity, and liability incidents." },
  { icon: Store, title: "Protect the Perimeter", description: "Secure all sides of your building, including vulnerable receiving areas and employee access points." }
];

const faqItems = [
    { question: "Can this help against organized retail crime rings?", answer: "Yes. ORC groups often survey locations beforehand. A highly visible and advanced deterrent like a Sentinel Tower makes your store a much harder target, encouraging them to go elsewhere." },
    { question: "Our parking lot has poor lighting. Does that matter?", answer: "Not for our cameras. They are equipped with powerful IR illuminators that allow them to see clearly in low-light and no-light conditions, ensuring your lot is monitored effectively 24/7." },
    { question: "How does this help with liability in the parking lot?", answer: "By providing crystal-clear video evidence of any slip-and-fall incidents or vehicle accidents, you have an unbiased record to combat fraudulent claims and assess real situations accurately." },
    { question: "Will this disrupt our customers?", answer: "No. The system operates silently in the background. Deterrent features like lights and audio are only activated for specific, verified threats, typically after hours, and can be fully customized." },
    { question: "Can we monitor the feed from our store's loss prevention office?", answer: "Yes, your loss prevention and management teams can be given secure access to the live and recorded video feeds through a simple web application on any computer." }
];

export default function BigBoxStores() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059823/big_box_retail_jk6ttl.jpg" alt="Large retail store exterior" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Big Box Retail</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">From Parking Lot to <span className="text-[#cbe30b]">Perimeter</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Deter organized retail crime, reduce shrink, and enhance customer safety with a powerful, always-on security presence.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get a Retail Quote</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Retail Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059859/Big_Box_Retail_u5udg6.jpg" alt="Shopping cart in store parking lot" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Store is a High-Value Target</h2>
              <p className="text-lg text-[#666666] mb-8">Large storefronts and packed parking lots make big box stores a prime target for everything from shoplifting to organized smash-and-grabs.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">A Smarter Loss Prevention Strategy</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Protect Your Store, Protect Your Profit</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">It's time to fight back against retail crime. Implement a security solution that actively deters threats and enhances safety.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
