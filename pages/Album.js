import React from 'react'

const Album = () => {
  return (
    <>
    <div className='flex h-28 w-1350px left-0  top-0 bg-white'>
      <div className='w-3/12 mx-6'>
        <img className='mt-0 w-28 h-36 object-contain ' src="/image/logo.png" alt=""/>
      </div>
    </div>
          <h4 className='mt-16 mx-96 font-extrabold  text-6xl'>ALBUM RELEASES</h4>
            <div className='flex space-x-28'>
              <img className='ml-52 mt-20 h-96 w-72' src="./image/ab1.png" alt=""/>
              <img className=' mt-20 h-96 w-72' src="./image/ab2.png" alt=""/>
              <img className=' mt-20 h-96 w-72' src="./image/ab3.png" alt=""/>
            </div>
    </>
  )
}

export default Album