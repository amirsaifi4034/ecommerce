import React from 'react';
import styles from './Product.module.css';
import Image from 'next/image';
import {Col} from "react-bootstrap";

export const Product_item = (props) => {
  return (
    <>
    <Col sm={3}>
      <div className={styles.product_item}>
        <div className={styles.product_img}>
          <Image src={props.product.proImg} layout="fill" alt="Product"></Image>
        </div>
        <div className={styles.product_body}>
          <h6>{props.product.proTitle}</h6>
          <p><b>{props.product.proPrice}</b> <strike>{props.product.proPriceOff}</strike></p>
          <p>{props.product.proText}</p>
        </div>
      </div>
      </Col>
    </>
  )
}

export default Product_item;