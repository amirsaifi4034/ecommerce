import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const HomeBanner = () => {
  const HeroBanner = [
    {
      img: '/image/home-banner-1.jpg',
      alt: 'Hero Banner 1',
    },
    {
      img: '/image/home-banner-2.jpg',
      alt: 'Hero Banner 2',
    },
  ];
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {HeroBanner.map ((item, index) => (
          <CarouselItem key={index}>
            <Image
              src={item.img}
              width={1200}
              height={400}
              layout="responsive"
              alt="Hero Banner"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default HomeBanner;
