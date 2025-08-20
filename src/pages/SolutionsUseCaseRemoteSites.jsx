
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { WifiOff, Zap, Eye, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseRemoteSites() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Operational Oversight</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Monitoring Remote & Off-Grid Sites
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            No power? No internet? No problem. Sentinel Towers are engineered for complete autonomy, bringing advanced security to your most isolated assets.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Secure Your Remote Site</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The Grid Doesn't Go Everywhere</h2>
              <p className="text-lg text-[#666666]">
                Critical assets are often located where infrastructure isn't. Substations, pipelines, cell towers, and remote storage yards are vulnerable precisely because they are difficult to monitor with traditional security systems that rely on grid power and wired internet.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><WifiOff className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Lack of reliable power and communication lines.</span></li>
                <li className="flex items-start"><WifiOff className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Prohibitive cost of trenching and running new infrastructure.</span></li>
                <li className="flex items-start"><WifiOff className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Difficulty performing regular physical security checks.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2074&auto=format&fit=crop" alt="Remote electrical substation" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Total Autonomy</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                We bring the power and the network with us, providing a complete, self-sustaining security solution out of the box.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Zap className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Solar & Battery Power</h3>
                    <p className="text-[#666666]">A robust solar array and long-life battery system provide 24/7 power with over 12 days of autonomy in complete darkness.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <WifiOff className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Cellular & Satellite</h3>
                    <p className="text-[#666666]">Dual-carrier 4G/LTE ensures the best possible connection, with optional satellite uplink for 100% coverage anywhere on Earth.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Eye className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Remote Management</h3>
                    <p className="text-[#666666]">Access live video, control cameras, and check system status from any device, anywhere in the world, via our secure cloud platform.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Security Beyond the Grid</h2>
            <p className="text-xl text-[#666666] mb-8">
                Your most remote assets are no longer your most vulnerable. Extend your security reach with Sentinel Towers.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("EnergyAndUtilities")}>Explore Utilities Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
