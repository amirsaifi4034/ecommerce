import React from 'react';
import Link from 'next/link';
import {Stack} from 'react-bootstrap';


export const StripCard = () => {
  return (
    <>
        <Stack direction="horizontal" gap={3}>
            <div className="text-white">
                <Link href="mail: Support@gmail.com"><a className="text-white">Support@gmail.com</a></Link>
            </div>
            <div className="text-white"> | </div>
            <div className="text-white">
                <Link href="tel: 9990949278"><a className="text-white">9990949278</a></Link>
            </div>
        </Stack>
    </>
  )
}


export default StripCard