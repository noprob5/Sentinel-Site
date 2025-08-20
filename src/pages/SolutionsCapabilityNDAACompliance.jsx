
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ShieldCheck, Check, Globe, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityNDAACompliance() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Platform & Compliance</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            NDAA & TAA Compliant
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Security and supply chain integrity are non-negotiable. Our entire platform is fully compliant with Section 889 of the National Defense Authorization Act (NDAA) and the Trade Agreements Act (TAA).
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Discuss Your Compliance Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">A Trusted Partner for Secure Projects</h2>
              <p className="text-lg text-[#666666]">
                For government contracts, critical infrastructure, and any organization concerned with cybersecurity, using NDAA-compliant equipment is mandatory. We guarantee that our cameras, recorders, and other components are sourced from trusted, approved manufacturers, ensuring your security system is secure from the inside out.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><ShieldCheck className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Eligible for use in federal government facilities and on government contracts.</span></li>
                <li className="flex items-start"><ShieldCheck className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Protects against cybersecurity vulnerabilities from banned components.</span></li>
                <li className="flex items-start"><ShieldCheck className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Ensures a secure and verifiable supply chain for all critical hardware.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" alt="Professional handshake over government contract documents" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Compliance Means for You</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                We provide security you can trust at every level.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Check className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">NDAA Section 889</h3>
                    <p className="text-[#666666]">We certify that we do not use or sell any telecommunications and video surveillance equipment from prohibited Chinese companies.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Globe className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">TAA Compliance</h3>
                    <p className="text-[#666666]">Our products are manufactured or substantially transformed in the United States or a TAA-designated country, making them eligible for GSA Schedules.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <ShieldCheck className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Peace of Mind</h3>
                    <p className="text-[#666666]">You can be confident that your security system meets the highest standards and won't introduce unforeseen risks into your network.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Security Built on a Foundation of Trust</h2>
            <p className="text-xl text-[#666666] mb-8">
                Choose a partner that prioritizes your security and compliance needs.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("MilitaryAndDefense")}>See Military & Defense Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
