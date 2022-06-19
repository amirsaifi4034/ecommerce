import React from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {AiOutlineShoppingCart, AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import {GrClose} from "react-icons/gr";
import {Nav, Form, ListGroup, FormControl} from "react-bootstrap";
import styles from "../header/styles/Header.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export const HeaderActionIcons = () => {

  const [cartShow, setcartShow] = useState(false);
  const [cartShowItem, setcartShowItem] = useState(false);
  const [cartItem, setcartItem] = useState(1);

  const cartButton = () => {
    setcartShow(!cartShow);
    setcartShowItem(!cartShow);
  }

  const cartButtonClose = () => {
    setcartShow(!cartShow);
    setcartShowItem(!cartShow);
  }

  const itemDecrease = () => {
    setcartItem(cartItem -1);
  }
  const itemIncrease = () => {
    setcartItem(cartItem +1);
  }

  return (
    <>
        <Nav className="justify-content-end">
              <Nav.Item>  
                <span onClick={cartButton} className={`${styles.headerActionIcons} mx-2`}>
                  <AiOutlineShoppingCart />
                </span>
                <div className={`${styles.cartMain} ${cartShow ? styles.cartActvieMain : '' } `}>
                    <div className={`${styles.myCartBox} ${cartShowItem ? styles.cartItemActive : '' }`}>
                        <div className={`${styles.CartItemHead} d-flex border-bottom py-3 px-4 align-items-center`}>
                            <h5>My Cart</h5>
                            <span onClick={cartButtonClose} className={styles.clossCart}> <GrClose /> </span>
                        </div>
                        <Form action="" className={styles.bodyForm}>
                            <div className={styles.cartItemList}>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" className="border-top-0">
                                  <div className="row">
                                    <div className="col-3">
                                      <Link href="/">
                                        <a>
                                          <Image src="/item1.jpg" className="rounded" width="100px" height="100px" alt="product Pic"></Image>
                                        </a>
                                      </Link>
                                    </div>
                                    <div className="col-9">
                                      <div className={styles.CartProduct}>
                                        <h6 className="fw-normal pe-4 position-relative m-0">Pinstripe Heveya® Linen Duvet Sheet Set <span className={styles.productClose}><GrClose /></span> </h6>
                                        <h6 className="fw-light"><small>King Size</small> </h6>
                                        <div className={styles.countPriceCart}>
                                          <div className={styles.countingCart}>
                                            <Button onClick={itemDecrease}> <AiOutlineMinus /> </Button>
                                              <FormControl className='text-center' type="text" defaultValue={cartItem} />
                                            <Button onClick={itemIncrease}> <AiOutlinePlus /> </Button>
                                          </div>
                                          <div className={styles.priceCart}>
                                          <small>₹1499.00</small>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </ListGroup.Item>
                            </ListGroup>
                            </div>
                        </Form>
                        <div className={`${styles.cartFooter} p-3 border-top`}>
                          <div className="row">
                            <div className="col-7">
                              <h6>SubTotal</h6>
                            </div>
                            <div className="col-5 text-end">
                              <h6>₹1499.00</h6>
                            </div>
                          </div>
                          <Button className="checkoutCart">Checkout</Button>
                        </div>
                    </div>
                </div>
              </Nav.Item>
              <Nav.Item>
                <span className={`${styles.headerActionIcons} mx-2`}>
                  <BiUserCircle />
                </span>
              </Nav.Item>
            </Nav>
    </>
  )
}


export default HeaderActionIcons