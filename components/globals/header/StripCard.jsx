import React from 'react';
import Link from 'next/link';
import {Stack} from 'react-bootstrap';
import styles from "./styles/Header.module.css";


export const StripCard = (props) => {
  return (
    <>
    {props.StripCardprops.map(stripsCard=>

      <Stack key={stripsCard} direction="horizontal" className={`${props.addClasse ? styles.socialHeader : ''}`} gap={3}>
      <div>
          <Link href="#"><a className="text-white"> {stripsCard.firstDiv} </a></Link>
      </div>
      <div>
        <Link href="#"><a className="text-white"> {stripsCard.secondDiv}</a></Link>
      </div>
      <div>
          <Link href="#"><a className="text-white"> {stripsCard.thirdDiv} </a></Link>
      </div>
      <div>
          <Link href="#"><a className="text-white"> {stripsCard.fourthDiv} </a></Link>
      </div>
      </Stack>

      )}
    </>
  )
}


export default StripCard