
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Siren, Shield, Video, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseCrimeHotspots() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Public Safety</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Crime Hotspot Deterrence
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            When crime concentrates in a specific area, a highly visible, active security presence is the most effective deterrent. See how law enforcement uses Sentinel Towers as a tactical force multiplier.
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
              <h2 className="text-3xl font-bold text-white">The Limits of Patrols</h2>
              <p className="text-lg text-[#666666]">
                Patrol cars can't be everywhere. For persistent problems like drug activity in a park, illegal street racing, or break-ins in a commercial district, a temporary but constant security presence is needed to disrupt criminal patterns and reclaim public spaces for the community.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Siren className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Criminal activity returns as soon as a patrol car leaves.</span></li>
                <li className="flex items-start"><Siren className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Need to gather evidence without tying up sworn officers for hours.</span></li>
                <li className="flex items-start"><Siren className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Lack of high-quality video evidence to ensure prosecutions.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" alt="Urban street at night with police patrol car" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Tactical Overwatch</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Deploy a tower to a problem area and instantly establish a 24/7 monitoring and deterrence zone, freeing up officers for community policing.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Visible Deterrent</h3>
                    <p className="text-[#666666]">The tower's imposing presence, bright lights, and marked signage clearly signals that the area is under intense surveillance.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Video className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Evidence Gathering</h3>
                    <p className="text-[#666666]">Record crystal-clear video of illegal activity from an ideal vantage point, providing irrefutable evidence for investigators and prosecutors.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Siren className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Rapid Redeployment</h3>
                    <p className="text-[#666666]">Once a problem is solved, easily move the tower to the next hotspot in under 30 minutes, adapting to changing crime trends.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">A Smarter Way to Police</h2>
            <p className="text-xl text-[#666666] mb-8">
                Amplify the effectiveness of your force with technology that works around the clock.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("LawEnforcement")}>Explore Law Enforcement Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
