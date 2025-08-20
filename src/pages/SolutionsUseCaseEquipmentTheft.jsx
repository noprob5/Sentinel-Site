
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Shield, Eye, Zap, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseEquipmentTheft() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Asset Protection</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Preventing Equipment Theft
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Your heavy machinery and tools are high-value targets. See how Sentinel Towers provides an impenetrable shield for your job site assets, day and night.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Protect Your Equipment</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Million-Dollar Problem</h2>
              <p className="text-lg text-[#666666]">
                Construction sites are open, often remote, and filled with assets that are expensive to replace and critical for project timelines. Traditional fences are easily breached, and a single stolen excavator or generator can halt work for weeks and cost tens of thousands in losses and delays.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Shield className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>High cost of replacement and insurance premium hikes.</span></li>
                <li className="flex items-start"><Shield className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Project delays and liquidated damages from downtime.</span></li>
                <li className="flex items-start"><Shield className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Difficulty securing large, evolving perimeters effectively.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" alt="Heavy construction equipment on a job site" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Proactive Deterrence</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Instead of just recording a crime, we stop it from happening. Our towers create a powerful security field around your assets.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">AI Detection</h3>
                    <p className="text-[#666666]">Intelligent cameras identify human and vehicle intruders, ignoring irrelevant motion to eliminate false alarms.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Zap className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Active Deterrence</h3>
                    <p className="text-[#666666]">Upon detection, the tower triggers high-intensity strobe lights and loud, authoritative audio warnings to drive intruders away.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Instant Alerts</h3>
                    <p className="text-[#666666]">You and our monitoring partners receive immediate alerts with live video, allowing for a rapid law enforcement response.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Secure Your Assets Before It's Too Late</h2>
            <p className="text-xl text-[#666666] mb-8">
                Don't wait for a loss to happen. Deploy a Sentinel Tower and get immediate peace of mind.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Construction")}>Learn More About Construction Security <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
