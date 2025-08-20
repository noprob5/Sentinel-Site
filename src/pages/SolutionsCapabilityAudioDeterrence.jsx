
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mic, Volume2, MessageSquare, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityAudioDeterrence() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1508511932223-0d3a7e4b6b64?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Active Deterrence</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Live Two-Way Audio
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            A camera can record a crime, but a voice can stop one. Our powerful audio system allows you or our monitoring partners to verbally engage intruders in real-time, making it clear they are being watched live.
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
              <h2 className="text-3xl font-bold text-white">The Power of a Human Voice</h2>
              <p className="text-lg text-[#666666]">
                Nothing deters a criminal more effectively than knowing they have been personally identified. Live "talk-down" is a proven tactic that stops theft and vandalism before it happens. It turns a passive surveillance system into an active, confrontational security presence.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Mic className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Prevent losses by intervening before damage or theft occurs.</span></li>
                <li className="flex items-start"><Mic className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Avoid physical confrontations by using a powerful, remote voice.</span></li>
                <li className="flex items-start"><Mic className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Show intruders that this is not a passive system; they are being watched now.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop" alt="Professional audio speaker system" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Loud, Clear, and In Control</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Our audio capabilities are designed for maximum impact and flexibility.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Volume2 className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Powerful Loudspeakers</h3>
                    <p className="text-[#666666]">Extremely loud, weatherproof speakers project a clear and authoritative voice across a large area, ensuring the message is heard.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <MessageSquare className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Live Talk-Down</h3>
                    <p className="text-[#666666]">From our mobile app, you can speak directly through the tower's speakers to anyone on your property from anywhere in the world.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Mic className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Pre-Recorded Messages</h3>
                    <p className="text-[#666666]">Automatically trigger pre-recorded audio files, such as "You are in a restricted area, leave immediately," upon AI detection.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Give Your Security a Voice</h2>
            <p className="text-xl text-[#666666] mb-8">
                Upgrade from passive monitoring to active deterrence with live two-way audio.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Sentinel1")}>Explore All Deterrence Features <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
