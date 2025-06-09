import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './title';

const CartTotal = () => {

const {currency, delivary_fee, getCartAmount} = useContext(shopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
<Title text1={'CART'} text2={'TOTALS'}/>
        </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>SubTotal</p>
          <p className='mr-10'>{currency} {getCartAmount()}.00</p>
        </div>

       <hr className=' w-[90%] sm:w-[90%] border-gray-400' />
       <div className='flex justify-between '>
        <p>Shipping Fee</p>
        <p className='mr-10'>{currency} {delivary_fee}</p>
       </div>
        <hr className='w-[90%] sm:w-[90%] border-gray-400' />
        <div className='flex justify-between'>
          <b>Total</b>
          <b className='mr-10'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivary_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
