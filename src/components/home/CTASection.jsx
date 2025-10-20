
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#cbe30b]/5 via-transparent to-[#cbe30b]/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cbe30b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#cbe30b]/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Secure Your Site?
        </h2>
        <p className="text-xl text-[#666666] mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the future of mobile surveillance with Sentinel Towers. 
          Get a custom quote tailored to your security needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-xl shadow-[#cbe30b]/25 hover:shadow-[#cbe30b]/40 transition-all duration-300 group">
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+12566900143" 
              className="flex items-center space-x-2 text-[#e5e5e5] hover:text-[#cbe30b] transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">256-690-0143</span>
            </a>
            <a 
              href="mailto:contact@sentineltowers.com" 
              className="flex items-center space-x-2 text-[#e5e5e5] hover:text-[#cbe30b] transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
