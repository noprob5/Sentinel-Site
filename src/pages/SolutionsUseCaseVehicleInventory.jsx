
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Car, Shield, Video, ArrowRight } from 'lucide-react';

export default function SolutionsUseCaseVehicleInventory() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Use Case: Asset Protection</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Securing Vehicle Inventory
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Your automotive dealership is a prime target for theft and vandalism. Discover how Sentinel Towers protects your valuable inventory and your bottom line.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Protect Your Dealership</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">The High Cost of an Open Lot</h2>
              <p className="text-lg text-[#666666]">
                Dealerships face constant threats, from organized groups stealing high-end vehicles to criminals targeting catalytic converters and wheels. A single incident can result in thousands of dollars in damages and lost sales opportunities.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Car className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Theft of entire vehicles directly from the lot.</span></li>
                <li className="flex items-start"><Car className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Costly repairs from catalytic converter and parts theft.</span></li>
                <li className="flex items-start"><Car className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Vandalism that diminishes vehicle value and curb appeal.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" alt="Row of cars at dealership" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The Sentinel Solution: Total Lot Control</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                Our tower's high vantage point and intelligent features see everything and stop criminals before they cause damage.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Video className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Elevated Surveillance</h3>
                    <p className="text-[#666666]">The 22-foot mast provides a clear view over rows of vehicles, eliminating the blind spots that ground-level cameras suffer from.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Shield className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Catalytic Converter Defense</h3>
                    <p className="text-[#666666]">AI detects individuals loitering or crawling under vehicles, triggering powerful audio and light deterrents immediately.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Car className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Perimeter Security</h3>
                    <p className="text-[#666666]">Create a virtual fence around your entire property line. Anyone who crosses it after hours is instantly detected and challenged.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Drive Thieves Off Your Lot for Good</h2>
            <p className="text-xl text-[#666666] mb-8">
                Invest in proactive security that protects your assets and your profits.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("AutomotiveDealerships")}>See More Dealership Solutions <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
