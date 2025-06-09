import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/shopContext';
import { assets } from '../assets/asset';
import RelatedProducts from '../components/RelatedProducts';


const product = () => {
const {productId} = useParams();
const {products, currency, addToCart} = useContext(shopContext);
const [productData, setProductData] = useState(false);
const [image, setImage] = useState('');
const [size, setSize] = useState('');

const fetchProductData = async () => {
products.map((item)=>{
  if (item._id === productId) {
    setProductData(item);
    setImage(item.image[0])
    return null;
  }
})

}

useEffect(()=> {
fetchProductData();
},[productId, products])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/**Product Data */}
<div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>

{/*-----------Product Images----------- */}
<div className='flex-1 flex flex-col-reverse sm:flex-row'>
<div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[35%]  w-full'>
{
  productData.image.map((item, index)=>(
    <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-1 flex-shrink-0 cursor-pointer' alt="" />
  ))
}
</div>
<div className='w-full sm:w-[100%]' >
   <img className='w-full h-auto' src={image} alt="" />
</div>
</div>

{/*----product Information----------- */}

<div className='flex-1'>
<h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
<div  className='flex item-center gap-1 mt-2' class="icon">
  <i className='w-3 5 ' class="fa-solid fa-star" ></i>
<i className='w-3 5' class="fa-solid fa-star" ></i>
<i className='w-3 5' class="fa-solid fa-star" ></i>
<i className='w-3 5' class="fa-solid fa-star" ></i>
<i className='w-3 5' class="fa-solid fa-star" ></i>
</div>
<p >{currency}{productData.price}</p>
<p className='mt-5 text-gray-950 md:w-4/5 text-justify'>{productData.description }</p>
<div className='flex flex-col gap-4 my-8'>
<p>Select Size:</p>
<div className='flex gap-2'>
{productData.sizes.map((item, index)=>(
  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-200 rounded-md ${item=== size ? 'border-orange-500' : '' } `} key={index}>{item}</button>
))}
</div>
</div>

<button onClick={()=>addToCart(productData._id, size)} className='bg-orange-600 text-white px-3 py-2 text-sm active:bg-gray-400 rounded-lg'>Add To Cart&nbsp; <i class="fa-solid fa-cart-shopping"></i></button>
<hr className='mt-8 sm:w-4/5 border-gray-400' />
<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
<p>100% Original Products.</p>
<p>Cash on Delivery is available on the products.</p>
<p> Easy return and Exchange policy within 7 days.</p>
</div>
</div>
</div>

{/**-------------description and review--------- */}
<div className='mt-20'>
  <div className='flex'>
    <b className='border px-5 py-3 text-sm'>Description</b>
    <p className='border px-5 py-3 text-sm'>Review(122)</p>
  </div>
<div className='flex flex-col gap-4 border  px-6 py-6 text-sm text-gray-500'>
  <p>hhhhhhhhhhhhhhh</p>
  <p>yyyyyyyyyyyyyyy</p>
</div>
</div>
{/**-------------related products------------ */}
<RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default product
