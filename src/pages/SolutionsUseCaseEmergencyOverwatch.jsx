
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Radio, Eye, Shield, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseEmergencyOverwatch() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Public Safety</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Incident & Emergency Overwatch
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            During a critical incident, information is everything. Sentinel Towers deploy in minutes to become a mobile command hub, giving commanders the real-time situational awareness needed to make life-saving decisions.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Request an Agency Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Fog of an Emergency</h2>
              <p className="text-lg text-[#666666]">
                From natural disasters to active tactical situations, first responders on the ground have a limited field of view. Incident commanders need a comprehensive picture to effectively manage resources, ensure officer safety, and coordinate a successful response.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Eye className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Lack of a high-ground perspective of the entire scene.</span></li>
                <li className="flex items-start"><Eye className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Difficulty tracking suspect movements or crowd dynamics.</span></li>
                <li className="flex items-start"><Eye className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Need for a reliable, on-demand communications and surveillance hub.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1935&auto=format&fit=crop" alt="Emergency response team coordinating" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Your Tactical High Ground</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Establish an elevated, unblinking eye over any scene in minutes, streaming critical intelligence directly to your command post and mobile devices.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Radio className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Mobile Command Hub</h3>
                    <p className="text-[#666666]">Provide a live video feed to the Emergency Operations Center (EOC) or mobile command vehicle, enabling informed, real-time decisions.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Live Situational View</h3>
                    <p className="text-[#666666]">Monitor perimeters, track movement, and guide ground personnel with a clear, comprehensive view of the entire operational area.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Post-Incident Analysis</h3>
                    <p className="text-[#666666]">Securely recorded footage provides an invaluable tool for after-action reviews, training, and evidential purposes.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Respond Faster, Smarter, and Safer</h2>
            <p className="text-xl text-[#666666] mb-8">
                Give your commanders the tactical advantage they need when every second counts.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("EmergencyManagement")}>See Emergency Management Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
