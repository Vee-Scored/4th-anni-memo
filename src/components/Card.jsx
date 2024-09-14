import React from 'react'

const Card = ({description}) => {
  return (
    <div className=' w-full h-full p-3 '>
      <div className='bg-white bg-opacity-5 px-3 inline-flex py-2 backdrop-blur-sm text-xs text-red-100 rounded-lg shadow-lg'>{description}</div>
    </div>
  )
}

export default Card