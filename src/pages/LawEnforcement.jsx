
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Eye, Radio, Bot } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import NewCTASection from '../components/home/NewCTASection';

const stats = [
  { number: "5x", label: "Increase in Coverage Area", description: "Compared to a single squad car" },
  { number: "10 min", label: "Average Deployment Time", description: "For critical incident response" },
  { number: "24/7", label: "Monitoring of Crime Hotspots", description: "Without tying up sworn officers" },
  { number: "100%", label: "NDAA Compliant", description: "For secure evidence and grant funding" }
];

const challenges = [
  "Needing persistent surveillance of known crime hotspots.",
  "Gaining high-ground situational awareness during public events or incidents.",
  "Gathering clear, admissible video evidence for investigations.",
  "Covering large areas with limited manpower.",
  "Needing a rapidly deployable asset for evolving situations."
];

const benefits = [
  { icon: Eye, title: "Situational Awareness", description: "Gain a bird's-eye view of large areas to monitor crowd dynamics, traffic, and tactical situations in real time." },
  { icon: Shield, title: "Force Multiplier", description: "A single officer can monitor the area of five, freeing up personnel for community engagement and response." },
  { icon: Radio, title: "Mobile Command Post", description: "Deploy a powerful surveillance and communication hub for critical incidents, events, or investigations." },
  { icon: Bot, title: "Evidence Gathering", description: "Capture high-resolution video from an ideal vantage point to provide clear, indisputable evidence for prosecution." }
];

const faqItems = [
    { question: "How quickly can this be deployed for an active incident?", answer: "Extremely quickly. A trained officer can have a Sentinel Tower towed to a scene and fully operational—with cameras raised and recording—in less than 15 minutes." },
    { question: "Is the video feed secure enough for law enforcement use?", answer: "Yes. We use end-to-end encryption for all video streams, and our entire platform is built with security as the top priority. All equipment is also NDAA compliant." },
    { question: "Can we integrate this with our existing Real-Time Crime Center (RTCC)?", answer: "Yes, we can provide a video stream that can be integrated into most existing RTCC platforms and video management systems, allowing your team to view the feed alongside other department cameras." },
    { question: "How does it perform in dense urban environments?", answer: "The 30-foot mast provides a significant advantage, allowing cameras to see over ground-level obstructions. It's an excellent tool for monitoring intersections, public parks, and event venues." },
    { question: "Can we use this for covert operations?", answer: "While the tower is a visible deterrent, we offer options for more discreet deployments and can work with your department on specific tactical requirements." }
];

export default function LawEnforcement() {
  return (
    <div className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/3ecaa617-fd7c-4e76-f420-89df6a9aec00/public" 
            alt="Police patrol car on street" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider mb-4">Law Enforcement & Public Safety</p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Your Tactical <br/>Force Multiplier
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Enhance situational awareness, monitor public spaces, and respond smarter with rapidly deployable, intelligent mobile surveillance.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          >
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Request a Demo</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">A New Standard in Policing Tech</h2>
             <p className="text-lg text-gray-400">Deploy a smarter, more effective surveillance asset that enhances officer safety and operational efficiency.</p>
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
              The Challenge: <span className="text-gray-500">Modern Policing Demands Modern Tools</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Limited resources and expanding operational needs require technology that can do more with less. A static camera is not a strategy.
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
            <img src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/7b917ef8-3787-4c53-e178-fbd62b299100/public" alt="Police emergency lights" className="w-full h-auto shadow-2xl shadow-black/50"/>
          </div>
        </div>
      </section>
      
      {/* The Solution Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Solution: <span className="text-[#cbe30b]">An Eye in the Sky, On Demand</span>
            </h2>
            <p className="text-lg text-gray-400">
              Deploy a tactical surveillance and communications platform that extends your department's reach and capabilities.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Operational FAQ</h2>
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
