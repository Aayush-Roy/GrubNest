import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

function Cart() {
    const cartItems = useSelector(store=>store.cart.items);
    // const store = useSelector(store=>store);
    // const cartItems = store.cart.items;
    const dispatch = useDispatch();
    const handleClearCart =()=>{
        dispatch(clearCart());
    }
  return (
    <div className='text-center p-10'>
        <div className='w-1/2 mx-auto'>
      <h1 className='text-2xl'>Cart</h1>
      <button 
      onClick={handleClearCart}
      className='bg-black px-8 py-2 rounded-lg text-white'>Clear Cart</button>
      {cartItems && cartItems.length===0 && <h1>Cart is Empty.</h1> }
      <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart
