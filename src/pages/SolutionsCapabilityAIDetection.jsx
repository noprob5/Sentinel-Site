
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Bot, UserCheck, Shield, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityAIDetection() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1599059813005-72827a0f35a4?q=80&w=1932&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Intelligent Surveillance</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            AI-Powered Detection
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Our system doesn't just see, it understands. Advanced on-board AI analytics differentiate real threats from random motion, virtually eliminating false alarms and focusing on what matters.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Request a Technology Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">From Motion Detection to Threat Recognition</h2>
              <p className="text-lg text-[#666666]">
                Traditional motion sensors are a recipe for frustration, triggering alerts for blowing trees, animals, or shadows. Our AI-driven system is trained to recognize specific objects and behaviors, so you're only alerted to genuine security events.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Bot className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Classifies objects as humans, vehicles, or other categories.</span></li>
                <li className="flex items-start"><Bot className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Creates virtual "tripwires" and intrusion zones for precise perimeter control.</span></li>
                <li className="flex items-start"><Bot className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Learns and adapts to the normal patterns of your site to improve accuracy.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop" alt="Digital AI brain visualization" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">How Our AI Works for You</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                This isn't just a camera; it's a 24/7 virtual security guard.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <UserCheck className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Person/Vehicle Detection</h3>
                    <p className="text-[#666666]">The primary analytic. The system specifically looks for the presence of people or vehicles in restricted areas or after hours.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Loitering Detection</h3>
                    <p className="text-[#666666]">Triggers an alert if a person or vehicle remains in a designated area for longer than a preset time, a common precursor to crime.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Bot className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">License Plate Recognition</h3>
                    <p className="text-[#666666]">Automatically captures and logs license plates of all vehicles entering your site, creating an invaluable security record.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Smarter Security, Better Results</h2>
            <p className="text-xl text-[#666666] mb-8">
                Stop wasting time on false alarms. Invest in an intelligent system that lets you focus on verified threats.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Sentinel1")}>See All Sentinel 1 Features <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
