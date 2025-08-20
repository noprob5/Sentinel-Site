
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Camera, Maximize, ZoomIn, ArrowRight } from 'lucide-react';

export default function SolutionsCapabilityLiveVideo() {
  return (
    <div className="bg-[#0d0d0d]">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1528994222123-2a5438a44c77?q=80&w=2070&auto=format&fit=crop')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-base font-semibold text-[#cbe30b] uppercase tracking-wider">Capability: Intelligent Surveillance</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            360° Live PTZ Video
          </h1>
          <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto">
            Take direct control of your site's security. Our advanced Pan-Tilt-Zoom (PTZ) camera gives you a commanding, 360-degree view of your entire property, accessible from any device.
          </p>
          <div className="mt-10">
            <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-8 py-3 text-lg font-semibold">
              <Link to={createPageUrl("Contact")}>Request a Live Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Your Eye in the Sky</h2>
              <p className="text-lg text-[#666666]">
                A fixed camera only shows you one angle. Our PTZ camera, mounted on a 22-foot mast, puts you in the driver's seat. You can look in any direction, follow a subject, or zoom in on critical details, all in real-time from our mobile app or web portal.
              </p>
              <ul className="space-y-3 text-[#e5e5e5]">
                <li className="flex items-start"><Camera className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Get complete situational awareness without blind spots.</span></li>
                <li className="flex items-start"><Camera className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Respond to incidents by visually tracking suspects or vehicles.</span></li>
                <li className="flex items-start"><Camera className="w-5 h-5 text-[#cbe30b] mr-3 mt-1 flex-shrink-0" /><span>Check on site progress, deliveries, or staff from anywhere.</span></li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop" alt="Professional security camera with advanced optics" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Optics, Intuitive Control</h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto mb-12">
                We combine best-in-class hardware with a user-friendly interface.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Maximize className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Full 360° Pan</h3>
                    <p className="text-[#666666]">Rotate the camera endlessly in any direction to survey your entire perimeter without ever hitting a hard stop.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <ZoomIn className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Long-Range Optical Zoom</h3>
                    <p className="text-[#666666]">Zoom in hundreds of feet to capture license plates, faces, and other critical details without sacrificing image quality.</p>
                </div>
                <div className="p-8 bg-[#0d0d0d] rounded-lg">
                    <Camera className="w-10 h-10 text-[#cbe30b] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Preset Patrols</h3>
                    <p className="text-[#666666]">Create a custom "guard tour" that automatically moves the camera between key points of interest on your property.</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">See What You've Been Missing</h2>
            <p className="text-xl text-[#666666] mb-8">
                Take control of your security with a dynamic, responsive surveillance system.
            </p>
            <Button asChild className="bg-white hover:bg-gray-200 text-black px-8 py-3 text-lg font-semibold">
                <Link to={createPageUrl("Sentinel1")}>See Full Technical Specs <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
