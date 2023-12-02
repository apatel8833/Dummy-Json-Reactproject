import React, { useEffect, useState } from 'react'

import Spinner from '../Components/Spinner';


import User from '../Components/User';
import { getUsersData } from '../Services/apicall';

const Demo = () => {
 
    const [loading,setLoading]=useState(false);
    const [finalData,setfinaldata]=useState([]);
    const getData=async()=>{
        setLoading(true);
        try {
            const data=await getUsersData();
            setfinaldata(data);
        } catch (error) {
            console.log("error");
        }
     
        setLoading(false);
      }

      useEffect(()=>{
        getData();
      },[])

  return (
    <div>
          <div className='bg-gray-200 px-3 py-5 rounded-xl flex flex-col gap-4 font-bold'>
            Users data
        </div>
        {/* items  */}
        <div>
        <div className="w-3/4 min-w-[350px] mx-auto grid grid-cols-1 min-h-screen relative  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {
                loading? <Spinner/>:(

                  finalData?.length < 0 ? (
                    <div>
                      No data found
                    </div>
                  ):
                  (
                    finalData?.map((product)=>{

                     return <div key={product.id}>
                         {
                              <User product={product} />
                        }
                        
                      </div>
                    

                  })
                  )

                )
            }
     </div>;
        </div>
        
    </div>
  )
}

export default Demo;