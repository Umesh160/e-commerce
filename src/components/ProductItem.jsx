import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {
    const {currency} = useContext(shopContext)
  return (
    
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div class="trend">
     <div>
        <img className='hover:scale-105 w-[95%] h-[280px] p-[18px] rounded-[20px]' src={image[0]} alt="" />
        </div> 
        <p className='ml-2 pt-1 pb1 text-sm text-black text-[18px] font-serif'>{name}</p>
        <p  class="ic" className='ml-2' >
          < div class="icon">
        <i class="fa-solid fa-star" ></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </div>
        </p>
        <p className=' ml-2 mb-2 text-sm font-medium'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem
