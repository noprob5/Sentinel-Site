
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Siren, Bot, Eye, Radio } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stats = [
  { number: "<15", label: "Minutes to Deploy", description: "For immediate incident response" },
  { number: "24/7", label: "Incident Overwatch", description: "From a safe distance" },
  { number: "5G/SAT", label: "Reliable Connectivity", description: "From any disaster area" },
  { number: "1", label: "Central Command View", description: "Stream video to EOCs and command posts" }
];

const challenges = [
  "Establishing immediate situational awareness at a disaster scene.",
  "Monitoring unstable or hazardous environments without risking personnel.",
  "Setting up a reliable communications and video hub with no infrastructure.",
  "Managing public safety and monitoring crowds at evacuation points.",
  "Documenting incident response for after-action reviews."
];

const benefits = [
  { icon: Siren, title: "Instant Incident Command", description: "Rapidly deploy an 'eye in the sky' to give incident commanders immediate situational awareness." },
  { icon: Eye, title: "See Into a Hot Zone", description: "Safely monitor fires, floods, hazmat spills, and other dangerous scenes from a secure location." },
  { icon: Radio, title: "Mobile Comms Hub", description: "Establish a reliable video and communications link from disaster areas back to the Emergency Operations Center (EOC)." },
  { icon: Shield, title: "Public & Responder Safety", description: "Monitor crowd movements, traffic control points, and perimeters to ensure the safety of the public and first responders." }
];

const faqItems = [
    { question: "How fast can we get a tower on-site for a major incident?", answer: "We can deploy extremely quickly. Our rapid-response protocol means a tower can be on scene and operational in a matter of hours for declared emergencies, depending on location." },
    { question: "How does it hold up in disaster scenarios like hurricanes or floods?", answer: "The towers are built to be incredibly rugged and weather-resistant, able to withstand high winds and rain. Their autonomous nature makes them ideal for post-disaster environments where power and comms are down." },
    { question: "Can we stream video directly to our EOC?", answer: "Yes. We provide a secure video feed that can be easily integrated into the video management systems and displays in your Emergency Operations Center, giving decision-makers a real-time view of the field." },
    { question: "Is it difficult to operate for first responders?", answer: "No, the system is designed for simplicity. Once deployed, it operates largely automatically. Accessing the video feed is as simple as opening a web browser on a laptop or mobile device." },
    { question: "Can this be used for planned events like parades or marathons?", answer: "Absolutely. It's the perfect solution for pre-planned events, providing temporary, high-level overwatch for crowd management and public safety along routes and at key venues." }
];

export default function EmergencyManagement() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059820/emergency_management_wq0y02.jpg" alt="Emergency response vehicles" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Emergency Management</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">Clarity in the <span className="text-[#cbe30b]">Chaos</span></h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">Deploy rapidly for disaster response, command post oversight, and public safety monitoring during critical incidents.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Enhance Your Response</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Response by the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => <div key={stat.label} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div><div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div><div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div></div>)}
          </div>
        </div>
      </section>

      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div><img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754059855/emergency_management_j5eprk.jpg" alt="Emergency command center" className="w-full h-auto rounded-xl"/></div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Eye in the Sky During a Crisis</h2>
              <p className="text-lg text-[#666666] mb-8">When disaster strikes, rapid situational awareness is paramount. Deploy a mobile command and surveillance hub in minutes to manage any scene.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Your Deployable Command Asset</h2>
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
          <h2 className="text-3xl font-bold text-white mb-6">Be Ready for Anything</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">Equip your agency with a powerful tool for incident response and management. Contact us to learn about government and agency pricing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Contact")}>Get Agency Pricing <ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold"><Link to={createPageUrl("Sentinel1")}>Learn About The Tech</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
