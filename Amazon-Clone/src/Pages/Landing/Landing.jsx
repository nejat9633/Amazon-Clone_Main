import React from 'react'
import Layout from '../../components/Layout/Layout';
import CarouselEffect from '../../components/CarouselEffect/CarouselEffect';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';

function Landing() {
  return (
    
    <>
      <CarouselEffect />
      <Category />
      <Product />
    </>
  );
}

export default Landing