import React from 'react'
import Image from 'next/image'

const Error = () => {
  return (
    <div className='text-center py-10'>
     <h1 className='text-3xl font-bold text-orange-600 py-10'>Something went wrong.</h1>
     <div className='flex justify-center'><Image src={"/images/not_found.png"} width={400} height={400}/></div>
     
    </div>
  )
}

export default Error