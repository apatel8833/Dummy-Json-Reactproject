import React from 'react'

const DifferentsFields = ({category,tab,unSelectedfields,setUnSelectedFields}) => {
  return (
    <div className='grid  py-10 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
    {
     category && category[tab-1].fields.map((item,index)=>(
         <div key={item.uni} className=' checkbox-wrapper-1 bg-gray-500 px-2 rounded-md py-2  '>
             
             <input id={item.uni} defaultChecked={true} className="substituted cursor-pointer" type="checkbox" aria-hidden="true" onChange={()=>{
                 if(unSelectedfields.includes(item.name)){
                     const newdata=unSelectedfields.filter((it)=>it!=item.name)
                     setUnSelectedFields(newdata);
                 }else{
                     const newdata=[...unSelectedfields,item.name]
                     setUnSelectedFields(newdata);
                 }
             }} />
             <label className=' text-sm md:text-lg capitalize cursor-pointer text-gray-900 '  htmlFor={item.uni}>{item.name}</label>
          
         </div>
     ))
    }
    
    </div>
  )
}

export default DifferentsFields;