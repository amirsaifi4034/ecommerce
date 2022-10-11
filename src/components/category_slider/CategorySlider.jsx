import {SwiperSlide, Swiper} from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { CategoryCard } from './CategoryCard';
import { Container, Row, Col } from 'react-bootstrap';

export const CategorySlider = () => {
    const catItems = [
        {
            id: 0,
            img: '/images/westside.jpg',
            title: 'WESTSIDE'
        },
        {
            id: 1,
            img: '/images/women.jpg',
            title: 'WOMENSWEAR'
        },
        {
            id: 2,
            img: '/images/beauty.jpg',
            title: 'BEAUTY'
        },
        {
            id: 3,
            img: '/images/foot.jpg',
            title: 'FOOTWEAR'
        },
        {
            id: 4,
            img: '/images/mens.jpg',
            title: 'MENSWEAR'
        },
        {
            id: 5,
            img: '/images/kids.jpg',
            title: 'KIDSWEAR'
        },
        {
            id: 6,
            img: '/images/gadget.jpg',
            title: 'GADGETS'
        },
        {
            id: 7,
            img: '/images/watch.jpg',
            title: 'WATCHES'
        }
    ]
  return (
    <>
    <section class="py-5" style={{background: "#eee"}}>
        <Container>
          <Row>
            <Col md={12}>
              <Swiper
                slidesPerView={6}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay,Navigation]}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
                className="mySwiper"
              >
                {catItems.map(categoryItem => 
                    <SwiperSlide key={categoryItem.id}>
                        <CategoryCard cate={categoryItem} />
                    </SwiperSlide>
                )}
              </Swiper>
            </Col>
          </Row>
        </Container>
        </section>
    </>
  )
}
