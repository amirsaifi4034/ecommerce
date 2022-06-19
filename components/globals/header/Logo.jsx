import Image from 'next/image';
import React from 'react';
import styles from "../header/styles/Header.module.css"
export const Logo = () => {
  return (
    <>
        <div className={`${styles.logo} position-relative`}>
            <Image src="/logo.svg" alt='logo' width="120px" height="80px"></Image>
        </div>
    </>
  )
}

export default Logo