
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Cloud, Smartphone, Laptop, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityCloudVMS() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Platform & Compliance</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Cloud VMS & Mobile App
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Your entire security system, in the palm of your hand. Our intuitive, secure cloud-based Video Management System (VMS) gives you complete control over all your assets from anywhere in the world.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Request a Platform Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Centralized Command and Control</h2>
              <p className="text-lg text-[#666666]">
                Managing security across multiple sites can be complex. Our cloud platform unifies all your Sentinel Towers into a single, easy-to-use dashboard. View live feeds, manage alerts, control cameras, and check system health with just a few clicks.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Cloud className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Monitor dozens of locations without leaving your office.</span></li>
                <li className="flex items-start"><Cloud className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Provide tiered access levels for different users in your organization.</span></li>
                <li className="flex items-start"><Cloud className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Eliminate the need for expensive on-premise servers and maintenance.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Person monitoring multiple security screens" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Accessible, Intuitive, and Secure</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Our platform is designed for the real world, prioritizing ease of use without sacrificing security.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Smartphone className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Full Mobile Functionality</h3>
                    <p className="text-[#666666]">Our native iOS and Android apps provide access to all key features, including live video, PTZ control, and two-way audio.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Laptop className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Powerful Web Portal</h3>
                    <p className="text-[#666666]">The browser-based VMS is perfect for command centers, allowing for multi-camera views and deep forensic search of recorded video.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Cloud className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Secure Cloud Storage</h3>
                    <p className="text-[#666666]">All footage is encrypted and securely stored in the cloud, protected from on-site tampering and accessible for review at any time.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Total Control at Your Fingertips</h2>
            <p className="text-xl text-[#666666] mb-8">
                Experience the power and simplicity of a modern, cloud-native security platform.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Contact")}>Schedule a Live Platform Demo <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
