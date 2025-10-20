
import React from 'react';

const media = [
  { type: 'video', src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/86ac83e5ff08ab81151980e38a9bbfe6/watch' },
  { type: 'video', src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/743c83236440a6d5d27f039c580f864e/watch' },
  { type: 'video', src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/ef2e9ca414e0e196f6e29173bd59deaa/watch' },
];

export default function SentinelAdvantageGallery() {
  const featuredVideo = media[0];
  const secondaryVideos = media.slice(1);

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
          {featuredVideo && (
            <div className="aspect-video bg-[#1a1a1a] overflow-hidden group">
              <video src={featuredVideo.src} controls playsInline className="w-full h-full object-cover">
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryVideos.map((item, index) => (
              <div key={index} className="aspect-video bg-[#1a1a1a] overflow-hidden group">
                <video src={item.src} controls playsInline className="w-full h-full object-cover">
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
