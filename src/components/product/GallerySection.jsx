
import React from 'react';

const media = [
  { type: 'video', src: 'https://res.cloudinary.com/dl71jvny5/video/upload/v1755217746/copy_C110EEDD-CCDB-4FBC-B240-A3E0FDDC2553_dsju8g.mov' },
  { type: 'video', src: 'https://res.cloudinary.com/dl71jvny5/video/upload/v1753203055/AI_Dome-Jun_18_11_01_PM_-_Jun_18_11_05_PM_ubmsmq.mov' },
  { type: 'video', src: 'https://res.cloudinary.com/dl71jvny5/video/upload/v1755217743/copy_ABCDED6B-CAB2-492B-8246-490AE8EF548D_q3cwaf.mov' },
];

export default function GallerySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0d0d0d]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            See Sentinel 1 <span className="text-[#cbe30b]">in Action</span>
          </h2>
          <p className="text-xl text-[#666666] mt-4 max-w-2xl mx-auto">
            Watch our towers in real-world deployments, delivering uncompromising security across diverse environments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {media.map((item, index) => (
            <div key={index} className="aspect-video bg-[#1a1a1a] rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300">
              <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
