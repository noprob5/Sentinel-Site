
import React from 'react';

const media = [
  { type: 'video', src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/1a485e6df4923b932d3ceaf8bcd9894d/watch' },
  { type: 'video', src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/5141f318a9de0242bdcb935fd4e35062/watch' },
  { type: 'video', src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/2806db334557476d23c625b1ce21f512/watch' },
];

// Helper function to convert Cloudflare Stream watch URL to iframe embed URL
const getCloudflareEmbedUrl = (watchUrl) => {
  // Cloudflare Stream embed URLs typically end with '/iframe'
  // The provided URLs end with '/watch', so we convert them.
  if (watchUrl.includes('/watch')) {
    return watchUrl.replace('/watch', '/iframe');
  }
  return watchUrl; // Return as is if format is unexpected
};

export default function SentinelAdvantagePlusGallery() {
  const mainMedia = media[0];
  const secondaryMedia = media.slice(1);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#0d0d0d]">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Sentinel Advantage+ <span className="text-[#cbe30b]">Power Platform</span>
          </h2>
          <p className="text-xl text-[#666666] mt-4 max-w-2xl mx-auto">
            Heavy-duty generator platforms engineered for the most demanding military and industrial applications.
          </p>
        </div>
        <div className="space-y-4">
          {mainMedia && (
            <div className="aspect-video bg-[#1a1a1a] overflow-hidden group">
              {mainMedia.type === 'video' ? (
                <iframe
                  src={getCloudflareEmbedUrl(mainMedia.src)}
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  title="Sentinel Advantage+ Main Video"
                ></iframe>
              ) : (
                // Fallback for image type, though not expected with current 'media' array
                <img src={mainMedia.src} alt="Sentinel Advantage+ Main" className="w-full h-full object-cover" />
              )}
            </div>
          )}
          {secondaryMedia.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {secondaryMedia.map((item, index) => (
                <div key={index} className="aspect-video bg-[#1a1a1a] overflow-hidden group">
                  {item.type === 'video' ? (
                    <iframe
                      src={getCloudflareEmbedUrl(item.src)}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      allowFullScreen
                      className="w-full h-full"
                      style={{ border: 'none' }}
                      title={`Sentinel Advantage+ Detail Video ${index + 1}`}
                    ></iframe>
                  ) : (
                    // Fallback for image type
                    <img src={item.src} alt={`Sentinel Advantage+ Detail ${index + 1}`} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
