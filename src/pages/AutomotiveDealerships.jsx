
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Car, Key, Bot, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "98%", label: "Theft Deterrence Rate", description: "For vehicles on protected lots" },
  { number: "95%", label: "Reduction in Vandalism", description: "Including catalytic converter theft" },
  { number: "24/7", label: "Lot & Showroom Monitoring", description: "Comprehensive site coverage" },
  { number: "100%", label: "Lot Coverage", description: "Eliminate blind spots between light poles" }
];

const challenges = [
  "Preventing theft of high-value vehicles from lots and showrooms.",
  "Stopping catalytic converter theft, which is costly and frequent.",
  "Deterring vandalism, wheel theft, and damage to inventory.",
  "Monitoring large, open lots effectively, especially at night.",
  "Securing key storage and service bay areas from unauthorized access."
];

const benefits = [
  { icon: Car, title: "Protect Your Inventory", description: "Our active deterrence and surveillance stops thieves before they can steal your valuable vehicle assets." },
  { icon: Shield, title: "Stop Parts Theft", description: "AI detection and loud audio warnings are extremely effective at preventing catalytic converter and wheel theft." },
  { icon: Eye, title: "Total Lot Visibility", description: "A high vantage point provides clear views over rows of cars, eliminating the blind spots that ground-based cameras have." },
  { icon: Key, title: "Secure Key & Service Areas", description: "Ensure service bays and key management systems are monitored to prevent internal and external threats." }
];

const faqItems = [
    { question: "Can a single tower cover our entire dealership lot?", answer: "For many standard-sized dealerships, a single, well-placed tower can provide excellent coverage. For very large or irregularly shaped lots, two or more towers can be used to create a seamless security mesh with zero blind spots." },
    { question: "How does it stop catalytic converter theft specifically?", answer: "The AI detects a human loitering around or under a vehicle. It can then trigger flashing strobe lights and a powerful audio warning like, 'You are trespassing. Leave the area immediately.' This is highly effective at scaring off thieves." },
    { question: "Will the lights and sirens bother our neighbors?", answer: "We work with you to customize the response. We can use directional speakers and schedule automated responses for specific hours to be effective without creating a public nuisance. Often, a verbal warning is all that's needed." },
    { question: "Is this more effective than a security guard driving around?", answer: "Yes. A tower provides constant, 24/7 monitoring of the entire lot at once. It never takes a break, can't be distracted, and provides a perfect, unbiased record of everything it sees, often for a fraction of the cost." },
    { question: "Can we use the footage for marketing or sales?", answer: "While the primary purpose is security, you have 24/7 access to the live feed. You could potentially use time-lapses of lot activity or other creative shots for your dealership's social media or website." }
];

export default function AutomotiveDealerships() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059824/Car_Dealer_zzcbi0.jpg" alt="Car dealership lot with luxury vehicles" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Automotive Dealerships</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Drive Thieves Off <span className="text-[#cbe30b]">Your Lot</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Protect your high-value inventory from theft and vandalism with the most effective active deterrence solution for automotive dealerships.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Protect Your Dealership</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Dealership Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059860/Car_Dealer_i05jb1.jpg" alt="Row of cars at dealership" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Open Lot is an Open Invitation</h2>
              <p className="text-lg text-[#666666] mb-8">Dealerships are a top target for organized crime, costing millions in stolen vehicles and parts. A passive security system isn't a deterrent.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">The Ultimate Sales Protection Plan</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Stop Paying for Criminal Damage</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Protect your bottom line from theft and vandalism. Invest in a security solution that pays for itself.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
