
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Shield, Users, CheckCircle, ArrowRight, Handshake, Cpu, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const partnershipBenefits = [
  {
    icon: DollarSign,
    title: "Own Your Fleet, Own Your Future",
    description: "Unlike competitors who only lease, we empower you to purchase and own your assets, building equity and a scalable business."
  },
  {
    icon: TrendingUp,
    title: "High-Margin Recurring Revenue",
    description: "Establish predictable, long-term income streams through monthly service contracts with high-value commercial clients."
  },
  {
    icon: Handshake,
    title: "Comprehensive Partner Support",
    description: "From technical training and sales enablement to marketing materials, we provide the resources you need to succeed."
  },
  {
    icon: Cpu,
    title: "Technology-First Platform",
    description: "Leverage our battle-tested, NDAA-compliant hardware. We also support integration with your preferred VMS or sensor technology."
  }
];

const partnershipTypes = [
  {
    title: "Fleet Purchase Program",
    description: "For entrepreneurs ready to build and scale their own mobile surveillance operation.",
    features: [
      "Volume discounts on tower purchases",
      "Full ownership of all equipment",
      "Keep 100% of your service revenue",
      "Protected territories available",
      "Comprehensive operational training"
    ],
    cta: "Learn More About Purchasing"
  },
  {
    title: "Revenue Share Program",
    description: "For established security companies looking to expand their service offerings.",
    features: [
      "No upfront equipment costs",
      "Leverage our existing tower fleet",
      "Generous recurring revenue split",
      "Access to joint sales opportunities",
      "Full maintenance and support included"
    ],
    cta: "Explore Revenue Sharing"
  }
];

const stats = [
  { number: "$500K+", label: "Annual Revenue Potential", description: "Per 10-tower fleet operation" },
  { number: "95%", label: "Client Retention Rate", description: "Long-term contracts drive stability" },
  { number: "30%", label: "Typical Gross Margins", description: "Industry-leading profitability" },
  { number: "24/7", label: "Partner Support", description: "We're invested in your success" }
];

// Helper function to map partnership type title to form value
const getPartnershipTypeValue = (title) => {
  switch (title) {
    case "Fleet Purchase Program":
      return "purchase";
    case "Revenue Share Program":
      return "revenue-share";
    default:
      return ""; 
  }
};

export default function Partnership() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form); // Collects form data based on 'name' attributes

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data, // Send FormData object directly
            headers: { 'Accept': 'application/json' } // Formspree requires this
        });
        if (response.ok) {
            setIsSubmitted(true);
        } else {
            // For more detailed error, could parse response.json()
            alert("Submission failed. Please try again later.");
        }
    } catch (error) {
        // Handle network errors
        alert("An error occurred. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-48 lg:py-64">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754954268/critical_infrastructure_mn07p6.png"
            alt="Business partners discussing strategy"
            className="w-full h-full object-cover opacity-40 object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-[#cbe30b] font-semibold text-lg uppercase tracking-wider mb-4">Partnership Opportunities</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Build Your <br/><span className="text-[#cbe30b]">Security Empire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mt-8 max-w-2xl mx-auto"
          >
            Join the mobile surveillance revolution. We offer the unique opportunity to own your fleet and build lasting wealth in the rapidly growing security market.
          </motion.p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown className="w-8 h-8 text-white/50" />
            </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Partnership by the Numbers</h2>
            <p className="text-lg text-gray-400">Our partners are building profitable, scalable security businesses across the country.</p>
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

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Sentinel Partnership <span className="text-[#cbe30b]">Advantage</span>
            </h2>
            <p className="text-lg text-gray-400">
              We're not just another supplier—we're a strategic partner invested in your long-term success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit) => {
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

      {/* Partnership Types */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your Path to <span className="text-[#cbe30b]">Success</span>
            </h2>
            <p className="text-lg text-gray-400">
              Two proven models designed to build your mobile security business.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {partnershipTypes.map((type) => (
              <Card key={type.title} className="bg-gradient-to-br from-gray-900/80 to-black/50 border border-[#333333] rounded-2xl flex flex-col p-8 shadow-lg">
                <CardHeader className="p-0">
                  <CardTitle className="text-3xl font-bold text-white mb-3">{type.title}</CardTitle>
                  <p className="text-lg text-gray-400">{type.description}</p>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col justify-between mt-8">
                  <ul className="space-y-4 mb-8">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-6 h-6 text-[#cbe30b] mr-3 flex-shrink-0" />
                        <span className="text-lg text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#partnership-form"
                    onClick={() => {
                      const selectedType = getPartnershipTypeValue(type.title);
                      handleInputChange('partnershipType', selectedType);
                    }}
                  >
                    <Button className="w-full bg-[#cbe30b] text-black hover:bg-[#a8bf0a] font-bold text-lg py-6">
                      {type.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="partnership-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#050505] scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Become a Sentinel Partner</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Take the first step. Fill out the form below and our partnership director will contact you shortly.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-gray-900/80 to-black/50 border border-[#333333] rounded-2xl shadow-xl">
            <CardContent className="p-8 sm:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-20 h-20 text-[#cbe30b] mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-3">Inquiry Received!</h3> {/* Simplified text */}
                  <p className="text-lg text-gray-400">Our team will be in touch with you shortly.</p> {/* Simplified text */}
                </div>
              ) : (
                <form onSubmit={handleSubmit} action="https://formspree.io/f/xrblwoje" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="New Partnership Inquiry from Website" />
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#e5e5e5] font-semibold">Full Name *</Label>
                      <Input name="name" id="name" required value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-[#e5e5e5] font-semibold">Company Name *</Label>
                      <Input name="company" id="company" required value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="Your Company Inc." />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#e5e5e5] font-semibold">Email Address *</Label>
                      <Input name="email" id="email" type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="your.email@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#e5e5e5] font-semibold">Phone Number</Label>
                      <Input name="phone" id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[#e5e5e5] font-semibold">Partnership Interest</Label>
                    {/* Hidden input to pass selected value from Shadcn Select component */}
                    <input type="hidden" name="partnershipType" value={formData.partnershipType} />
                    <Select value={formData.partnershipType} onValueChange={(value) => handleInputChange('partnershipType', value)}>
                      <SelectTrigger className="bg-[#1a1a1a] border-[#333333] text-white py-6">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a1a] border-[#333333] text-white">
                        <SelectItem value="purchase">Fleet Purchase Program</SelectItem>
                        <SelectItem value="revenue-share">Revenue Share Program</SelectItem>
                        <SelectItem value="both">Interested in Both Options</SelectItem>
                        <SelectItem value="learn-more">Just Learning More</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#e5e5e5] font-semibold">Tell Us About Your Goals</Label>
                    <Textarea name="message" id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white h-24" placeholder="What are you hoping to achieve with a mobile security partnership?" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black py-4 text-lg font-bold">
                    {isSubmitting ? "Submitting..." : "Request Partnership Information"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
