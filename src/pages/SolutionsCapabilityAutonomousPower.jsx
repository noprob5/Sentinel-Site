
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Sun, BatteryCharging, CloudOff, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityAutonomousPower() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509390193238-3069a531a478?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Intelligent Surveillance</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Autonomous Solar Power
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Sentinel Towers are completely self-sufficient. Our integrated solar power and battery system provides uninterrupted power, allowing deployment in the most remote, off-grid locations without compromise.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Discuss Off-Grid Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Security That Never Sleeps</h2>
              <p className="text-lg text-[#666666]">
                Power outages and lack of infrastructure are major security vulnerabilities. Our system eliminates this dependency entirely. We designed our power platform for maximum efficiency and resilience, ensuring your security is always on, 24/7/365.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Sun className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Eliminates the need for costly trenching or grid connection.</span></li>
                <li className="flex items-start"><Sun className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Immune to local power outages, whether from storms or sabotage.</span></li>
                <li className="flex items-start"><Sun className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Sustainable, silent, and environmentally friendly operation.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Solar panel array in bright sunlight" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Engineered for Resilience</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Our power system is built to withstand real-world conditions.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Sun className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">High-Efficiency Panels</h3>
                    <p className="text-[#666666]">Industrial-grade solar panels are optimized to generate maximum power even on overcast days.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <BatteryCharging className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Extended Battery Backup</h3>
                    <p className="text-[#666666]">High-capacity lithium batteries provide over 12 days of autonomous runtime with zero sunlight, ensuring year-round reliability.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <CloudOff className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Smart Power Management</h3>
                    <p className="text-[#666666]">The system intelligently optimizes energy consumption, conserving power during inactive periods to extend battery life.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Cut the Cord on Traditional Security</h2>
            <p className="text-xl text-[#666666] mb-8">
                Place powerful security exactly where you need it, regardless of infrastructure.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("SolutionsUseCaseRemoteSites")}>See Our Remote Site Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
