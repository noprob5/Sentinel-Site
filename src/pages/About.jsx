
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Target, ShieldCheck, Users, Wrench, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section - Dark for header compatibility */}
      <section className="relative py-32 sm:py-48 px-4 sm:px-6 lg:px-8 bg-black text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#cbe30b]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[#cbe30b]/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            Engineered for <br/><span className="text-[#cbe30b]">Peace of Mind</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are engineers and innovators in Huntsville, Alabama, dedicated to creating the most reliable mobile surveillance solutions on the market.
          </p>
        </div>
      </section>

      {/* Manufacturing Video Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Precision in Every Component</h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Our state-of-the-art manufacturing process ensures every tower is built to withstand the harshest conditions.
            </p>
          </div>
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dl71jvny5/video/upload/v1755228549/IMG_0827_feaiwy.mov"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Light Theme */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-16">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#cbe30b]/20 rounded-full"></div>
                <div className="relative bg-white p-12 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a] rounded-xl">
                      <Target className="w-8 h-8 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Our Mission</h2>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To provide instant, reliable, and remote security for any property. We empower our clients with plug-and-play technology that is simple to deploy and powerful enough for the most demanding environments.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#cbe30b]/30 rounded-full"></div>
                <div className="relative bg-white p-12 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a] rounded-xl">
                      <ShieldCheck className="w-8 h-8 text-black" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Our Commitment</h2>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Every Sentinel Tower is proudly built in the USA and is fully NDAA compliant, ensuring the highest standards of quality and security for our government and commercial partners.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#cbe30b]/10 to-transparent rounded-2xl transform rotate-3"></div>
              <img 
                src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754873426/DSC05269_ksgvck.jpg"
                alt="Sentinel Tower in field" 
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">American Manufacturing Excellence</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From raw materials to finished products, every Sentinel Tower is built with precision and pride.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a] rounded-xl">
                  <Wrench className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-black">Precision Engineering</h3>
              </div>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Our state-of-the-art facility uses advanced laser cutting, precision welding, and rigorous quality control to ensure every tower meets our exacting standards.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Computer-controlled laser cutting for perfect precision</span>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Industrial-grade steel and aluminum construction</span>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Rigorous testing and quality assurance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-[#cbe30b]/10 to-transparent rounded-2xl transform -rotate-2"></div>
              <img 
                src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754615173/IMG_3048_c41gow.jpg" 
                alt="Manufacturing process showing tower components" 
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#cbe30b]/10 to-transparent rounded-2xl transform rotate-2"></div>
              <img 
                src="https://res.cloudinary.com/dl71jvny5/image/upload/v1754615173/IMG_3045_qyxquu.jpg" 
                alt="Tower assembly in manufacturing facility" 
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a] rounded-xl">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-black">Expert Craftsmanship</h3>
              </div>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Our skilled technicians bring decades of experience in defense and industrial manufacturing, ensuring every tower is built to last in the most demanding environments.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Hand-assembled by experienced technicians</span>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Comprehensive pre-deployment testing</span>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-[#cbe30b] mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Made in USA with NDAA compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">Performance By The Numbers</h2>
          <p className="text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
            While others focus on complexity, we focus on reliability. Our towers are designed to work flawlessly when it matters most.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a]"></div>
              <div className="text-5xl font-bold text-[#cbe30b] mb-4">99.9%</div>
              <div className="text-xl font-semibold text-black mb-2">Uptime</div>
              <div className="text-gray-600">Reliable operation in any condition</div>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a]"></div>
              <div className="text-5xl font-bold text-[#cbe30b] mb-4">15<span className="text-4xl">min</span></div>
              <div className="text-xl font-semibold text-black mb-2">Deployment Time</div>
              <div className="text-gray-600">From arrival to operation</div>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cbe30b] to-[#a8bf0a]"></div>
              <div className="text-5xl font-bold text-[#cbe30b] mb-4">24/7</div>
              <div className="text-xl font-semibold text-black mb-2">Expert Support</div>
              <div className="text-gray-600">Always here when you need us</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Ready to Secure Your Property?</h2>
          <p className="text-2xl text-gray-400 mb-12 leading-relaxed">
            Experience the difference that intelligent, reliable security can make for your business.
          </p>
          <Button asChild className="bg-[#cbe30b] hover:bg-[#a8bf0a] text-black px-12 py-6 text-xl font-bold shadow-2xl shadow-[#cbe30b]/25 group">
            <Link to={createPageUrl("Contact")}>
              Get Started Today
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
