import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const err =  useRouteError()
  console.log(err)
  return (
    <div className='m-auto w-1/2 mt-[50vh] h-auto'>
      <h1>OOPS!!</h1>
      <h2>Something Went Wrong!!</h2>
      <p className='text-4xl'>{err.status}: {err.statusText}</p>
    </div>
  )
}

export default Error
