
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Ticket, Users, Bot, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "15min", label: "Setup Time", description: "From arrival to full surveillance coverage" },
  { number: "5 acres", label: "Coverage Per Tower", description: "Ideal for parking lots and perimeters" },
  { number: "100%", label: "Self-Sufficient", description: "Solar and battery powered, no generators" },
  { number: "24/7", label: "Remote Viewing", description: "For event command centers" }
];

const challenges = [
  "Securing temporary venues, parking lots, and entry points.",
  "Managing crowd flow and identifying potential disruptions.",
  "Protecting equipment, vendor assets, and back-of-house areas.",
  "Needing a flexible security solution that can be deployed anywhere.",
  "Lacking power or internet infrastructure in open fields or remote venues."
];

const benefits = [
  { icon: Zap, title: "Deploy Anywhere", description: "Our towers are fully autonomous, perfect for festivals, concerts, and temporary events with no power infrastructure." },
  { icon: Shield, title: "Asset & Perimeter Control", description: "Monitor your entire event perimeter, parking areas, and restricted zones from a single command post." },
  { icon: Users, title: "Crowd Management", description: "Gain situational awareness over large crowds to identify issues and deploy resources more effectively." },
  { icon: Bot, title: "Real-Time Intelligence", description: "Use live video and AI-powered alerts to respond to incidents as they happen, not after the fact." }
];

const faqItems = [
    { question: "How far in advance do we need to book for an event?", answer: "We recommend booking at least 2-4 weeks in advance to ensure availability, especially during peak event season. However, we can often accommodate last-minute requests." },
    { question: "Can the tower's announcements be customized for our event?", answer: "Yes. We can program custom audio messages, such as parking information, gate opening times, or general security announcements, in addition to live security talk-downs." },
    { question: "Does it work well at night for overnight festivals?", answer: "Absolutely. The cameras provide crystal-clear footage even in complete darkness, making them perfect for monitoring campsites, parking lots, and festival grounds 24/7." },
    { question: "Can we have the live feed in our event's command center?", answer: "Yes, we provide secure access to the live camera feeds via a web app, which can be displayed on monitors in your on-site command post for your security team to view." },
    { question: "What if our event is in a field with bad cell service?", answer: "We offer satellite connectivity options to ensure our towers remain fully operational and connected even in the most remote locations with poor or non-existent cellular coverage." }
];

export default function EntertainmentAndEvents() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059829/Entertainment_htnxj4.jpg" alt="Outdoor concert with crowd" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Event Security</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Secure Your Event, <span className="text-[#cbe30b]">Anytime, Anywhere</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">From festivals to fairs, deploy robust, temporary surveillance in minutes for comprehensive crowd and asset protection.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Event Quote</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Event Security by the Numbers</h2>
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
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059865/entertainment_whunvn.jpg" alt="Festival stage setup" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Temporary Venues Have Permanent Risks</h2>
              <p className="text-lg text-[#666666] mb-8">Large crowds, valuable equipment, and sprawling, open areas make event security a complex challenge. You need a solution that's as flexible as your event.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">A Command Center on Wheels</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Make Your Next Event Your Most Secure</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Focus on creating an amazing experience for your guests, and let us handle the security. Contact us for a custom event quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
