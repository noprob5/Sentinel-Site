
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Phone, MessageSquare } from "lucide-react";
// Assuming 'Link' is available from a routing library like 'react-router-dom'
// If using Next.js, this would typically be 'import Link from "next/link";' and 'href' prop instead of 'to'.
// For this general React context, we'll assume react-router-dom or a similar pattern.
// import { Link } from "react-router-dom"; // This import is no longer needed as per the change

// Helper function to create page URLs based on the outline's usage
// In a real application, this might be part of a centralized routing configuration
// const createPageUrl = (pageName) => { // This function is no longer needed as per the change
//   switch (pageName) {
//     case "privacypolicy":
//       return "/privacy-policy"; // This assumes your privacy policy page is located at /privacy-policy
//     default:
//       return "/"; // Default or handle other page names as needed
//   }
// };

export default function SMSOptIn() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    smsOptIn: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.smsOptIn) {
      alert("Please check the box to opt in to SMS updates.");
      return;
    }
    
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
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-black text-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-[#cbe30b]/20 to-[#a8bf0a]/20 rounded-full">
              <MessageSquare className="w-16 h-16 text-[#cbe30b]" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stay Connected with <span className="text-[#cbe30b]">SMS Updates</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get real-time notifications about your orders, delivery updates, and important service information directly to your phone.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/50 border border-[#333333] p-8 rounded-2xl shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-20 h-20 text-[#cbe30b] mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-3">You're All Set!</h3>
                <p className="text-lg text-gray-400 mb-4">
                  Thank you for opting in to SMS updates. You'll start receiving notifications from Sentinel Towers.
                </p>
                <p className="text-sm text-gray-500">
                  You can text STOP at any time to unsubscribe.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">SMS Opt-In</h2>
                  <p className="text-gray-400">
                    Enter your information below to receive SMS updates from Sentinel Towers.
                  </p>
                </div>

                <form onSubmit={handleSubmit} action="https://formspree.io/f/mgvzjprj" method="POST" className="space-y-6">
                  <input type="hidden" name="_subject" value="New SMS Opt-In Request" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#e5e5e5] font-semibold">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        required 
                        value={formData.firstName} 
                        onChange={(e) => handleInputChange('firstName', e.target.value)} 
                        className="bg-[#1a1a1a] border-[#333333] text-white py-6" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#e5e5e5] font-semibold">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        required 
                        value={formData.lastName} 
                        onChange={(e) => handleInputChange('lastName', e.target.value)} 
                        className="bg-[#1a1a1a] border-[#333333] text-white py-6" 
                        placeholder="Smith" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#e5e5e5] font-semibold">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        required 
                        value={formData.phone} 
                        onChange={(e) => handleInputChange('phone', e.target.value)} 
                        className="bg-[#1a1a1a] border-[#333333] text-white py-6 pl-12" 
                        placeholder="(555) 123-4567" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#e5e5e5] font-semibold">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={(e) => handleInputChange('email', e.target.value)} 
                      className="bg-[#1a1a1a] border-[#333333] text-white py-6" 
                      placeholder="john@company.com" 
                    />
                  </div>

                  {/* SMS Opt-In Checkbox */}
                  <div className="space-y-4 p-6 bg-[#0d0d0d]/60 border border-[#333333] rounded-xl">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="smsOptIn"
                        checked={formData.smsOptIn}
                        onCheckedChange={(checked) => handleInputChange('smsOptIn', checked)}
                        className="mt-1 border-[#cbe30b] data-[state=checked]:bg-[#cbe30b] data-[state=checked]:text-black"
                      />
                      <input type="hidden" name="smsOptIn" value={formData.smsOptIn} />
                      <div className="space-y-2">
                        <Label htmlFor="smsOptIn" className="text-white font-semibold text-lg cursor-pointer">
                          I would like to receive updates by text
                        </Label>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          We'll be sending you order updates from Sentinel Towers. Message and data rates may apply. 
                          Message frequency varies. At any time you can text HELP for help or STOP to opt out.
                        </p>
                        <p className="text-xs text-gray-500">
                          By checking this box, you agree to our{" "}
                          <a 
                            href="/privacypolicy" 
                            className="text-[#cbe30b] hover:text-white underline"
                            target="_blank"
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || !formData.smsOptIn} 
                    className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe to SMS Updates"}
                  </Button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-[#1a1a1a]/40 border border-[#333333] rounded-xl">
                  <h4 className="text-white font-semibold mb-2">What you'll receive:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Order confirmations and shipping updates</li>
                    <li>• Delivery notifications and scheduling</li>
                    <li>• Important service announcements</li>
                    <li>• Product updates and maintenance reminders</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
