import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Eye, DollarSign, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import NewCTASection from '../components/home/NewCTASection';

const stats = [
  { number: "75%", label: "Reduction in Security Costs", description: "Compared to traditional guard services" },
  { number: "24/7", label: "Autonomous Operation", description: "No human supervision required" },
  { number: "95%", label: "Crime Deterrence Rate", description: "Verified through customer deployments" },
  { number: "15min", label: "Deployment Time", description: "From arrival to full operation" }
];

const challenges = [
  "Rising costs of traditional security guard services.",
  "Difficulty securing large perimeters with limited personnel.",
  "Need for 24/7 monitoring without the overhead of full-time staff.",
  "Requirement for reliable evidence collection for insurance claims.",
  "Liability concerns from inadequate security coverage."
];

const benefits = [
  { icon: DollarSign, title: "Proven ROI", description: "Reduce security costs by up to 75% compared to traditional guard services while improving coverage and reliability." },
  { icon: Eye, title: "Comprehensive Coverage", description: "Monitor large areas with fewer assets. One tower provides the coverage equivalent of multiple guard stations." },
  { icon: Shield, title: "Active Deterrence", description: "Prevent incidents before they happen with visible presence, strobes, and automated audio warnings." },
  { icon: Clock, title: "Always On Duty", description: "Never worry about no-shows, breaks, or shift changes. Your security is operational 24/7/365." }
];

const faqItems = [
    { question: "How does the cost compare to hiring security guards?", answer: "Our mobile surveillance typically costs 60-75% less than equivalent guard coverage. You eliminate hourly wages, benefits, training costs, and liability issues while getting superior coverage and documentation." },
    { question: "Can this system work in areas without power or internet?", answer: "Yes, that's exactly what it's designed for. Each tower is completely self-sufficient with solar power, battery backup, and cellular connectivity. No infrastructure required." },
    { question: "What happens if someone tries to tamper with or damage the tower?", answer: "The system has multiple tamper detection features including vibration sensors, tilt detection, and continuous self-monitoring. Any interference triggers immediate alerts and is recorded in high definition." },
    { question: "How quickly can you deploy a tower to my site?", answer: "We can typically deploy within 24-48 hours of your call. The tower itself can be operational within 15 minutes of arrival on-site." },
    { question: "Do you provide the monitoring service or do I need my own security team?", answer: "We offer flexible options. You can receive alerts directly and monitor through our platform, or we can provide professional monitoring services with trained security personnel responding to alerts." }
];

export default function PrivateSecurity() {
  return (
    <div className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/cb38c2db-c67c-4a9e-2926-fbcd3005e500/public" 
            alt="Private security surveillance" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider mb-4">Private Security</p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Smarter Security. <br/>Proven <span className="text-[#cbe30b]">ROI</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Replace expensive guard services with autonomous surveillance that works around the clock, delivering superior security at a fraction of the cost.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          >
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Calculate Your ROI</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Numbers Don't Lie</h2>
            <p className="text-lg text-gray-400">Measurable results that improve your bottom line while enhancing security.</p>
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
              The Challenge: <span className="text-gray-500">Rising Security Costs, Declining Reliability</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Traditional security is becoming more expensive and less reliable. Guard services are costly, inconsistent, and create liability concerns while providing limited coverage.
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
            <img src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/33d85a3e-4e88-4481-ab4f-56dddb80ab00/public" alt="Security guard patrol" className="w-full h-auto shadow-2xl shadow-black/50"/>
          </div>
        </div>
      </section>
      
      {/* The Solution Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Solution: <span className="text-[#cbe30b]">Autonomous, Always-On Security</span>
            </h2>
            <p className="text-lg text-gray-400">
              Deploy intelligent surveillance that works 24/7, costs less than traditional security, and provides better results.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
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