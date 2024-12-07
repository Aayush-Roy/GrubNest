import React from 'react'
import { cdn } from '../utils/constraints'
import { FcRating } from "react-icons/fc";

function RestaurantCards({info}) {
  // const {name,}
  // console.log(info)
  return (
    <div className='w-64 hover:shadow '>
      <div className='w- h-40 rounded-md'>

      <img className='h-full w-full  rounded-[20px] object-fit bg-blue-300' src={`${cdn+info.cloudinaryImageId}`} alt="" />
      </div>
    <div className='w-64 p-2'>
    <h1 className='font-black'>{info.name}</h1>
    <p className='flex items-center gap-2'><FcRating/> <p>{info.avgRating}</p></p>
    <p className='text-zinc-500 text-sm'>{info.cuisines.join(', ')}</p>
    <p>{info.costForTwo}</p>
    </div>
    </div>
  )
}

export const withPromotedLabel =(RestaurantCards)=>{
  return (props)=>{
    return(
      <div>
        <label htmlFor="" className='bg-green-500 px-2 py-1 rounded-md absolute'>Top Rated</label>
        <RestaurantCards {...props}/>
      </div>
    )
  }
}

export default RestaurantCards
