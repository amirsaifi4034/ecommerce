import React from 'react';
import Product_item from './Product_item';
import {Container, Row, Col} from 'react-bootstrap';

export const Product_category = () => {

  const Products = [
    {
      id: 0,
      proImg: "/item1.jpg",
      proTitle: "Heveya® Bamboo Sheets Bundle",
      proPrice: "$399",
      proPriceOff: "$450",
      proText: "Snuggle between these luxuriously soft, silky & smooth fitted and duvet sheets. Made with 100% bamboo lyocell - naturally hypoallergenic, breathable and temperature regulating."
    },
    {
      id: 1,
      proImg: "/item1.jpg",
      proTitle: "Heveya® Bamboo Sheets Bundle",
      proPrice: "$399",
      proPriceOff: "$450",
      proText: "Snuggle between these luxuriously soft, silky & smooth fitted and duvet sheets. Made with 100% bamboo lyocell - naturally hypoallergenic, breathable and temperature regulating."
    },
    {
      id: 2,
      proImg: "/item1.jpg",
      proTitle: "Heveya® Bamboo Sheets Bundle",
      proPrice: "$399",
      proPriceOff: "$450",
      proText: "Snuggle between these luxuriously soft, silky & smooth fitted and duvet sheets. Made with 100% bamboo lyocell - naturally hypoallergenic, breathable and temperature regulating."
    },
    {
      id: 3,
      proImg: "/item1.jpg",
      proTitle: "Heveya® Bamboo Sheets Bundle",
      proPrice: "$399",
      proPriceOff: "$450",
      proText: "Snuggle between these luxuriously soft, silky & smooth fitted and duvet sheets. Made with 100% bamboo lyocell - naturally hypoallergenic, breathable and temperature regulating."
    }
  ]
  return (
    <>
     <Container className="py-2 py-sm-5">
        <Row>
          {Products.map(prodcutCard => 
            <Product_item key={prodcutCard.id} product={prodcutCard} />
          )}
       </Row>
     </Container>
    </>
  )
}

export default Product_category;