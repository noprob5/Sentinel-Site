
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Fuel, Bot, Eye, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "24/7", label: "Always-On Monitoring", description: "For high-traffic, late-night locations" },
  { number: "90%", label: "Reduction in Gas Drive-Offs", description: "At protected pumps" },
  { number: "80%", label: "Decrease in Loitering", description: "Creating a safer environment" },
  { number: "100%", label: "Evidence Capture", description: "For any incident, day or night" }
];

const challenges = [
  "Preventing gas theft (drive-offs) and shoplifting.",
  "Ensuring employee safety, especially during overnight shifts.",
  "Deterring loitering, vandalism, and other nuisance crimes.",
  "Monitoring pumps, storefront, and parking areas simultaneously.",
  "Capturing clear evidence of incidents in varying light conditions."
];

const benefits = [
  { icon: Clock, title: "24/7 Peace of Mind", description: "Protect your employees and customers around the clock with a security solution that never sleeps." },
  { icon: Fuel, title: "Stop Fuel Theft", description: "License plate recognition and active deterrence work together to drastically reduce gas drive-offs." },
  { icon: Shield, title: "Deter Crime of Opportunity", description: "A visible, high-tech security presence makes would-be criminals think twice and choose an easier target." },
  { icon: Eye, title: "Complete Site Visibility", description: "From the pumps to the parking lot to the front door, monitor every critical angle of your property." }
];

const faqItems = [
    { question: "How exactly does it stop someone from driving off without paying?", answer: "Our system can use license plate recognition (LPR). If a known 'drive-off' vehicle returns, it can alert your staff. More importantly, the highly visible tower and cameras act as a strong psychological deterrent." },
    { question: "Is it effective for protecting a single employee working overnight?", answer: "Absolutely. This is a key benefit. The tower acts as a constant, vigilant watchpost. If a threat is detected, deterrents activate automatically, and the employee can use a panic button to trigger an immediate response, all while staying safely inside." },
    { question: "Will it be too loud for nearby residential areas?", answer: "The audio deterrents are fully customizable. The volume can be adjusted, and we can set 'quiet hours' where it might only use flashing lights as a first warning, reserving audio for more serious, verified threats." },
    { question: "Our station is very busy. Can it handle that?", answer: "Yes, the AI is designed for busy environments. It can be configured to focus on specific behaviors (like loitering for an extended time) or specific areas (like behind the store) to avoid unnecessary alerts during normal customer traffic." },
    { question: "What is the cost compared to the losses from a single robbery?", answer: "The monthly leasing cost for a Sentinel Tower is a small fraction of the financial and emotional cost of a single armed robbery or the cumulative losses from repeated theft and vandalism." }
];

export default function GasAndConvenience() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059821/gas_station_itrbka.jpg" alt="Gas station convenience store at dusk" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Gas & Convenience</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Your 24/7 Guardian <span className="text-[#cbe30b]">at the Pumps</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Protect your employees, customers, and profits with an always-on security presence that deters crime before it happens.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Secure Your Station</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">C-Store Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059857/gas_station_oasozh.jpg" alt="Gas pump at service station" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">High Traffic Means High Risk</h2>
              <p className="text-lg text-[#666666] mb-8">Convenience stores and gas stations are magnets for crimes of opportunity. Protecting your assets and people requires a proactive, not reactive, solution.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">More Than a Camera, It's a Guardian</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Invest in Safety, Secure Your Profits</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Stop losing money to theft and create a safe haven for your community. Get a quote for your station today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
