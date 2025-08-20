
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Flag, Eye, Radio, Server, Wifi } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import NewCTASection from '../components/home/NewCTASection';

const missionApplications = [
  {
    icon: Shield,
    title: "Force Protection & Base Security",
    description: "Establish a persistent surveillance perimeter around FOBs, ECPs, and high-value assets. Our AI-driven threat detection identifies and tracks personnel and vehicles, providing early warnings to security forces."
  },
  {
    icon: Eye,
    title: "Tactical ISR",
    description: "Rapidly deploy an 'eye in the sky' for route clearance, overwatch, and pre-assault reconnaissance. Provide ground commanders with real-time video feeds to make faster, more informed decisions."
  },
  {
    icon: Server,
    title: "Expeditionary Operations",
    description: "Operate independently of base infrastructure. Our platforms provide their own power and communications, making them ideal for austere environments and temporary encampments."
  },
  {
    icon: Wifi,
    title: "C5ISR Integration",
    description: "Extend your tactical network. Our platforms serve as mobile communications nodes, relaying data and integrating seamlessly with existing C5ISR systems like ATAK and VMS platforms."
  }
];

const faqItems = [
    { question: "Is your equipment approved for purchase by the U.S. Government?", answer: "Yes. All components of the Sentinel Tower are TAA (Trade Agreements Act) and NDAA Section 889 compliant, making them fully eligible for GSA and other federal procurement vehicles." },
    { question: "How rugged is the system for field deployment?", answer: "The system is battle-tested. It's built with industrial-grade steel and components designed to withstand extreme temperatures, high winds, and the rigors of transportation and tactical deployment." },
    { question: "Can the video be streamed to a TOC or JOC?", answer: "Yes, we provide secure, encrypted video feeds (including RTSP streams) that can be integrated with ATAK, VMS platforms, and command and control (C2) systems used in a Tactical Operations Center." },
    { question: "What are the power options in a prolonged cloudy environment?", answer: "The tower features an oversized solar array and a high-capacity battery bank for over 20 days of autonomy. For extended missions or high-power payloads, it can also be powered by shore power or a tactical generator." },
    { question: "Can this be used for range safety and monitoring?", answer: "Absolutely. It's an ideal solution for monitoring range perimeters, ensuring personnel are clear of impact areas, and recording training exercises for after-action reviews." }
];

export default function MilitaryAndDefense() {
  return (
    <div className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dl71jvny5/image/upload/v1755233702/military_hero_uxf8zh.png" 
            alt="Military base perimeter" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider mb-4">Military & Defense</p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Actionable Intelligence. <br/>Decisive Advantage.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Our battle-tested mobile platforms deliver mission-critical ISR and force protection for the modern warfighter, anywhere on the globe.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          >
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Get Government Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:pr-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Challenge: <span className="text-gray-500">Information Gaps in Complex Environments</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              In today's asymmetric battlefield, warfighters need persistent surveillance and reliable communications in areas where infrastructure is degraded or non-existent. Traditional fixed towers lack mobility, and manned patrols increase risk to personnel.
            </p>
            <div className="space-y-4 text-gray-300 text-lg">
                <p className="flex items-start"><CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 mr-3 flex-shrink-0" /> Securing sprawling perimeters and temporary encampments.</p>
                <p className="flex items-start"><CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 mr-3 flex-shrink-0" /> Gaining ISR in communications-denied environments.</p>
                <p className="flex items-start"><CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 mr-3 flex-shrink-0" /> Reducing risk to warfighters during overwatch missions.</p>
            </div>
          </div>
          <div>
            <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059855/military_ejny0h.jpg" alt="Soldiers in formation" className="w-full h-auto shadow-2xl shadow-black/50"/>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 sm:py-24 bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    The Solution: <span className="text-[#cbe30b]">Mobile, Autonomous C5ISR Platforms</span>
                  </h2>
                  <p className="text-lg text-gray-400">
                    Sentinel Towers provides a rugged, rapidly deployable solution that integrates power, communications, and surveillance into a single, mobile asset.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {missionApplications.map((app) => {
                      const Icon = app.icon;
                      return (
                          <div key={app.title} className="bg-gradient-to-br from-gray-900/80 to-black/50 p-8 border border-[#333333] hover:border-[#cbe30b]/50 transition-all duration-300">
                              <Icon className="w-10 h-10 text-[#cbe30b] mb-6" />
                              <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                              <p className="text-gray-400 leading-relaxed">{app.description}</p>
                          </div>
                      );
                  })}
              </div>
          </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Procurement & Deployment FAQ</h2>
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
