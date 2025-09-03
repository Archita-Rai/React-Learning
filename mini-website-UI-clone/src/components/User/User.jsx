import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
  return (
    <div className=' bg-gray-700 flex justify-center items-center text-white'>
      <p className='py-12 px-12 text-2xl font-bold'>User : {userid}</p>
    </div>
  )
}

export default User
