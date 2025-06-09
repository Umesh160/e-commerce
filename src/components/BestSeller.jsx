import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext (shopContext);
    const [BestSeller, setBestSeller] = useState([]);
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
     <div>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLER PRODUCTS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Loved by Many, Chosen for You.
            </p>
        </div>
{/**Renduring Products */}
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
    BestSeller.map((item, index)=>(
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
    ))
}
</div>
    </div>
  )
}

export default BestSeller
