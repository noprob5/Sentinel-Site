import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const images = [
  "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154765/IMG_9523_2_xkdffv.jpg",
  "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154763/IMG_9619_fsjgru.jpg",
  "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154761/IMG_0354_zum8rp.jpg",
  "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154760/shipping_container_shot_fz9vpv.png",
  "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154758/IMG_9616_dxvw4g.jpg",
  "https://res.cloudinary.com/dl71jvny5/image/upload/v1753154757/IMG_9623_cwcqux.jpg",
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
            {images.map((src, index) => (
              <CarouselItem key={index} className="pl-1 md:pl-2 basis-[85%] md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 rounded-lg overflow-hidden">
                    <CardContent className="flex aspect-[16/10] items-center justify-center p-0">
                      <img src={src} alt={`Sentinel Tower in action ${index + 1}`} className="w-full h-full object-cover" />
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