//import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Album  from '../pages/Album'
import Gigs from '../pages/Gigs'
import Playlist from '../pages/Playlist'
import Merch from '../pages/Merch'
import Upcoming from '../pages/Upcoming'
//import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import React, {useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import { AiOutLineClose} from 'react-icons/ai'

 const Navbar = () => {
    const [toggle, setToggle]  = useState(false)
//     const [nav, setNav] = useState(false)

//     const handleNav =()=>{
//         setNav(!nav )
//     }

  return (
    <>
    <div>
            <div className='flex h-28 w-1350px left-0  top-0 bg-white'>
                <div className='w-3/12 mx-6'>
                    <img className='mt-0 w-28 h-36  object-contain absolute z-10' src="/image/logo.png" alt=""/>
                </div>
                
                <div className='flex w-9/12'>
                    <div className='hidden md:flex space-x-5 w-3/12 '>
                        <img className='h-8 w-8 my-11'  src="/image/Ellipse 1.png" alt=""/>
                        <img className='h-8 w-8 my-11' src="/image/Ellipse 2.png" alt=""/>
                        <img className='h-8 w-8 my-11' src="/image/Ellipse 3.png" alt=""/> 
                    </div>

                    

                    <div className=' w-9/12 '>
                    <ul className='hidden md:flex space-x-5 text-center  font-sans text-lg font-extrabold h-8'>
                        <li className='my-11'><a className='ml-12' href="#">HOME</a></li>
                        <li className='my-11'><a className='ml-12' href="Album">ALBUMS</a></li>
                        <li className='my-11'><a className='ml-12' href="Gigs">GIGS</a></li>
                        <li className='my-11'><a className='ml-12' href="Playlist">PLAYLIST</a></li>
                        <li><img className="ml-12 my-11" src="/image/Line 1.png" alt=""/></li>
                        <li className='my-11'><a className='ml-12' href="Merch">MERCH</a></li>
                    </ul>
                    </div>
                    {/* <div onClick={handleNav} className='block sm:hidden z-10  '>
                        {nav ? (<AiOutlineClose size={30} />)
                         : (<AiOutlineMenu size={30} />)}
                        {/* <AiOutlineMenu size={30}/> */}
                    {/* </div>
                    <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 botton-0  flex justify-center items-center w-full h-screen   text-center ease-in duration-300' : 
                    'sm:hidden absolute top-0 left-[-100%] right-0 botton-0  flex justify-center items-center w-full h-screen   text-center ease-in duration-300'}>
                    <ul className='absolute text-black text-center'>
                        <li className='p-4 text-xl hover:text-gray-500'><Link  href="#">HOME</Link></li>
                        <li className='p-4 text-xl hover:text-gray-500'><Link  href="/Album">ALBUMS</Link></li>
                        <li className='p-4 text-xl hover:text-gray-500'><Link  href="/Gigs">GIGS</Link></li>
                        <li className='p-4 text-xl hover:text-gray-500'><Link  href="/Playlist">PLAYLIST</Link></li>
                        <li className='p-4 text-xl hover:text-gray-500'><Link  href="/Merch">MERCH</Link></li>
                    </ul>
                    </div> */} 
                    
                </div>
                {toggle ? (
                    <AiOutLineClose onClick={()=>setToggle(!toggle)} size={30} className='md:hidden' block/>
                ) : (
                    <FiMenu onClick={()=>setToggle(!toggle)} size={30} className='md:hidden' block/>
                )}
                
                
            </div>
            <div className='flex items-center relative'>
                    
                    {/* <img className='invisible sm:visible w-full top-36 opacity-55 bg-fixed' src='/image/bimg.png' alt=""/>
                 */}
            <img className=' bg-fixed object-cover bg-center sm:w-full xl:w-full lg:w-full top-36 opacity-55 ' src='/image/bimg.png' alt=""/>
                 
                    <div className='hidden md:block absolute text-center text-white space-x-5 top-0 mt-72 '>
                        <p className=' mx-96 font-medium text-5xl '>ROLL THE ROCKING MUSIC</p>
                        <h1 className=' mx-72 font-extrabold  text-8xl '>MONKEY TEMPLE</h1>
                        <a className='' href="Upcoming">
                        <button className='font-medium text-3xl border-4 rounded-md h-16 w-96  '>ENTER</button>
                        </a>
                    </div>
            
            </div>
    
            
    </div>
    </>
  )
}

export default Navbar