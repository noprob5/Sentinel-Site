
import React from 'react';
import { Check, X, Clock, Bot, Shield, Camera, DollarSign } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Operational Hours',
    sentinel: { text: '24/7/365, Unblinking', icon: Check, color: 'text-green-400' },
    traditional: { text: '8-12 Hour Shifts, Gaps in Coverage', icon: X, color: 'text-red-400' },
    icon: Clock,
  },
  {
    feature: 'Monitoring',
    sentinel: { text: 'AI-Powered Threat Detection', icon: Check, color: 'text-green-400' },
    traditional: { text: 'Prone to Distraction & Human Error', icon: X, color: 'text-red-400' },
    icon: Bot,
  },
  {
    feature: 'Deterrence',
    sentinel: { text: 'Active: Lights, Strobes & Audio Alerts', icon: Check, color: 'text-green-400' },
    traditional: { text: 'Passive Presence, Often Ineffective', icon: X, color: 'text-red-400' },
    icon: Shield,
  },
  {
    feature: 'Evidence',
    sentinel: { text: 'Clear, Actionable HD Video Evidence', icon: Check, color: 'text-green-400' },
    traditional: { text: 'Unreliable Witness Testimony', icon: X, color: 'text-red-400' },
    icon: Camera,
  },
  {
    feature: 'Cost',
    sentinel: { text: 'Up to 80% Less Than a Guard', icon: Check, color: 'text-green-400' },
    traditional: { text: 'High & Recurring Labor Costs', icon: X, color: 'text-red-400' },
    icon: DollarSign,
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            A Smarter Way to <span className="text-[#cbe30b]">Secure Your Site</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            See how the Sentinel 1 platform outperforms traditional security methods in every key area.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-[#0d0d0d]/60 border border-[#333333] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-[#333333]">
            <div className="p-4 sm:p-6 text-lg sm:text-xl font-bold text-white/50 col-span-1">Feature</div>
            <div className="p-4 sm:p-6 text-lg sm:text-xl font-bold text-white col-span-1">Sentinel 1</div>
            <div className="p-4 sm:p-6 text-lg sm:text-xl font-bold text-white/50 col-span-1">Traditional Guard</div>
          </div>

          {comparisonData.map((item, index) => {
            const FeatureIcon = item.icon;
            const SentinelIcon = item.sentinel.icon;
            const TraditionalIcon = item.traditional.icon;
            return (
              <div key={index} className="grid grid-cols-3 divide-x divide-[#333333] border-t border-[#333333] items-stretch">
                <div className="p-4 sm:p-6 flex items-center gap-4 col-span-1">
                  <FeatureIcon className="w-6 h-6 text-[#cbe30b] flex-shrink-0" />
                  <span className="text-base sm:text-lg text-white font-medium">{item.feature}</span>
                </div>
                <div className="p-4 sm:p-6 flex items-center gap-3 col-span-1 bg-white/5">
                  <SentinelIcon className={`w-6 h-6 ${item.sentinel.color} flex-shrink-0`} />
                  <span className="text-sm sm:text-base text-[#e5e5e5]">{item.sentinel.text}</span>
                </div>
                <div className="p-4 sm:p-6 flex items-center gap-3 col-span-1">
                  <TraditionalIcon className={`w-6 h-6 ${item.traditional.color} flex-shrink-0`} />
                  <span className="text-sm sm:text-base text-[#666666]">{item.traditional.text}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Mobile Stacked Cards */}
        <div className="md:hidden space-y-4">
            {comparisonData.map((item, index) => {
              const FeatureIcon = item.icon;
              const SentinelIcon = item.sentinel.icon;
              const TraditionalIcon = item.traditional.icon;
              return (
                  <div key={index} className="bg-[#0d0d0d]/60 border border-[#333333] rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4 border-b border-[#333333] pb-3">
                        <FeatureIcon className="w-5 h-5 text-[#cbe30b]" />
                        <h3 className="text-lg font-bold text-white">{item.feature}</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                           <SentinelIcon className={`w-5 h-5 ${item.sentinel.color} flex-shrink-0 mt-0.5`} />
                           <div className="flex-1">
                               <p className="font-semibold text-white/90">Sentinel 1</p>
                               <p className="text-sm text-white/70">{item.sentinel.text}</p>
                           </div>
                        </div>
                         <div className="flex items-start gap-3">
                           <TraditionalIcon className={`w-5 h-5 ${item.traditional.color} flex-shrink-0 mt-0.5`} />
                           <div className="flex-1">
                               <p className="font-semibold text-white/50">Traditional Guard</p>
                               <p className="text-sm text-white/50">{item.traditional.text}</p>
                           </div>
                        </div>
                      </div>
                  </div>
              )
            })}
        </div>

      </div>
    </section>
  );
}
