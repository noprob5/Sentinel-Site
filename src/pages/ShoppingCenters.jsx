
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Building, ShoppingBag, Bot, Eye } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "60%", label: "Decrease in Parking Lot Incidents", description: "Across all protected properties" },
  { number: "24/7", label: "Common Area & Walkway Safety", description: "Ensure shopper peace of mind" },
  { number: "100%", label: "Coverage of Entrances & Exits", description: "Monitor all traffic flow" },
  { number: "95%", label: "Deterrence of Loitering & Vandalism", description: "In public spaces and food courts" }
];

const challenges = [
  "Ensuring the safety and security of thousands of daily shoppers.",
  "Monitoring vast, multi-level parking structures and lots.",
  "Preventing vehicle break-ins and property damage.",
  "Deterring loitering, vandalism, and other nuisance crimes.",
  "Providing security for dozens of individual tenants and storefronts."
];

const benefits = [
  { icon: ShoppingBag, title: "A Safer Shopping Destination", description: "Make your center the preferred place to shop by creating a visibly safe and secure environment." },
  { icon: Eye, title: "Comprehensive Lot Monitoring", description: "Oversee entire parking areas to deter crime and capture clear evidence of any incidents." },
  { icon: Building, title: "Support Your Tenants", description: "Offer a powerful security umbrella that protects all your tenants' storefronts and assets." },
  { icon: Bot, title: "Efficient Security Operations", description: "Use intelligent alerts to dispatch your on-site security resources more effectively, responding to real events." }
];

const faqItems = [
    { question: "How can one system cover such a large and complex property?", answer: "We use a multi-tower approach. By strategically placing several Sentinel Towers, we create overlapping fields of view that provide comprehensive coverage over sprawling parking lots, multiple entrances, and the entire perimeter." },
    { question: "Can this help us manage traffic during peak holiday seasons?", answer: "While its primary function is security, the live video feeds can be an invaluable tool for your operations team to monitor traffic flow, identify bottlenecks, and manage parking more efficiently during busy periods." },
    { question: "Do our tenants have access to the system?", answer: "Typically, access to the main system is limited to property management and the central security team. However, we can provide incident reports and video clips to tenants as needed for their own reporting or investigations." },
    { question: "What's the benefit over a traditional security patrol service?", answer: "Constant vigilance. Our towers monitor everywhere, all at once, 24/7. They don't take breaks and they provide a perfect digital record, complementing your patrol service by acting as a powerful force multiplier." },
    { question: "Is this disruptive to install in a busy shopping center?", answer: "Installation is fast and minimally disruptive. A tower can be delivered and fully operational in about 15-20 minutes, often done during off-hours to avoid any impact on your shoppers or tenants." }
];

export default function ShoppingCenters() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059821/shopping_center_kuyc6l.jpg" alt="Modern shopping mall exterior" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Shopping Centers</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Create a Safer <span className="text-[#cbe30b]">Shopping Experience</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Protect your property, support your tenants, and give shoppers peace of mind with comprehensive security for your entire center.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Protect Your Center</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Center Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059858/shopping_center_uplt7d.jpg" alt="Shopping center parking lot aerial view" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Sprawling Properties Create Security Gaps</h2>
              <p className="text-lg text-[#666666] mb-8">Vast parking lots and multiple entrances make shopping centers vulnerable. A proactive, visible security solution is essential for peace of mind.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Benefits for Owners, Tenants, and Shoppers</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Become the Safest Destination to Shop</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Invest in the safety of your shoppers and tenants. Contact us today for a comprehensive security plan for your center.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
