import Link from 'next/link'
import React from 'react'

const Singletask = () => {
  return (
    <div className='flex mr-5 mb-5 flex-col w-80 h-96 overflow-y-hidden bg-slate-200 p-5'>
      <h4 className='mt-2 font-bold text-2xl'>Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat.</h4>
      <p className='mt-7 overflow-y-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis voluptatum placeat mollitia incidunt voluptas, esse cupiditate deleniti fugiat voluptates? Aspernatur </p>
     <Link href={`/tasks/${1}`}>
     <span className=' float-right text-red-600 hover:underline hover:cursor-pointer'>Read more...</span></Link>
    </div>
  )
}

export default Singletask
