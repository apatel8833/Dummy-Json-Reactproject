import React, { useEffect, useState } from 'react'
import { displaydata } from '../utils/diplaydata';
import DataGeneratePage from '../Components/DataGeneratePage';
import Advertize from '../Components/Advertize';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {
     const [displayData,setDisplayData]=useState({});

     useEffect(()=>{

        let index=-1;
        const id=setInterval(()=>{
            const temp=displaydata;
           index= index+1;
            setDisplayData(temp[index]);
        },4000)

        if(index>=displaydata.length){
                 clearInterval(id);
        }

     },[])
  return (
    <div>
        {/* section one  */}
         <section className='flex gap-10 md:gap-4 justify-between flex-col md:flex-row w-[95%] md:w-11/12 mx-auto py-10'>
            {/* left part */}
            <div className='md:w-[50%] px-2 flex flex-col md:justify-center md:items-center  gap-4'>
                <h1 className='text-4xl'>Dummy<span className='text-4xl font-bold'>JSON</span></h1>
                <p className='text-3xl font-serif md:text-center'>Get dummy/fake JSON data to use as placeholder in development or in prototype testing.</p>
                <div className='flex  gap-6'>
                  <Link to={'https://github.com/patelsatyamgit/DataDrivenReactApp'}>
                  <button className='px-4 py-2 bg-gray-800 text-white border-gray-800 border-2px rounded-xl hover:bg-gray-900' >View on GitHub</button>
                  </Link >
                   <Link to={'https://docs.google.com/document/d/1LQ9r118aYkt3kFbwmZO3Wq7m7BRgxyZS/edit'}>
                            <button className='px-4 py-2  border-gray-800 border-[2px] rounded-xl hover:bg-gray-800 hover:text-white'>Read Docs</button>  
                   </Link>
                </div>
            </div>
            {/* right part  */}
            <div className='md:w-[50%] px-1 transition-all duration-150'>
                <textarea  value={JSON.stringify(displayData,null,4)} className=' h-[400px] w-full outline-none resize-none font-serif transition-all duration-100 bg-[#444444] text-[#e8e538] px-3 py-3 rounded-lg scroll-p-8 croll-smooth select-none overflow-x-auto
                 whitespace-pre ' readOnly />
            </div>
         </section>
         {/* section two  */}
         <section >
            <DataGeneratePage flag={true}/>
         </section>
         {/* section three */}
         <section>
            <Advertize/>
         </section>
    </div>
  )
}

export default Home;