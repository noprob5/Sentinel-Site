
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Building2, Eye, Bot, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "85%", label: "Reduction in Break-Ins", description: "At protected development sites" },
  { number: "30min", label: "Setup Time", description: "From delivery to full operation" },
  { number: "100%", label: "Remote Access", description: "Monitor from anywhere, anytime" },
  { number: "$0", label: "Infrastructure Costs", description: "No trenching or permits required" }
];

const challenges = [
  "Securing multi-phase developments with changing perimeters.",
  "Protecting model homes and sales centers from vandalism.",
  "Monitoring large, open lots during construction phases.",
  "Providing liability protection for potential trespassers.",
  "Demonstrating commitment to safety for prospective buyers."
];

const benefits = [
  { icon: Shield, title: "Protect Your Investment", description: "Safeguard your development from costly delays and damage that can impact your bottom line." },
  { icon: Building2, title: "Enhance Property Value", description: "A secure development attracts better buyers and maintains property values throughout the sales process." },
  { icon: Eye, title: "Complete Site Coverage", description: "Monitor every phase of development with flexible positioning as your project evolves." },
  { icon: Bot, title: "Smart Monitoring", description: "AI-powered detection ensures you're only alerted to real threats, not false alarms." }
];

const faqItems = [
    { question: "Can the tower move with us as we develop different phases?", answer: "Absolutely. The trailer-based design allows you to easily relocate the tower as your development progresses, ensuring continuous protection where you need it most." },
    { question: "How does this help with insurance and liability concerns?", answer: "Having professional-grade surveillance demonstrates due diligence in protecting your property, which can positively impact insurance rates and provide clear evidence in case of any incidents." },
    { question: "Will this work during the pre-construction phase when there's no power?", answer: "Yes, our towers are completely solar-powered and require no external power source, making them perfect for raw land and early development phases." },
    { question: "Can we use this to monitor our model homes and sales center?", answer: "Definitely. The high-resolution cameras and remote access capabilities make it ideal for protecting high-value model homes and ensuring the safety of your sales staff and visitors." },
    { question: "How quickly can we get security coverage for a new development?", answer: "We can typically deploy within 24-48 hours of your request, providing immediate security coverage as soon as you break ground on a new project." }
];

export default function CommercialDevelopment() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059832/commercial_dev_lq2mix.jpg" alt="Commercial development site under construction" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Commercial Development Security</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Secure Your Vision, <span className="text-[#cbe30b]">Protect Your Progress</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">From raw land to ribbon cutting, safeguard your commercial development with intelligent, mobile surveillance that grows with your project.</p>
            </div>
            <div className="space-y-3">
              {[
                "Deploy anywhere without power or internet",
                "Move security as your development phases evolve", 
                "Protect model homes and sales centers",
                "Deter vandalism and unauthorized access"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#cbe30b] flex-shrink-0" />
                  <span className="text-[#e5e5e5]">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold">
                <Link to={createPageUrl("Contact")}>Get Quote</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img 
              src="https://res.cloudinary.com/dl71jvny5/image/upload/v1753154767/2_towers_transparent_vvuvgo.png"
              alt="Sentinel Tower"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Development Security by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] flex flex-col justify-center">
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
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059868/commercial_dev_qs4qn0.jpg" alt="Blueprint and hardhat on a table at a construction site" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Project's Success Depends on Security</h2>
              <p className="text-lg text-[#666666] mb-8">From groundbreaking to grand opening, every phase of development presents unique security risks that can impact timelines and budgets.</p>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#cbe30b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#e5e5e5]">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Security That Evolves With Your Project</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center space-y-4">
                  <div className="p-4 rounded-full bg-[#cbe30b]/20 w-max mx-auto">
                    <Icon className="w-8 h-8 text-[#cbe30b]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#333333]">
                <AccordionTrigger className="text-white text-lg hover:text-[#cbe30b] text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#666666] text-base">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Build With Confidence</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Protect your development investment from day one. Get comprehensive security that adapts to your timeline and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Get Your Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold">
              <Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
