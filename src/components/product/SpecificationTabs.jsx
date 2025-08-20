import React from "react";
import { AdvancedTabs } from "@/components/ui/AdvancedTabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, 
  Battery, 
  Wifi, 
  Gauge, 
  Ruler, 
  Weight,
  Thermometer,
  Shield
} from "lucide-react";

const specifications = {
  camera: [
    { label: "Resolution", value: "4K Ultra HD (3840 × 2160)", icon: Camera },
    { label: "Night Vision", value: "Up to 150ft IR Range", icon: Camera },
    { label: "Field of View", value: "360° Pan, 90° Tilt", icon: Camera },
    { label: "Zoom", value: "30x Optical, 12x Digital", icon: Camera },
    { label: "Frame Rate", value: "30fps @ 4K, 60fps @ 1080p", icon: Camera },
    { label: "Low Light", value: "0.01 Lux Minimum", icon: Camera }
  ],
  power: [
    { label: "Solar Panel", value: "400W Monocrystalline", icon: Battery },
    { label: "Battery Capacity", value: "200Ah Lithium-ion", icon: Battery },
    { label: "Backup Runtime", value: "7-10 Days (No Sun)", icon: Battery },
    { label: "Charging Time", value: "6-8 Hours (Full Sun)", icon: Battery },
    { label: "Power Consumption", value: "Average 50W Operation", icon: Battery },
    { label: "Weather Protection", value: "IP65 Rated Enclosure", icon: Shield }
  ],
  connectivity: [
    { label: "Cellular", value: "4G LTE / 5G Ready", icon: Wifi },
    { label: "Data Speed", value: "Up to 100 Mbps", icon: Wifi },
    { label: "Backup Connection", value: "Satellite (Optional)", icon: Wifi },
    { label: "Local Storage", value: "2TB NVR Built-in", icon: Wifi },
    { label: "Cloud Storage", value: "Unlimited (Subscription)", icon: Wifi },
    { label: "Remote Access", value: "Web & Mobile App", icon: Wifi }
  ],
  physical: [
    { label: "Tower Height", value: "20ft Extended, 8ft Lowered", icon: Ruler },
    { label: "Base Dimensions", value: "8ft × 5ft × 6ft", icon: Ruler },
    { label: "Total Weight", value: "2,800 lbs", icon: Weight },
    { label: "Operating Temp", value: "-40°F to 140°F", icon: Thermometer },
    { label: "Wind Rating", value: "Up to 120 mph", icon: Gauge },
    { label: "Setup Time", value: "Under 30 Minutes", icon: Gauge }
  ]
};

const SpecContent = ({ specs }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {specs.map((spec, index) => {
      const Icon = spec.icon;
      return (
        <Card key={index} className="bg-[#1a1a1a] backdrop-blur-sm border border-[#333333] hover:border-[#cbe30b]/30 transition-all duration-300 group">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-[#cbe30b]/20 text-[#cbe30b] group-hover:bg-[#cbe30b]/30 transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-[#666666] mb-1">
                  {spec.label}
                </div>
                <div className="text-white font-semibold">
                  {spec.value}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    })}
  </div>
);

export default function SpecificationTabs() {
  const tabs = [
    { id: 'camera', title: 'Camera', icon: Camera, content: <SpecContent specs={specifications.camera} /> },
    { id: 'power', title: 'Power', icon: Battery, content: <SpecContent specs={specifications.power} /> },
    { id: 'connectivity', title: 'Connectivity', icon: Wifi, content: <SpecContent specs={specifications.connectivity} /> },
    { id: 'physical', title: 'Physical', icon: Ruler, content: <SpecContent specs={specifications.physical} /> }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical <span className="text-[#cbe30b]">Specifications</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Detailed specifications and capabilities of the Sentinel 1 mobile surveillance tower.
          </p>
        </div>
        <AdvancedTabs tabs={tabs} layout="horizontal" />
      </div>
    </section>
  );
}