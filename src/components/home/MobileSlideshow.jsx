
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const SLIDES = [
  {
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b5bab9e5-bd1b-4545-b5a2-52f0aedfc300/public",
    title: "Sentinel 1",
    description: "Solar-powered surveillance platform for remote deployments"
  },
  {
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/62a2a532-d342-412f-d36e-cc7327a36000/public",
    title: "Sentinel Advantage",
    description: "Hybrid power system for mission-critical operations"
  },
  {
    image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/59f7962d-5209-406b-1046-2407e2ca8a00/public",
    title: "Sentinel Advantage+",
    description: "Heavy-duty platform for high-power equipment"
  }
];

const MobileSlideshow = () => {
  const [api, setApi] = React.useState();
  const [isPaused, setIsPaused] = React.useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (!api) return;

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // Start autoplay for desktop
      const startAutoplay = () => {
        intervalRef.current = setInterval(() => {
          if (!isPaused) {
            api.scrollNext();
          }
        }, 3000);
      };

      startAutoplay();

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [api, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="w-full py-12 bg-gradient-to-b from-black to-[#0d0d0d]">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1 md:-ml-2">
            {SLIDES.map((slide, index) => (
              <CarouselItem key={index} className="pl-1 md:pl-2 basis-[85%] md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-lg overflow-hidden">
                    <CardContent className="flex aspect-[16/10] items-center justify-center p-0">
                      <img
                        src={slide.image}
                        alt={`${slide.title} - ${slide.description}`}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default MobileSlideshow;
