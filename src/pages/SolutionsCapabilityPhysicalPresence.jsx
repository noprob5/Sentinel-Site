import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { TowerControl, Shield, Eye, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityPhysicalPresence() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://res.cloudinary.com/dl71jvny5/image/upload/v1753154767/2_towers_transparent_vvuvgo.png')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Active Deterrence</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Physical On-Site Presence
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Sometimes, the best defense is an imposing offense. The Sentinel Tower itself is a powerful psychological deterrent, signaling that your property is under heavy, professional-grade surveillance.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">More Than Just a Camera on a Pole</h2>
              <p className="text-lg text-[#666666]">
                Opportunistic criminals look for easy targets. A small, hidden camera might record them, but it won't scare them away. The Sentinel Tower is a heavy-duty, industrial piece of equipment that is impossible to ignore. Its presence alone is often enough to make a potential thief reconsider and move on to a softer target.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><TowerControl className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Communicates a high level of security investment and seriousness.</span></li>
                <li className="flex items-start"><TowerControl className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Reduces the likelihood of an attempted breach in the first place.</span></li>
                <li className="flex items-start"><TowerControl className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Acts as a force multiplier, making your entire property feel more secure.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://res.cloudinary.com/dl71jvny5/image/upload/v1753154767/2_towers_transparent_vvuvgo.png" alt="Two Sentinel Towers standing guard" className="rounded-lg"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">An Unmistakable Message</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Every component is designed to project strength and vigilance.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Robust Construction</h3>
                    <p className="text-[#666666]">The galvanized steel mast and heavy-duty trailer base are built to withstand both harsh weather and potential tampering.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Prominent Cameras</h3>
                    <p className="text-[#666666]">The advanced camera system is mounted prominently, making it clear that every angle is being watched in high definition.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <TowerControl className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Clear Signage</h3>
                    <p className="text-[#666666]">Each tower is marked with clear signage warning that the area is under 24/7 video surveillance with active deterrence.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Make Your Property a Hard Target</h2>
            <p className="text-xl text-[#666666] mb-8">
                Deter criminals before they even set foot on your property.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Sentinel1")}>Explore the Sentinel 1 Platform <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}