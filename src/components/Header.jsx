import React, { useContext, useState } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
function Header() {
  const {loggedUser} = useContext(UserContext)
  console.log(loggedUser);
  const [islogin,setislogin] = useState(false);
  const isOnline = useOnlineStatus();
  const cartItems  = useSelector(store=>store.cart.items);
  console.log(cartItems);
  return (
    <div className='flex justify-between px-10 items-center'>
      <img className='w-32 h-32' src="https://tse2.mm.bing.net/th?id=OIP.p8g02dm7amDVp6mam-HOvAHaHa&pid=Api&P=0&h=180" alt="" />
      <div className='flex gap-16 items-center'>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/grocery">Grocery</Link>
        <Link to="/cart" ><HiOutlineShoppingCart/> {cartItems && cartItems.length}</Link>
        <li>{loggedUser}</li>
        <button
        onClick={()=>{
          setislogin(!islogin)
        }}
        className='flex  items-center gap-4 bg-orange-400 px-10 py-2 rounded text-white'>{islogin ? "logout" : "login"}
        <span >{isOnline ? <div className='h-2 w-2 rounded-full bg-green-500'></div> :<div className='h-2 w-2 rounded-full bg-red-500'></div> }</span>
        </button>

      </div>
    </div>
  )
}

export default Header;
