import React from 'react';
// import components
import HeroSection from '@/components/demo/HeroSection';
import Schedule  from '@/components/demo/Schedule';

function Demo({ params} : { params : {product? : string[]}}) {
  // const {product} = params;
  const product:any  = params.product ? decodeURIComponent(params.product[0]) : undefined;
  
  
  // console.log(product)
  return (
    <>
      <HeroSection key={product || 'default'}  />
      {product ? <Schedule product={product}/> : <Schedule /> }
      
    </>
  )
}

export default Demo;