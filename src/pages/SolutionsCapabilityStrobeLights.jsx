
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Zap, AlertTriangle, Eye, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityStrobeLights() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Active Deterrence</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            High-Intensity Strobe Lights
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Sudden, brilliant light is a powerful deterrent. Our integrated, multi-color LED strobe lights are designed to disorient intruders and draw immediate attention to a security event.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Weaponizing Light to Stop Crime</h2>
              <p className="text-lg text-[#666666]">
                Criminals thrive in darkness and anonymity. High-intensity strobe lights instantly take that away. The disorienting flashes make it difficult for an intruder to see, while simultaneously signaling to anyone in the area that a security event is in progress.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Zap className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Disorient and confuse intruders, making it hard for them to proceed.</span></li>
                <li className="flex items-start"><Zap className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Visibly signal the exact location of the threat for responding law enforcement.</span></li>
                <li className="flex items-start"><Zap className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Create an undeniable psychological effect that they have been caught.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop" alt="Bright emergency strobe lights flashing" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Automated and On-Demand Activation</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Our lighting system is as smart as it is bright.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <AlertTriangle className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">AI-Triggered Response</h3>
                    <p className="text-[#666666]">Strobes can be configured to activate automatically the moment the AI detects a valid threat, creating an instant response.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Manual Control</h3>
                    <p className="text-[#666666]">You or our monitoring partners can activate the strobes on-demand from the mobile app to investigate suspicious activity.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Zap className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Customizable Patterns</h3>
                    <p className="text-[#666666]">Use different colors and flash patterns. A solid red/blue can signal law enforcement response, while a bright white strobe is for deterrence.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Shine a Light on Your Vulnerabilities</h2>
            <p className="text-xl text-[#666666] mb-8">
                Don't let criminals operate under the cover of darkness. Add active light-based deterrence to your security plan.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Sentinel1")}>Explore All Deterrence Features <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
