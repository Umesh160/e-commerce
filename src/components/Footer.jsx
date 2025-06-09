import React from 'react'
import { assets } from '../assets/asset'

const Footer = () => {
  return (
    
    <div>
      
<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  text-sm  '>
<div>
    <img src={assets.logo} className='mb-5 w-52 h-28' alt="" />
    <p className='w-full md:w-2/3 text-gray-600 text-justify'>
CLOTHING HUB:
Your one-stop destination for trendy, comfortable, and affordable fashion.
 From everyday essentials to standout styles,
 we bring you the best in modern clothing for every occasion.
    </p>
</div>

<div>
  <p className='text-xl font-medium mb-5'>COMPANY</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
<li>Home</li>
<li>About Us</li>
<li>Delivary</li>
<li>Privacy Policy</li>
  </ul>
</div>

<div>
  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
  <ul className='flex flex-col gap-1 text-gray-600'>
    <li>9866422788</li>
    <li>clothhub12@gmail.com</li>
  </ul>
  <img src={assets.media} className='mb-1 w-52 h-32' alt="" />
</div>

</div>
<hr className='w-full border-gray-400' />
<p className='py-5 text-sm text-center text-black'>Copyright 2025@ Clothing_Hub.com - All Right Reserved.</p>
<div>

</div>

    </div>
  )
}

export default Footer
