
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollingTruckSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Start from 100% of the viewport width (off-screen right)
  // End at -100% of the viewport width (off-screen left)
  // This ensures the truck travels the full width regardless of its own size.
  const x = useTransform(scrollYProgress, [0.1, 0.9], ['100vw', '-100vw']);

  return (
    <section ref={targetRef} className="relative h-[30vh] bg-[#0d0d0d] overflow-x-hidden">
      <div className="sticky top-0 h-full flex items-center">
        <motion.div style={{ x }} className="absolute left-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw]">
          <img
            src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/828efd39-c9cf-47b4-8627-b53c55af5700/public"
            alt="Sentinel tower being towed by a truck"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
