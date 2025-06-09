import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/asset'
const hero = () => {
  return (
    <div className='flex flex-col sm:flex-row  border-gray-400 font-serif'> 
    <img src={assets.offer} alt="Background" className="absolute  w-[99%]  h-[86%] scale-x-[-1] object-cover  object-top -z-10"/>
      {/* hero left side */}
      <div className='w-full sm:w-1/2 flex items-end justify-center  py-10 sm:py-0'>
      <div className='text-[#414141]'>
<div className='flex items-center gap-2'>
<p className='w-8 md:w-11 h-[2px] bg-[#414141] md:mt-44' ></p>
<p className='font-medium text-lg md:text-base mt-2 md:mt-44 text-black text'> OUR BESTSELLERS</p>
</div>
<h1 className='text-4xl sm:py-3 lg:text-1xl leading-relaxed '>NEW ARRIVALS</h1>
<h1 className='text-3xl sm:py-3 lg:text-4xl leading-relaxed text-black'>We pick every item with care.</h1>
<div className='flex items-center gap-2'> 
  <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
  <button className='font-semibold bg-orange-500 text-sm md:text-base rounded-xl p-1 text-white'>Shop Now</button>
  </NavLink>
  <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
</div>
      </div>
      </div>
    </div>
    
  )
}

export default hero
