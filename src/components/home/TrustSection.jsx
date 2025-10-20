
import React from "react";

const logos = [
  { src: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/6483168a-5903-4603-802c-77ceb9c85b00/public", alt: "NDAA Compliant" },
  { src: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/a7b1a214-93d5-4493-d819-87f7459ab000/public", alt: "Made in the USA" },
  { src: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/72786b4d-b496-48f9-78f9-fcdfd6f5cb00/public", alt: "ISO 9001" },
];

export default function TrustSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted & Certified</h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">We are committed to the highest standards of quality and security.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-20 mx-auto mb-6 filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
              {/* Removed h3 and p tags as new logo data does not contain title and description */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
