import React from 'react'

export default function Admin({isCompressed}) {
  return (
    <div className={`${'isCompressed'?'w-64':'w-72'}`}>
    <p className='text-[15px]'>this is admin page</p>
  </div>
  )
}
