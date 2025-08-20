
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Building, Bot, Eye, BarChart } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import NewCTASection from '../components/home/NewCTASection';

const stats = [
  { number: "75%", label: "Reduction in Incidents", description: "At client sites after 90 days" },
  { number: "15 min", label: "Deployment Time", description: "For immediate asset protection" },
  { number: "10x", label: "More Area Covered", description: "Than a traditional security guard" },
  { number: "$2.5K+", label: "Monthly ROI", description: "Per tower vs. guard costs" }
];

const challenges = [
  "High cost and unreliability of traditional guard services.",
  "Protecting large, open areas like construction sites or storage yards.",
  "Preventing theft of high-value assets like copper, fuel, and equipment.",
  "Lack of actionable video evidence for prosecution.",
  "Needing a visible deterrent to proactively stop crime."
];

const benefits = [
  { icon: BarChart, title: "Drastic Cost Reduction", description: "Replace expensive, unreliable guard services with a cost-effective technology solution that provides a clear return on investment." },
  { icon: Shield, title: "Proactive Deterrence", description: "A highly visible, 30-foot tower with flashing lights and audible alarms stops criminals before they act." },
  { icon: Building, title: "Total Site Awareness", description: "Monitor your entire property—from the fence line to the rooftops—from any device, anywhere in the world." },
  { icon: Eye, title: "Actionable Evidence", description: "Capture crystal-clear video evidence that leads to arrests and convictions, ending the cycle of repeat offenses." }
];

const faqItems = [
    { question: "Is this more effective than a security guard?", answer: "Yes. The Sentinel Tower provides a 30-foot high vantage point, never sleeps, can see in complete darkness with thermal imaging, and monitors your entire property simultaneously. It's a massive force multiplier and a more reliable deterrent." },
    { question: "How does the system handle false alarms from animals or weather?", answer: "Our system uses advanced AI to differentiate between humans, vehicles, and other motion. This dramatically reduces false alarms, ensuring that you are only alerted to genuine threats." },
    { question: "What happens if the internet or power goes out on site?", answer: "The tower is completely autonomous. It runs on solar and battery power and records all footage locally. If the cellular connection is lost, it will upload the footage as soon as service is restored. It never stops watching." },
    { question: "Can I view the cameras from my phone?", answer: "Yes. You can access live video feeds, review recorded events, and receive alerts directly on your smartphone, tablet, or computer through our secure cloud-based platform." },
    { question: "How difficult is it to set up?", answer: "It's incredibly simple. The tower can be towed to your site and deployed by a single person in under 15 minutes. No special technical skills are required." }
];

export default function PrivateSecurity() {
  return (
    <div className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754954268/critical_infrastructure_mn07p6.png" 
            alt="Construction site at dusk" 
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
            Security That <br/>Pays for Itself
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Stop losing money to theft, vandalism, and unreliable guards. Our autonomous surveillance towers provide a proven ROI by proactively securing your assets 24/7.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center"
          >
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Get a Free Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Smarter Security Investment</h2>
            <p className="text-lg text-gray-400">The numbers don't lie. Sentinel Towers delivers results that directly impact your bottom line.</p>
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
              The Challenge: <span className="text-gray-500">Stop Reacting. Start Preventing.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Your business is likely facing one of these costly challenges. Our solution is designed to solve them all.
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
            <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1753154767/2_towers_transparent_vvuvgo.png" alt="Two Sentinel Towers" className="w-full h-auto"/>
          </div>
        </div>
      </section>
      
      {/* The Solution Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Solution: <span className="text-[#cbe30b]">A Platform for Profitability</span>
            </h2>
            <p className="text-lg text-gray-400">
              Sentinel Towers isn't a security expense; it's a business tool designed to protect your profits.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Your Questions, Answered</h2>
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
