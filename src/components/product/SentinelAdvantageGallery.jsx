import React from 'react';

const featuredImage = 'https://res.cloudinary.com/dl71jvny5/image/upload/v1755118473/tower_in_desert_d54spo.png';
const secondaryImages = [
  'https://res.cloudinary.com/dl71jvny5/image/upload/v1753202104/IMG_0581_b2cuxf.png',
  'https://res.cloudinary.com/dl71jvny5/image/upload/v1753202103/06C134DF-92A6-4BFF-9756-E6D6D2D08E03_s0puu2.jpg'
];

export default function SentinelAdvantageGallery() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0d0d0d]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Sentinel Advantage <span className="text-[#cbe30b]">in Action</span>
          </h2>
          <p className="text-xl text-[#666666] mt-4 max-w-2xl mx-auto">
            Hybrid power solutions delivering reliable energy for mission-critical systems in challenging environments.
          </p>
        </div>
        <div className="space-y-4">
          <div className="aspect-video bg-[#1a1a1a] overflow-hidden group">
            <img src={featuredImage} alt="Sentinel Advantage Featured" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryImages.map((src, index) => (
              <div key={index} className="aspect-video bg-[#1a1a1a] overflow-hidden group">
                <img src={src} alt={`Sentinel Advantage Detail ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}