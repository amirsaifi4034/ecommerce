import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Heart, ShoppingCart, Search } from 'lucide-react';
import { Input } from "@/components/ui/input"
import LoginModal from '../Modals/LoginSignUp/LoginModal';

const Header = () => {
  return (
    <div className="tw-container">
        <div className="flex justify-between py-6">
            <Link href="#"><Image src="/images/next.svg" width={120} height={60} alt="Logo" /></Link>
            <div className='relative w-3/5'>
                <span className="cursor-pointer absolute p-3"><Search className='h-4 w-4' /></span>
                <Input type="search" placeholder="Search" className="ps-12 bg-gray-100" />
            </div>
            <ul className='flex gap-6'>
                <li className='cursor-pointer'>
                  <LoginModal />
                </li>   
                <li className='cursor-pointer'><Heart /></li>   
                <li className='cursor-pointer'><ShoppingCart /></li> 
            </ul>
        </div>
    </div>
  )
}

export default Header