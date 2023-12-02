import React from 'react'
import {Navbardata} from '../utils/Navbardata';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
  return (
    <div className='flex justify-between px-3 md:px-10 py-4 border-b-[1px] border-gray-400 flex-col md:flex-row'>
        <div>
          <h1 className='text-2xl font-serif'>dummy <span className='font-bold'>JSON</span></h1>
        </div>
        <div className='flex  gap-6 justify-end '>
            {
            
                Navbardata.map((item,index)=>{
                   return <Link to={item.url} key={index} className='hover:font-bold transition-all duration-200 hover:underline'>
                    {item.Name}
                   </Link>
                })
            }

        </div>
    </div>
  )
}

export default Navbar;