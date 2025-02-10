import React from 'react'

export default function Student({isCompressed}) {
  return (
    <div className={`${'isCompressed'?'w-64':'w-72'}`}>
      <p className='text-[15px]'>this is student page</p>
    </div>
  )
}
