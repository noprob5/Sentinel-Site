
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Zap, Eye, Bot, TowerControl } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "100%", label: "NDAA Compliant", description: "Meets federal security requirements" },
  { number: "99%", label: "Uptime Guarantee", description: "With solar power and satellite link" },
  { number: "10-mile", label: "Detection Range", description: "For key remote assets" },
  { number: "Zero", label: "Infrastructure Needed", description: "Deploy at any remote substation" }
];

const challenges = [
  "Protecting remote, unmanned substations from sabotage and theft.",
  "Meeting strict federal and state compliance standards.",
  "Monitoring miles of perimeter fence lines effectively.",
  "Deterring copper theft that can cause widespread outages.",
  "Lacking reliable power and connectivity at critical sites."
];

const benefits = [
  { icon: Shield, title: "Critical Infrastructure Defense", description: "Protect against threats to the grid with a system designed for high-security environments." },
  { icon: TowerControl, title: "Remote Asset Monitoring", description: "Maintain 24/7 watch over substations, transfer stations, and power plants from a central location." },
  { icon: Zap, title: "Ensure Grid Reliability", description: "Prevent outages caused by vandalism or copper theft by deterring intruders before they can act." },
  { icon: Bot, title: "Intelligent Monitoring", description: "Use intelligent surveillance and detailed logging to help meet security compliance requirements." }
];

const faqItems = [
    { question: "Is this solution compliant for substation monitoring?", answer: "Yes, our systems are designed to help meet stringent physical security and monitoring requirements for utility infrastructure protection." },
    { question: "How does it function in a location with no power or internet?", answer: "The Sentinel Tower is completely autonomous. It runs on solar power with a long-duration battery backup and communicates via cellular or an optional satellite uplink, making it perfect for remote substations." },
    { question: "Can it detect someone tampering with a perimeter fence?", answer: "Yes. When paired with fence sensors or video analytics, the system can detect vibrations or movement along a fence line and immediately turn a camera to view and record the event, triggering an alert." },
    { question: "What is the primary benefit over traditional fixed cameras?", answer: "Rapid deployment, zero infrastructure reliance, and integrated deterrence. A Sentinel Tower can be deployed in minutes to address a new threat, moved as needed, and includes powerful deterrents like lights and audio, which fixed cameras lack." },
    { question: "Can you provide reporting for auditing and compliance purposes?", answer: "Yes, the system maintains a detailed, time-stamped log of all events, alerts, and system status changes, which can be exported for compliance reporting and auditing." }
];

export default function EnergyAndUtilities() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059827/energy_ia8dxm.jpg" alt="Power transmission lines" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Energy & Utilities</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Protecting the <span className="text-[#cbe30b]">Nation's Grid</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Secure remote substations and critical infrastructure with autonomous, compliant surveillance designed for zero-failure reliability.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Secure Your Infrastructure</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Utilities Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059863/energy_zb6lsg.jpg" alt="Electrical substation at sunset" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Remote Sites Face Critical Threats</h2>
              <p className="text-lg text-[#666666] mb-8">Unmanned and isolated, energy infrastructure is highly vulnerable to theft and sabotage that can impact thousands of people. Comprehensive security is essential.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">A Compliant, Autonomous Solution</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Ensure Uninterrupted Service</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Protect your assets, ensure compliance, and maintain grid stability with a proven security partner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
