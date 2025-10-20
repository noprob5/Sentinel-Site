
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, MessageCircle, DollarSign, CheckCircle, ArrowDown } from "lucide-react";
import { AdvancedTabs } from "@/components/ui/AdvancedTabs";
import { motion } from "framer-motion";


export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            setIsSubmitted(true);
            // Optionally, clear the form data here after successful submission
            // setFormData({
            //     name: "", email: "", company: "", phone: "", inquiryType: "",
            //     projectType: "", timeline: "", budget: "", message: ""
            // });
        } else {
            // Log response for debugging, then show generic error
            const errorData = await response.json();
            console.error("Form submission error:", errorData);
            alert("Submission failed. Please try again later.");
        }
    } catch (error) {
        console.error("Network or other error during submission:", error);
        alert("An error occurred. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
        name: "", email: "", company: "", phone: "", inquiryType: "",
        projectType: "", timeline: "", budget: "", message: ""
    });
  }

  const QuoteForm = (
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mblkvpwg" method="POST" className="space-y-6">
        <input type="hidden" name="_subject" value="New Quote Request from Website" />
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <Label htmlFor="name-quote" className="text-[#e5e5e5] font-semibold">Full Name *</Label>
            <Input name="name" id="name-quote" required value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="John Smith" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="email-quote" className="text-[#e5e5e5] font-semibold">Email *</Label>
            <Input name="email" id="email-quote" type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="john@company.com" />
            </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <Label htmlFor="company-quote" className="text-[#e5e5e5] font-semibold">Company</Label>
                <Input name="company" id="company-quote" value={formData.company} onChange={(e) => handleInputChange('company', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="ABC Security Corp" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone-quote" className="text-[#e5e5e5] font-semibold">Phone Number</Label>
                <Input name="phone" id="phone-quote" type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="(555) 123-4567" />
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="message-quote" className="text-[#e5e5e5] font-semibold">Project Details *</Label>
            <Textarea name="message" id="message-quote" required value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white h-32" placeholder="Tell us about your security requirements, site conditions, number of units needed, etc." />
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black py-4 text-lg font-bold">
            {isSubmitting ? "Sending..." : "Send Quote Request"}
        </Button>
      </form>
  );

  const GeneralInquiryForm = (
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mqalvgny" method="POST" className="space-y-6">
        <input type="hidden" name="_subject" value="New General Inquiry from Website" />
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <Label htmlFor="name-general" className="text-[#e5e5e5] font-semibold">Full Name *</Label>
            <Input name="name" id="name-general" required value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="John Smith" />
            </div>
            <div className="space-y-2">
            <Label htmlFor="email-general" className="text-[#e5e5e5] font-semibold">Email Address *</Label>
            <Input name="email" id="email-general" type="email" required value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white py-6" placeholder="john@company.com" />
            </div>
        </div>
        <div className="space-y-2">
            <Label className="text-[#e5e5e5] font-semibold">Inquiry Type</Label>
            {/* Hidden input to capture select value for Formspree */}
            <input type="hidden" name="inquiryType" value={formData.inquiryType} /> 
            <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
            <SelectTrigger className="bg-[#1a1a1a] border-[#333333] text-white py-6"><SelectValue placeholder="What can we help you with?" /></SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#333333] text-white">
                <SelectItem value="product-info">Product Information</SelectItem>
                <SelectItem value="technical-support">Technical Support</SelectItem>
                <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                <SelectItem value="media">Media & Press</SelectItem>
                <SelectItem value="careers">Careers</SelectItem>
                <SelectItem value="other">Other</SelectItem>
            </SelectContent>
            </Select>
        </div>
        <div className="space-y-2">
            <Label htmlFor="message-general" className="text-[#e5e5e5] font-semibold">Message *</Label>
            <Textarea name="message" id="message-general" required value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className="bg-[#1a1a1a] border-[#333333] text-white h-32" placeholder="How can we help you today?" />
        </div>
        <Button type="submit" disabled={isSubmitting} className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black py-4 text-lg font-bold">
            {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
  );

  const tabs = [
    { id: 'quote', title: 'Request Quote', icon: DollarSign, content: QuoteForm },
    { id: 'general', title: 'General Inquiry', icon: MessageCircle, content: GeneralInquiryForm }
  ];

  return (
    <div className="bg-[#050505] text-white">
        {/* Hero Section */}
        <section className="relative py-48 px-4 sm:px-6 lg:px-8 bg-black text-center text-white">
            <div className="absolute inset-0 bg-grid-slate-900/40 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                    Get in <span className="text-[#cbe30b]">Touch</span>
                </h1>
                <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Ready to enhance your security? Our experts are here to help you find the perfect surveillance solution.
                </p>
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

        {/* Contact Form & Info Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#050505]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Column: Contact Info */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Reach out to us directly through any of the methods below. Our team is ready to assist with your sales, support, and integration needs.
                        </p>
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-gradient-to-br from-[#cbe30b] to-[#a8bf0a] rounded-xl mt-1">
                                <Phone className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Call Us</h3>
                                <p className="text-lg text-gray-300">(256) 690-0143</p>
                                <p className="text-md text-gray-500">Mon-Fri, 8AM-6PM EST</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-gradient-to-br from-[#cbe30b] to-[#a8bf0a] rounded-xl mt-1">
                                <Mail className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Email Us</h3>
                                <p className="text-lg text-gray-300">sales@sentineltowers.com</p>
                                <p className="text-md text-gray-500">We respond within 2 hours</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-gradient-to-br from-[#cbe30b] to-[#a8bf0a] rounded-xl mt-1">
                                <MapPin className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Visit Us</h3>
                                <p className="text-lg text-gray-300">223 Nick Fitcheard Rd NW</p>
                                <p className="text-md text-gray-500">Huntsville, AL 35806</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-gradient-to-br from-gray-900/80 to-black/50 border border-[#333333] p-8 rounded-2xl shadow-xl">
                {isSubmitted ? (
                    <div className="text-center py-12">
                        <CheckCircle className="w-20 h-20 text-[#cbe30b] mx-auto mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-3">Message Received!</h3>
                        <p className="text-lg text-gray-400">Thank you for your inquiry. Our team will be in touch with you shortly.</p>
                    </div>
                ) : (
                    <AdvancedTabs tabs={tabs} layout="horizontal" />
                )}
                </div>
            </div>
        </section>
    </div>
  );
}
