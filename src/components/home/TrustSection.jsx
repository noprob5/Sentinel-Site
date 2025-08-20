import React from "react";

const certifications = [
  {
    src: "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154937/madeinusa2_xtt6ko.png",
    alt: "Made in USA",
    title: "Proudly American-Made",
    description: "Every Sentinel Tower is designed, engineered, and manufactured in the USA, ensuring the highest standards of quality, craftsmanship, and materials."
  },
  {
    src: "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154934/ndaa_uuk0be.png",
    alt: "NDAA Compliant",
    title: "NDAA Compliant",
    description: "Our hardware and software are fully compliant with government and military security requirements, making us a trusted partner for federal applications."
  },
  {
    src: "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154939/iso_hbxaie.png",
    alt: "ISO Certified",
    title: "ISO 9001 Certified",
    description: "Our manufacturing process is ISO 9001 certified, guaranteeing consistent quality, reliability, and continuous improvement in every tower we build."
  }
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
          {certifications.map((cert, index) => (
            <div key={index} className="text-center">
              <img 
                src={cert.src} 
                alt={cert.alt} 
                className="h-20 mx-auto mb-6 filter brightness-90 hover:brightness-100 transition-all duration-300"
              />
              <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
              <p className="text-[#666666] leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}