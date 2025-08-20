
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";

export default function NewCTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    application: "",
    message: ""
  });

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
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              application: "",
              message: ""
            });
        } else {
            alert("Submission failed. Please try again later.");
        }
    } catch (error) {
        alert("An error occurred. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#cbe30b]/5 via-transparent to-[#cbe30b]/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cbe30b]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#cbe30b]/10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Bring Your Technology.<br />
            <span className="text-[#cbe30b]">We'll Bring the Platform.</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Ready to make your technology mission-ready? Let's discuss how our integration platforms can enhance your operational capabilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-[#0d0d0d]/60 backdrop-blur-sm border border-[#333333] p-8">
          {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center min-h-[500px]">
                <CheckCircle className="w-20 h-20 text-[#cbe30b] mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-3">Inquiry Received!</h3>
                <p className="text-lg text-gray-400">Thank you for your inquiry. Our team will review your requirements and be in touch shortly.</p>
              </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} action="https://formspree.io/f/xgvzjprj" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New CTA Form Submission from Website" />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#e5e5e5]">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      required 
                      value={formData.name} 
                      onChange={(e) => handleInputChange('name', e.target.value)} 
                      className="bg-[#1a1a1a] border-[#333333] text-white" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#e5e5e5]">Email *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={(e) => handleInputChange('email', e.target.value)} 
                      className="bg-[#1a1a1a] border-[#333333] text-white" 
                      placeholder="your@company.com" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#e5e5e5]">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      value={formData.phone} 
                      onChange={(e) => handleInputChange('phone', e.target.value)} 
                      className="bg-[#1a1a1a] border-[#333333] text-white" 
                      placeholder="(555) 123-4567" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#e5e5e5]">Company</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company} 
                      onChange={(e) => handleInputChange('company', e.target.value)} 
                      className="bg-[#1a1a1a] border-[#333333] text-white" 
                      placeholder="Company Name" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[#e5e5e5]">Application</Label>
                  {/* Hidden input to send the value of the Select component */}
                  <input type="hidden" name="application" value={formData.application} />
                  <Select value={formData.application} onValueChange={(value) => handleInputChange('application', value)}>
                    <SelectTrigger className="bg-[#1a1a1a] border-[#333333] text-white">
                      <SelectValue placeholder="Select your application" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-[#333333] text-white">
                      <SelectItem value="military-defense">Military & Defense</SelectItem>
                      <SelectItem value="law-enforcement">Law Enforcement</SelectItem>
                      <SelectItem value="critical-infrastructure">Critical Infrastructure</SelectItem>
                      <SelectItem value="private-security">Private Security</SelectItem>
                      <SelectItem value="systems-integration">Systems Integration</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#e5e5e5]">Tell Us About Your Requirements</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message} 
                    onChange={(e) => handleInputChange('message', e.target.value)} 
                    className="bg-[#1a1a1a] border-[#333333] text-white h-32" 
                    placeholder="What technology do you need to integrate? What are your power and deployment requirements?" 
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black py-3 text-lg font-semibold">
                  {isSubmitting ? 'Sending...' : 'Request Information'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </>
          )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Our Team</h3>
              <p className="text-[#666666] mb-8 leading-relaxed">
                Our integration specialists are ready to discuss your specific requirements and design a custom solution for your mission.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#cbe30b]/20">
                  <Phone className="w-6 h-6 text-[#cbe30b]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Sales & Integration</h4>
                  <p className="text-[#666666] mb-2">256-655-5078</p>
                  <p className="text-[#666666] text-sm">Monday - Friday, 8AM - 6PM CST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#cbe30b]/20">
                  <Mail className="w-6 h-6 text-[#cbe30b]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-[#666666] mb-1">sales@sentineltowers.com</p>
                  <p className="text-[#666666] text-sm">We'll respond within 4 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0d0d0d]/60 backdrop-blur-sm border border-[#333333] p-6">
              <h4 className="text-white font-semibold mb-4">Why Choose Sentinel?</h4>
              <ul className="space-y-3 text-[#666666]">
                <li className="flex items-start">
                  <span className="text-[#cbe30b] mr-2 mt-1">•</span>
                  <span>NDAA compliant for government contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#cbe30b] mr-2 mt-1">•</span>
                  <span>Proven integration experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#cbe30b] mr-2 mt-1">•</span>
                  <span>Rapid deployment capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#cbe30b] mr-2 mt-1">•</span>
                  <span>24/7 mission-critical support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
