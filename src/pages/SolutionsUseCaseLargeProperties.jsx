
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Maximize, Shield, Eye, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseLargeProperties() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Operational Oversight</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Managing Large Properties
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            From apartment complexes to sprawling industrial parks and shopping centers, effectively monitoring large areas is a major challenge. See how we provide total coverage.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Get a Site Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Too Much Ground to Cover</h2>
              <p className="text-lg text-[#666666]">
                Relying on fixed cameras creates inevitable blind spots. A guard patrol can't be everywhere at once. Large properties become a patchwork of secured and unsecured zones, leaving tenants, customers, and assets vulnerable to crime.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Maximize className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Inability to monitor parking lots, common areas, and fence lines simultaneously.</span></li>
                <li className="flex items-start"><Maximize className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>High cost of hiring enough security personnel for adequate coverage.</span></li>
                <li className="flex items-start"><Maximize className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Liability concerns from incidents occurring in unmonitored "blind spots".</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2069&auto=format&fit=crop" alt="Large commercial property aerial view" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Strategic Overwatch</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                A single, strategically placed tower can provide coverage equivalent to dozens of fixed cameras, acting as a powerful force multiplier for your security program.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">360-Degree View</h3>
                    <p className="text-[#666666]">The Pan-Tilt-Zoom (PTZ) camera offers a commanding view, allowing one operator to monitor an entire parking lot or property perimeter.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Maximize className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Virtual Patrols</h3>
                    <p className="text-[#666666]">Program the camera to automatically patrol between key areas, such as entrances, dumpsters, and recreation areas, ensuring nothing is missed.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Cost-Effective Coverage</h3>
                    <p className="text-[#666666]">Dramatically reduce the need for multiple guards or an extensive network of fixed cameras, lowering your overall security spending.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">See Your Entire Property at a Glance</h2>
            <p className="text-xl text-[#666666] mb-8">
                Eliminate blind spots and enhance safety for your tenants, shoppers, or employees.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("PropertyManagement")}>Discover Property Management Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
