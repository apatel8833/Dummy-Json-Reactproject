import React, { useEffect } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdCloudDownload } from "react-icons/md";
import { displaydata } from '../utils/diplaydata';

const DisplayData = ({edit,setEdit,finalData,setFinalData,handleDownload,loading}) => {

  return (
    <div className= { `my-4  rounded-2xl ${edit?"bg-gray-700":"bg-gray-800"}`}>
            <div className='flex items-end px-4 gap-6 justify-end py-1'>
                <p className={`w-6 h-6 rounded-full text-yellow-200 text-xl flex items-center justify-center hover:bg-[#c33b3b]  hover:text-black ${edit?"bg-[#c33b3b]  text-white":"text-[#c33b3b] bg-transparent"} `}
                onClick={()=>{
                    setEdit(!edit);
                }}><CiEdit/></p>
                <p className={ `w-6 h-6 rounded-full text-xl flex items-center justify-center  hover:bg-green-50 hover:text-black ${edit?"bg-[#c33b3b]  text-white":"text-[#c33b3b] bg-transparent"} `} onClick={handleDownload}><MdCloudDownload/></p>
            </div>
           {
            loading ? <div className=' flex justify-center items-center h-[500px]'>
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>:  <textarea  value={finalData} placeholder={JSON.stringify(displaydata[0],null,4)} className={`w-full px-3 py-3 h-[500px] outline-none bg-transparent whitespace-pre
           read-only:bg-gray-700  ${edit?"text-yellow-500":" text-[#e38ae0] "}`} onChange={(e)=>{
                     edit &&  setFinalData(e.target.value)
             }}/>
           }
        </div>
  )
}

export default DisplayData;