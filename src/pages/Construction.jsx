
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, CheckCircle, Shield, Eye, Clock, DollarSign, Speaker, Camera, RadioTower, Zap, Bot, FileText, Truck, Move } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { number: "98%", label: "Theft Reduction", description: "On protected sites" },
  { number: "24/7", label: "Site Monitoring", description: "Continuous coverage" },
  { number: "15min", label: "Quick Deployment", description: "From arrival to operation" },
  { number: "$0", label: "Setup Costs", description: "No permits or infrastructure" }
];

const challenges = [
  "High-value equipment and material theft costing millions annually",
  "Vandalism and unauthorized access during off-hours",
  "Worker safety compliance and project liability concerns",
  "Remote job sites lacking power and internet infrastructure",
  "Needing indisputable video evidence for insurance and legal cases"
];

const features = [
    {
        icon: Speaker,
        title: "Live Audio Deterrent",
        description: "Powerful loudspeakers enable remote security agents to communicate directly with intruders, providing immediate verbal warnings to stop criminal activity before it escalates."
    },
    {
        icon: Camera,
        title: "High-Resolution Cameras",
        description: "Advanced 4K cameras capture crystal-clear footage day and night, providing the detailed visual evidence you need for investigations and insurance claims."
    },
    {
        icon: RadioTower,
        title: "Reliable Connectivity",
        description: "Stay connected from any job site with dual-carrier cellular and optional satellite uplink, ensuring your security system never goes offline."
    }
];

const benefits = [
  {
    icon: Shield,
    title: "Instant Protection",
    description: "Deploy security coverage within minutes of arrival. No waiting for permits, trenching, or electrical work."
  },
  {
    icon: Eye,
    title: "Complete Visibility",
    description: "Monitor every corner of your site with 360-degree coverage and remote access to live feeds from any device."
  },
  {
    icon: Zap,
    title: "Zero Downtime",
    description: "Solar-powered operation with extended battery backup ensures continuous protection even during extended cloudy periods."
  },
  {
    icon: Bot,
    title: "Intelligent Alerts",
    description: "Our AI-powered system provides 24/7 surveillance and sends real-time alerts for verified threats directly to you."
  }
];

const howItWorksSteps = [
    {
        icon: FileText,
        title: "1. Security Plan",
        description: "We work with you to understand your site's vulnerabilities and develop a custom surveillance plan."
    },
    {
        icon: Truck,
        title: "2. Rapid Deployment",
        description: "A Sentinel Tower is delivered and becomes fully operational in under 15 minutes. No power or internet hookup needed."
    },
    {
        icon: Bot,
        title: "3. AI Monitoring",
        description: "Our system actively monitors your site 24/7, using AI to detect, verify, and alert you to any real threats."
    },
    {
        icon: Move,
        title: "4. Easy Relocation",
        description: "As your project evolves, the tower can be easily moved to new locations on-site or to the next job."
    }
];

const faqItems = [
    {
        question: "How quickly can a tower be deployed to our job site?",
        answer: "A Sentinel Tower can be delivered and fully operational in as little as 15 minutes upon arrival, requiring no special equipment or site preparation."
    },
    {
        question: "What happens if there's no sun to charge the solar panels?",
        answer: "Our towers are equipped with a high-capacity battery system that can run autonomously for over 12 days with zero sun, ensuring uninterrupted security."
    },
    {
        question: "How does the AI reduce false alarms?",
        answer: "The AI is trained to differentiate between humans/vehicles and other motion like animals or wind-blown debris. Alerts are only triggered for genuine potential threats, which are then verified by our remote monitoring agents."
    },
    {
        question: "Can we access the camera feeds ourselves?",
        answer: "Yes, you have 24/7 access to a live feed of all cameras through our secure mobile and web app, allowing you to check on your site anytime, from anywhere."
    },
    {
        question: "What areas can a single tower cover?",
        answer: "Each Sentinel Tower can effectively monitor up to 5 acres with optimal camera positioning. For larger sites, we recommend multiple towers for complete coverage."
    },
    {
        question: "Are the towers weatherproof?",
        answer: "Absolutely. Our towers are built to withstand extreme weather conditions including high winds, rain, snow, and temperature fluctuations, ensuring reliable operation year-round."
    },
    {
        question: "How do we receive alerts when something happens?",
        answer: "You'll receive instant notifications via phone, email, or text message. Our AI system contacts you directly for any verified security incidents."
    },
    {
        question: "Can the towers be moved between different job sites?",
        answer: "Yes, the towers are designed for easy relocation. They can be quickly disconnected, transported, and redeployed to new sites as your projects progress."
    },
    {
        question: "Do we need permits for the security towers?",
        answer: "In most cases, no permits are required for temporary mobile surveillance towers. However, we can assist with any local compliance requirements if needed."
    },
    {
        question: "What's the range of the camera zoom capabilities?",
        answer: "Our cameras feature powerful optical zoom that can clearly identify license plates and faces from hundreds of feet away, providing detailed evidence when needed."
    },
    {
        question: "How does the system work in areas with poor cell coverage?",
        answer: "We offer satellite connectivity options for remote locations with limited cellular coverage, ensuring your security system remains connected regardless of location."
    }
];

export default function Construction() {
  return (
    <div className="bg-[#0d0d0d]">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Construction site"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider">Construction Security</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Secure Your Jobsite <span className="text-[#cbe30b]">Day & Night</span>
              </h1>
              <p className="text-xl text-[#e5e5e5] leading-relaxed">
                Stop equipment theft, reduce liability, and protect your investment with Sentinel Towers'
                rapid-deploy mobile surveillance solution designed specifically for construction sites.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Deploy anywhere in 15 minutes - no permits required",
                "100% solar-powered with extended battery backup",
                "AI-powered alerts for real threats only",
                "Weather-resistant design for year-round operation"
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

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Construction Security by the Numbers</h2>
            <p className="text-lg text-[#666666]">Real results from construction sites across America</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-[#0d0d0d]/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#333333] min-h-[160px] sm:min-h-[140px] flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#cbe30b] mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 leading-tight">{stat.label}</div>
                <div className="text-xs sm:text-sm text-[#666666] leading-tight">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="pt-8 lg:pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
              alt="Construction site challenges"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Construction Sites Face Unique Security Challenges</h2>
              <p className="text-lg text-[#666666] mb-8">
                From remote locations to valuable equipment, construction sites are prime targets for criminal activity.
                Traditional security solutions fall short in these demanding environments.
              </p>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#cbe30b] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[#e5e5e5]">{challenge}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 font-semibold">
              <Link to={createPageUrl("Contact")}>
                Solve Your Security Challenges
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Features Designed for Construction Sites</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Every component is engineered for rugged reliability and autonomous operation in demanding construction environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return(
                <div key={index} className="bg-[#0d0d0d] p-8 rounded-xl border border-[#333333] hover:border-[#cbe30b]/50 transition-colors">
                  <div className="p-3 rounded-lg bg-[#cbe30b]/20 w-max mb-4">
                    <Icon className="w-8 h-8 text-[#cbe30b]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Construction Companies Choose Sentinel</h2>
            <p className="text-lg text-[#666666]">Comprehensive security solutions built for the construction industry</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center space-y-4">
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

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple Process, Powerful Results</h2>
            <p className="text-lg text-[#666666]">Securing your job site is easier than you think.</p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#333333] -translate-y-1/2 hidden md:block" aria-hidden="true"></div>
            <div className="relative grid md:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center p-6 bg-[#1a1a1a] rounded-xl border border-[#333333] relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#cbe30b]/20 mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#cbe30b]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-[#666666]">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-[#666666] mt-4">Get answers to common questions about construction site security</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#333333]">
                <AccordionTrigger className="text-white text-lg hover:text-[#cbe30b] text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-[#666666] text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Construction Site?</h2>
          <p className="text-xl text-[#666666] mb-8 max-w-2xl mx-auto">
            Join hundreds of contractors who trust Sentinel Towers to protect their equipment,
            reduce liability, and ensure project success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>
                Get Your Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-semibold">
              <Link to={createPageUrl("Sentinel1")}>Learn About Sentinel 1</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
