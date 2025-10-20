
import React from 'react';

const media = [
  { src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/ac2b90fdf566c603343a11dc7347a9b3/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-bxtyzsbpql47g1fu.cloudflarestream.com%2Fac2b90fdf566c603343a11dc7347a9b3%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false' },
  { src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/cdf4d393d3a0cd9a311a0877c50d37a4/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-bxtyzsbpql47g1fu.cloudflarestream.com%2Fcdf4d393d3a0cd9a311a0877c50d37a4%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false' },
  { src: 'https://customer-bxtyzsbpql47g1fu.cloudflarestream.com/60f049a97d62f92c094ba90c4994469a/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-bxtyzsbpql47g1fu.cloudflarestream.com%2F60f049a97d62f92c094ba90c4994469a%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false' },
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
              <iframe
                src={item.src}
                className="w-full h-full"
                style={{ border: 'none' }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
