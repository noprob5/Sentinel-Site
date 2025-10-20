
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Battery, Zap, Fuel, ArrowRight } from "lucide-react";

const solutions = [
  {
    name: "Sentinel 1",
    description: "Solar + lithium battery platform for surveillance, communications, and light radar",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b5bab9e5-bd1b-4545-b5a2-52f0aedfc300/public",
    icon: Battery,
    specs: {
      power: "400-800W Solar",
      battery: "1,500Ah Lithium",
      generator: "Shore Power Only",
      load: "2kW"
    },
    url: createPageUrl("Sentinel1")
  },
  {
    name: "Sentinel Advantage",
    description: "Hybrid solar + battery + generator platform for higher-draw equipment",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/62a2a532-d342-412f-d36e-cc7327a36000/public",
    icon: Zap,
    specs: {
      power: "400-800W Solar",
      battery: "1,500Ah Lithium",
      generator: "3kW Auto-Start",
      load: "3kW"
    },
    url: createPageUrl("SentinelAdvantage")
  },
  {
    name: "Sentinel Advantage+",
    description: "Heavy-duty generator platform for radar, EW systems, and industrial applications",
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/59f7962d-5209-406b-1046-2407e2ca8a00/public",
    icon: Fuel,
    specs: {
      power: "No Solar",
      battery: "No Battery Bank",
      generator: "20kW Primary",
      load: "20kW"
    },
    url: createPageUrl("SentinelAdvantagePlus")
  }
];

export default function SolutionsProductLine() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our <span className="border-b-4 border-[#cbe30b] pb-1">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scalable power and integration platforms designed to match your mission requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:border-[#cbe30b] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white">
                  <img 
                    src={solution.image} 
                    alt={solution.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      solution.name !== 'Sentinel Advantage+' ? 'object-top' : ''
                    }`}
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#cbe30b]/20">
                      <Icon className="w-6 h-6 text-[#cbe30b]" />
                    </div>
                    <h3 className="text-2xl font-bold text-black group-hover:text-[#cbe30b] transition-colors duration-300">
                      {solution.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Solar Power</span>
                      <span className="text-black font-medium">{solution.specs.power}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Battery Bank</span>
                      <span className="text-black font-medium">{solution.specs.battery}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-500 text-sm">Generator</span>
                      <span className="text-black font-medium">{solution.specs.generator}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-500 text-sm">Max Load</span>
                      <span className="text-black font-medium">{solution.specs.load}</span>
                    </div>
                  </div>

                  <Button asChild className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black font-semibold">
                    <Link to={solution.url}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-4 sm:p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Quick Comparison</h3>
          
          {/* Desktop Table */}
          <div className="overflow-x-auto hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-500 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-black font-medium">Sentinel 1</th>
                  <th className="text-center py-4 px-4 text-black font-medium">Sentinel Advantage</th>
                  <th className="text-center py-4 px-4 text-black font-medium">Sentinel Advantage+</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-600">Solar Power</td>
                  <td className="py-4 px-4 text-center text-black">400-800W</td>
                  <td className="py-4 px-4 text-center text-black">400-800W</td>
                  <td className="py-4 px-4 text-center text-black">None</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-600">Battery Storage</td>
                  <td className="py-4 px-4 text-center text-black">1,500Ah Lithium</td>
                  <td className="py-4 px-4 text-center text-black">1,500Ah Lithium</td>
                  <td className="py-4 px-4 text-center text-black">None</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4 text-gray-600">Generator</td>
                  <td className="py-4 px-4 text-center text-black">Shore Power Only</td>
                  <td className="py-4 px-4 text-center text-black">3kW Auto-Start</td>
                  <td className="py-4 px-4 text-center text-black">20kW Primary</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-600">Max Continuous Load</td>
                  <td className="py-4 px-4 text-center text-black">2kW</td>
                  <td className="py-4 px-4 text-center text-black">3kW</td>
                  <td className="py-4 px-4 text-center text-black">20kW</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {solutions.map(solution => (
              <div key={solution.name} className="border border-gray-200 p-4 bg-gray-50/50">
                <h4 className="font-bold text-lg mb-4 text-center text-black">{solution.name}</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b"><span className="text-gray-600">Solar Power</span><span className="text-black font-medium">{solution.specs.power}</span></div>
                  <div className="flex justify-between items-center py-2 border-b"><span className="text-gray-600">Battery Storage</span><span className="text-black font-medium">{solution.specs.battery}</span></div>
                  <div className="flex justify-between items-center py-2 border-b"><span className="text-gray-600">Generator</span><span className="text-black font-medium">{solution.specs.generator}</span></div>
                  <div className="flex justify-between items-center py-2"><span className="text-gray-600">Max Continuous Load</span><span className="text-black font-medium">{solution.specs.load}</span></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              All models feature rack mounts for networking equipment, configurable payload space, and rapid deployment design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
