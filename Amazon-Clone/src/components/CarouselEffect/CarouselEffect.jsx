import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {img} from './img/data'
import style from './CarouselEffect.module.css'

function CarouselEffect() {
  return (
    <>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {img.map((singleImage) => {
            return <img src={singleImage} />;
          })}
        </Carousel>
    
      <div className={style.hero}>  

      </div>
    </>
  );
}

export default CarouselEffect