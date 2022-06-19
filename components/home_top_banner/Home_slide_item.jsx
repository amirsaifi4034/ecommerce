import React from 'react';
import Image from 'next/image';
import styles from './Home_slider.module.css';

export const Home_slide_item = (props) => {
  return (
    <>
      <div className={`${styles.home_slider} position-relative`}>
        <Image src={props.home_slideItem.slideImg} alt='HOME BANNER' layout='fill'></Image>
      </div>
    </>
  )
}

export default Home_slide_item