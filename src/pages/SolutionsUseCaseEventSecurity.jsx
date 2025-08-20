
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Users, Eye, Radio, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseEventSecurity() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2074&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Operational Oversight</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Enhancing Event Security
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            From music festivals and sporting events to public gatherings, ensuring crowd safety requires a high-level view. Provide your security team with the ultimate situational awareness tool.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Secure Your Next Event</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Challenge of Crowd Dynamics</h2>
              <p className="text-lg text-[#666666]">
                Large crowds create complex security challenges. Monitoring ingress/egress points, identifying potential disruptions, and responding to medical emergencies all require rapid intelligence. Ground-level security can easily lose sight of the bigger picture.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Users className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Difficulty monitoring crowd flow and density in real-time.</span></li>
                <li className="flex items-start"><Users className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Need for rapid deployment in temporary, non-powered locations.</span></li>
                <li className="flex items-start"><Users className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Coordinating security and medical response across a large venue.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" alt="Large crowd at outdoor festival" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Your Mobile Command Center</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Deploy in minutes to give your event operations team an immediate, commanding "eye in the sky."
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Situational Awareness</h3>
                    <p className="text-[#666666]">From the command post, monitor choke points, parking lots, and stage fronts to proactively manage crowd flow and safety.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Radio className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Direct Response</h3>
                    <p className="text-[#666666]">Use two-way audio to make general announcements, provide directions, or guide security personnel to a specific location.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Users className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Incident Review</h3>
                    <p className="text-[#666666]">Quickly access and export high-definition footage to review any incidents for post-event debriefings and liability purposes.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ensure a Safe and Successful Event</h2>
            <p className="text-xl text-[#666666] mb-8">
                Give your team the tactical advantage they need to manage any situation.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("EntertainmentAndEvents")}>Learn About Event Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
