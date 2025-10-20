import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function WhySentinelSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Our Mission and Headline */}
        <div className="lg:pr-8">
          <p className="text-base font-semibold leading-7 text-black uppercase">
            <span className="border-b-4 border-[#cbe30b] pb-1">Our Mission</span>
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
            Empowering Mission-Critical Technology, Anywhere.
          </h2>
        </div>

        {/* Right Column: Original Text Content */}
        <div>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            The modern operational landscape demands that technology can be deployed instantly, regardless of location. At Sentinel, we build the ruggedized mobile platforms that power and elevate these critical systems.
          </p>
          <p className="text-lg leading-8 text-gray-700 mb-8">
            We exist to ensure that military, law enforcement, and security professionals have the capabilities they need, exactly where they need them.
          </p>

          <div className="mt-8">
            <Link 
              to={createPageUrl("About")} 
              className="inline-flex items-center gap-x-2 text-base font-semibold leading-7 text-black hover:text-gray-700 group"
            >
              Learn more about our company 
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}