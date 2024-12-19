import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {Banknote, Mail, Facebook, Instagram, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-black py-8 text-white">
      <div className="tw-container">
        <Image
          src="/images/next.svg"
          width={160}
          height={60}
          alt="Logo"
          className="bg-white p-2"
        />
        <div className="flex mt-6 justify-between">
          <div>
            <h5 className="ft-heading">Costumer Service</h5>
            <ul className="text-sm">
              <li className="mb-2"><Link href="#">Contact us</Link></li>
              <li className="mb-2"><Link href="#">Track Order</Link></li>
              <li className="mb-5"><Link href="#">Return Order</Link></li>
              <li>
                <Link href="#" className="flex gap-2">
                  <Banknote /> Cash On Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="ft-heading">Company</h5>
            <ul className="text-sm">
              <li className="mb-2"><Link href="#">About us</Link></li>
              <li className="mb-2"><Link href="#">Terms & Conditions</Link></li>
              <li className="mb-2"><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="ft-heading">CONNECT WITH US</h5>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#" className="flex items-center gap-1">
                  <Mail className="w-4 h-4" /> information@store.com
                </Link>
              </li>
            </ul>
            <h5 className="ft-heading mt-6 mb-3">Follow Us: </h5>
            <div className="flex gap-2">
              <Link href="#"><Facebook className='w-4 h-4' /></Link>
              <Link href="#"><Instagram className='w-4 h-4' /></Link>
              <Link href="#"><Linkedin className='w-4 h-4' /></Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-6 pt-6 text-center">
          <p className="mb-0">&copy; 2025, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
