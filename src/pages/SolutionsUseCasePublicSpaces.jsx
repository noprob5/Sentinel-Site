
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Trees, Shield, Eye, ArrowRight } from 'lucide-react';

export default function SolutionsUseCasePublicSpaces() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1996&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Public Safety</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Securing Public Spaces
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Parks, squares, and public venues are community assets that deserve to be safe. Deter unwanted activity like vandalism, illegal dumping, and after-hours loitering with a visible, effective security presence.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Make Your Public Space Safer</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Keeping Common Areas Safe</h2>
              <p className="text-lg text-[#666666]">
                Public areas are vulnerable to misuse when not monitored, especially after dark. This can lead to costly cleanup, property damage, and a perception that the area is unsafe, discouraging community use.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Trees className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Illegal dumping of trash and hazardous materials.</span></li>
                <li className="flex items-start"><Trees className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Vandalism of park benches, restrooms, and other facilities.</span></li>
                <li className="flex items-start"><Trees className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Illicit after-hours activity that makes residents feel unsafe.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" alt="Empty public park with walking paths" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Community Guardian</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                A Sentinel Tower serves as a 24/7 guardian for your public spaces, actively deterring misuse and ensuring the area remains a positive community asset.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Overt Deterrence</h3>
                    <p className="text-[#666666]">The tower’s visible presence is a powerful deterrent. Potential vandals know they are being watched by a system far more capable than a simple camera.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">After-Hours Enforcement</h3>
                    <p className="text-[#666666]">AI can be scheduled to detect any human presence after closing hours, triggering audio messages asking them to leave the park.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Trees className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">License Plate Recognition</h3>
                    <p className="text-[#666666]">Capture license plates of vehicles involved in illegal dumping, providing actionable evidence for law enforcement or city officials.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Reclaim Your Public Spaces</h2>
            <p className="text-xl text-[#666666] mb-8">
                Create a safer, cleaner environment for your community with a cost-effective, 24/7 security solution.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("LawEnforcement")}>Explore Public Safety Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
