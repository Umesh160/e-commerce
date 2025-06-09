import React from 'react'
import { assets } from '../assets/asset'
import Title from './title';
const Features = () => {
  return (
    <div>
        <div className='text-center mt-16 text-3xl'>
          <Title text1={'OUR'} text2={'FEATURES'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Explore our featured products. A curated collection of standout pieces selected for their style, quality, and popularity.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
<div class="feature" >
<img src={assets.online_order} alt="" />
<p className='font-semibold text-center'>Online Order</p>
</div>

<div class="feature">
<img src={assets.saving}alt="" />
<p className='font-semibold text-center'>Money Saving</p>
</div>

<div class="feature">
<img src={assets.sale}  alt="" />
<p className='font-semibold text-center'>Big Sales</p>
</div>

<div class="feature">
<img src={assets.user}  alt="" />
<p className='font-semibold text-center'>User Friendly</p>
</div>

<div class="feature">
<img src={assets.service}  alt="" />
<p className='font-semibold text-center`'>24/7 Services</p>
</div>
        </div>
    </div>
  )
}

export default Features
