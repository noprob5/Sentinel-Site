
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, Zap, Eye, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseCopperTheft() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1619451154531-7393de0a4843?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Asset Protection</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Stopping Material & Copper Theft
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Copper, lumber, and other raw materials are the lifeblood of your project and a top target for thieves. Learn how to protect your yard or site from costly material theft.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Protect Your Materials</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The New Gold Rush for Criminals</h2>
              <p className="text-lg text-[#666666]">
                Rising commodity prices have made copper wiring, catalytic converters, and raw building materials extremely valuable. Thieves can cause thousands in direct losses and tens of thousands in collateral damage to HVAC systems, electrical panels, and machinery.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Zap className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Massive repair bills from damaged infrastructure.</span></li>
                <li className="flex items-start"><Zap className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Theft occurring in unsecured yards, vacant buildings, and active sites.</span></li>
                <li className="flex items-start"><Zap className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Project shutdowns due to critical component theft.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" alt="Industrial copper piping and wiring" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Protect Your Perimeter</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Our autonomous system creates an intelligent, active defense grid around your most valuable materials.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">24/7 Watchful Eye</h3>
                    <p className="text-[#666666]">The AI is always on, monitoring your property boundaries and material storage areas without breaks or distractions.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Immediate Intervention</h3>
                    <p className="text-[#666666]">The instant a threat is detected, strobes and audio warnings activate, making it clear the area is under live surveillance.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Zap className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Evidence for Prosecution</h3>
                    <p className="text-[#666666]">High-resolution video captures clear evidence of intruders and their vehicles, aiding law enforcement in arrests and recovery.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Stop Writing Off Material Losses</h2>
            <p className="text-xl text-[#666666] mb-8">
                Your materials are part of your profit margin. Protect them with a security solution that pays for itself.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Manufacturing")}>See Industrial Security Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
