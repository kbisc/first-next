import React from 'react'

const Upcoming = () => {
  return (
    <>
    <div className='flex h-28 w-1350px left-0  top-0 bg-white'>
      <div className='w-3/12 mx-6'>
        <img className='mt-0 w-28 h-36  object-contain' src="/image/logo.png" alt=""/>
      </div>
    </div>
          <h2 className='mt-8 mx-96 font-extrabold  text-6xl'>UPCOMING TOUR</h2>

        
    
        <div className='flex  space-x-28'>
        <img className='ml-64 mt-20 h-96 w-72' src="./image/upcoming.png" alt=""/>
    
          <div className=''>
            <h3 className='mt-32 font-bold text-3xl'>NEPAL MUSIC FESTIVAL</h3>
            <p className='mt-2 font-bold ml-8'>Melbourne, Sydney, Perth Canberra</p>
            <p className='mt-12 whitespace-pre '>Performers: Monkey temple, Trishala Gurung<br></br>                     & Apurva Tamang</p>
            
            <button className='mt-4 font-medium text-xl border-2 rounded-md h-16 w-72 border-zinc-400'>BOOK TICKETS</button>
    </div>
    </div>
    </>
  )
}
export default Upcoming