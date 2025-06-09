import React, { useContext, useState } from 'react'
import {assets} from '../assets/asset'
import { Link, NavLink } from 'react-router-dom'
import { shopContext } from '../context/shopContext';
const navbar = () => {
const [visible, setVisible] = useState(false);

 const {setShowSearch, getCartCount } = useContext(shopContext);

  return (
    
<div className='flex items-center justify-between py-5 font-medium bg-slate-200'  >
<Link to={'/'}><h2 class="logo"> Clothing HUB</h2></Link>
<ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

  <NavLink to='/' className='flex flex-col items-center gap-1  '>
  <p>Home</p>
  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
  </NavLink>
  <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
  <p>Collection</p>
  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
  </NavLink>
  <NavLink to='/about' className='flex flex-col items-center gap-1 '>
  <p>About</p>
  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
  </NavLink>
  <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
  <p>Contact</p>
  <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
  </NavLink>
</ul>

<div className='flex items-center gap-6 mr-2 sm:mr-4 lg:mr-8'>
  <div onClick={()=> setShowSearch(true)} onDoubleClick={()=>setShowSearch(false)} className='w-5 cursor-pointer'>
  <i class="fa-solid fa-magnifying-glass" ></i>
  </div>
  <div className='group relative'>
     <div className='w-5 cursor-pointer'>
 <NavLink to='/login'><i class="fa-regular fa-user"></i></NavLink>
</div>
<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
    <p className='cursor-pointer hover:text-black'>My Profile</p>
    <p className='cursor-pointer hover:text-black'>Orders</p>
    <p className='cursor-pointer hover:text-black'>LogOut</p>
  </div>
</div>
  </div>
  <Link to='/cart' className='relative'>
  <i class="fa-solid fa-cart-shopping"></i>
  <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
  </Link>
     <div onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden '>
  <i class="fa-solid fa-bars" ></i>
  </div>
</div>
{/* sidebar menu  for small screen*/}
<div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
<div onClick={()=> setVisible(false)} className='flex flex-col text-gray-600 cursor-pointer'>
  <div className='flex items-center gap-4 p-3 bg-orange-500'>
    <i class="fa-solid fa-angle-left"></i>
    <p className='text-black'>Back</p>
  </div>
  <NavLink className='py-2 pl-6 border bg-slate-200 ' to='/'> Home</NavLink>
  <NavLink className='py-2 pl-6 border bg-slate-200' to='/collection'>Collection</NavLink>
  <NavLink className='py-2 pl-6 border bg-slate-200' to='/about'>About</NavLink>
  <NavLink className='py-2 pl-6 border bg-slate-200' to='/contact'>Contact</NavLink>
</div>
</div>

      </div>
    
  )
}

export default navbar
