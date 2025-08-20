
import React from "react";

const features = [
  {
    title: "Solar Powered",
    description: "Deploy anywhere in under 15 minutes"
  },
  {
    title: "Battery Backup", 
    description: "100% solar-powered with battery backup"
  },
  {
    title: "AI Detection",
    description: "AI-powered threat detection and alerts"
  },
  {
    title: "NDAA Compliant",
    description: "NDAA compliant and made in the USA"
  }
];

export default function ProductBreakdown() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img 
              src="https://res.cloudinary.com/dl71jvny5/image/upload/v1755219320/S1_blank_mockup_back.pdf_ejnqah.png" 
              alt="Sentinel 1 Technical Breakdown"
              className="w-full max-w-lg h-auto"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-600 uppercase tracking-wider">
                Mobile Surveillance Platform
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                Sentinel 1
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                The Sentinel 1 is a revolutionary mobile surveillance platform that combines cutting-edge AI technology, 
                4K cameras, and complete energy independence in one deployable solution.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Days Runtime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">4K</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">HD Video</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">22ft</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Max Height</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
