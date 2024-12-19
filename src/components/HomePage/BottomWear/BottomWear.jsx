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

const BottomWear = () => {
  const bottomWearData = [
    {
      img: '/images/bottom-1.jpg',
      title: 'Blue Mens Track Pant',
      discountPrice: '2100',
      actualPrice: '1599',
      discountPercent: '23.50',
    },
    {
      img: '/images/bottom-2.jpg',
      title: 'Mud Mens Track Pant',
      discountPrice: '2100',
      actualPrice: '1599',
      discountPercent: '23.50',
    },
    {
      img: '/images/bottom-3.jpg',
      title: 'Steel Cargo Denim Pant',
      discountPrice: '2100',
      actualPrice: '1599',
      discountPercent: '23.50',
    },
    {
      img: '/images/bottom-4.jpg',
      title: 'Machine Denim Cargo Pant',
      discountPrice: '2100',
      actualPrice: '1599',
      discountPercent: '23.50',
    },
    {
      img: '/images/bottom-1.jpg',
      title: 'Blue Mens Track Pant',
      discountPrice: '2100',
      actualPrice: '1599',
      discountPercent: '23.50',
    },
  ];
  return (
    <div className="tw-container py-10">
      <h2 className="text-center text-lg lg:text-2xl mb-4">
        Latest Bottomwear Collection
      </h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-3">
          {bottomWearData.map ((item, index) => (
            <CarouselItem
              key={index}
              className="pl-3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
                <Card className="rounded-none">
                  <CardContent className="p-0">
                    <div className="relative h-96 overflow-hidden">
                        <Image src={item.img} width={400} height={400} alt={item.title} className='absolute h-full w-full' />
                    </div>
                    <div className='p-3'>
                        {item.title} 
                        <p className='flex gap-2 text-sm'>
                            <span>₹{item.discountPrice}</span>
                            <del className='text-gray-600'>₹{item.actualPrice}</del>
                            <span className='text-red-600'>{item.discountPercent}% Off</span>
                        </p>
                    </div>
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BottomWear;
