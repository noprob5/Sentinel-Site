
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Move, Clock, Zap, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityMobileDeployment() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620536413444-4e4f9b882352?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Platform & Compliance</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Rapid Mobile Deployment
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Your security needs change. Our solution does too. The Sentinel Tower's trailer-based design allows you to deploy advanced surveillance anywhere you can drive a truck, in as little as 15 minutes.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Get a Deployment Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Security Where You Need It, When You Need It</h2>
              <p className="text-lg text-[#666666]">
                Traditional security systems are permanent. They require weeks of planning, permits, and trenching. The Sentinel Tower is built for agility. Respond to emerging threats, secure temporary sites, or follow the progress of a large construction project with unparalleled flexibility.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Move className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Easily relocate security as your site's needs or phases change.</span></li>
                <li className="flex items-start"><Move className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Deploy for short-term events, emergency response, or investigative support.</span></li>
                <li className="flex items-start"><Move className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Avoid the massive capital expense and inflexibility of permanent camera poles.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2062&auto=format&fit=crop" alt="Mobile trailer being towed on highway" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Streamlined From Arrival to Operation</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Our deployment process is designed for speed and simplicity.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Move className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Tow and Park</h3>
                    <p className="text-[#666666]">The tower can be towed by a standard pickup truck and positioned by a single person. No special equipment is needed.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Clock className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">15-Minute Setup</h3>
                    <p className="text-[#666666]">Lower the outriggers, raise the mast with the manual winch, and power on the system. The unit is operational in minutes.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Zap className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Instant Connection</h3>
                    <p className="text-[#666666]">The tower automatically connects to the cellular network and our cloud platform, giving you immediate video access.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Security That Moves at the Speed of Your Business</h2>
            <p className="text-xl text-[#666666] mb-8">
                Stop waiting for security. Deploy an agile solution that adapts to your needs.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("SolutionsUseCaseEventSecurity")}>See Event Security Use Cases <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
