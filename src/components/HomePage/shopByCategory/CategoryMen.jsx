import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryMen = () => {
  const shopByCate = [
    {
      img: '/images/t-shirt-1.webp',
      title: 'Oversize T-Shirts',
    },
    {
      img: '/images/t-shirt-2.webp',
      title: 'Shirts',
    },
    {
      img: '/images/t-shirt-3.webp',
      title: 'Sweatshirts',
    },
    {
      img: '/images/t-shirt-2.webp',
      title: 'Jeans',
    },
    {
      img: '/images/t-shirt-1.webp',
      title: 'Joggers',
    },
    {
      img: '/images/t-shirt-3.webp',
      title: 'Hoodies',
    },
    {
      img: '/images/t-shirt-2.webp',
      title: 'Full Sleeve T-shirts',
    },
    {
      img: '/images/t-shirt-1.webp',
      title: 'Cargos',
    },
  ];

  return (
    <div className="tw-container py-10">
      <h2 className="text-center text-lg lg:text-2xl mb-4">
        Shop By Category
      </h2>
      <div className='flex flex-wrap'>
        {shopByCate.map ((item, index) => (
          <div key={index} className='w-80 mb-4'>
            <div className="relative h-96 overflow-hidden">
              <Image
                src={item.img}
                width={400}
                height={400}
                alt={item.title}
                className="absolute h-full w-full object-cover"
              />
              <Link href="#" className='absolute bottom-0 left-0 w-full text-center text-white bg-slate-950/25 p-2 font-semibold'>{item.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMen;
