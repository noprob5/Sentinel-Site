
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Zap, Bot, TowerControl } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import NewCTASection from '../components/home/NewCTASection';

const stats = [
  { number: "100%", label: "Autonomous Operation", description: "At sites with no power or comms" },
  { number: "99.9%", label: "Detection Accuracy", description: "AI-verified human & vehicle threats" },
  { number: "365", label: "Days a Year Protection", description: "Unblinking, automated vigilance" },
  { number: "Full", label: "NDAA Compliance", description: "For federal security requirements" }
];

const challenges = [
  "Protecting high-consequence assets like data centers and water treatment plants.",
  "Meeting strict federal and state security compliance mandates (NERC-CIP, etc.).",
  "Preventing physical intrusion that could lead to widespread disruption.",
  "Securing vast perimeters against sophisticated threats.",
  "Needing a reliable security solution that operates without fail."
];

const benefits = [
  { icon: Shield, title: "Harden Your Defenses", description: "Proactively deter and detect threats to your most vital assets before an incident occurs." },
  { icon: TowerControl, title: "Centralized Remote Oversight", description: "Monitor multiple high-security sites from a single command center with real-time video and alerts." },
  { icon: Bot, title: "Automate and Comply", description: "Leverage AI-driven surveillance and detailed digital logs to meet and exceed regulatory requirements." },
  { icon: Zap, title: "Ensure Service Continuity", description: "Prevent service disruptions caused by vandalism, sabotage, or theft at your critical facilities." }
];

const faqItems = [
    { question: "What types of critical infrastructure do you protect?", answer: "We provide solutions for a wide range, including electrical substations, data centers, water/wastewater facilities, communications towers, and transportation hubs. The system is adaptable to any high-security environment." },
    { question: "How does the system help with compliance standards?", answer: "The system provides persistent electronic surveillance of your security perimeter, automated logging of all access events, and verifiable threat detection. Our equipment is NDAA compliant for government use." },
    { question: "Can the system withstand extreme weather conditions?", answer: "Yes. Our towers are engineered to operate reliably in high winds, heavy rain, snow, and extreme temperatures, ensuring continuous security for your critical assets no matter the weather." },
    { question: "What happens if there's a network outage?", answer: "The tower continues to record all video locally to on-board storage. Once connectivity is restored, it automatically uploads the stored footage. With dual-carrier cellular and satellite options, a complete outage is extremely rare." },
    { question: "Can this system detect drones or other aerial threats?", answer: "While our standard package is focused on ground-based threats, we can integrate specialized radar and RF detection equipment to identify and track unauthorized UAS (drone) activity near your facility." }
];

export default function CriticalInfrastructure() {
  return (
    <div className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059820/critical_infrastructure_z8kslq.jpg" 
            alt="Industrial water treatment facility" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider mb-4">Critical Infrastructure Protection</p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Uncompromising Protection <br/>for Essential Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Safeguard the nation's most vital assets with compliant, autonomous surveillance designed for zero-failure environments.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          >
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Get a Security Assessment</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Security for a Resilient Nation</h2>
            <p className="text-lg text-gray-400">Our systems are engineered for the highest stakes, where failure is not an option.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-gradient-to-br from-gray-900/80 to-black/50 p-6 border border-[#333333] hover:border-[#cbe30b]/50 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#cbe30b] mb-2">{stat.number}</div>
                <div className="text-base sm:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div>
                <div className="text-sm text-gray-400 leading-tight">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 sm:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pr-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Challenge: <span className="text-gray-500">Autonomous Defense for Vital Assets</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our nation's most vital resources require the highest level of protection. Sentinel Towers provides a vigilant, autonomous layer of defense against all threats.
            </p>
            <div className="space-y-4 text-gray-300 text-lg">
              {challenges.map((challenge) => (
                <p key={challenge} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 mr-3 flex-shrink-0" />
                  <span>{challenge}</span>
                </p>
              ))}
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059855/critical_infrastructure_xliogv.jpg" alt="Water dam infrastructure" className="w-full h-auto shadow-2xl shadow-black/50"/>
          </div>
        </div>
      </section>
      
      {/* The Solution Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Solution: <span className="text-[#cbe30b]">A Multi-Layered Defense Platform</span>
            </h2>
            <p className="text-lg text-gray-400">
              Go beyond simple monitoring with a system designed for active defense and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-gradient-to-br from-gray-900/80 to-black/50 p-8 border border-[#333333] hover:border-[#cbe30b]/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-[#cbe30b] mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Compliance and Security FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#333333]">
                <AccordionTrigger className="text-white text-lg text-left font-semibold hover:text-[#cbe30b] py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <NewCTASection />
    </div>
  );
}
