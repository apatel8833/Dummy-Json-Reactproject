import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import Spinner from '../Components/Spinner';


import Product from '../Components/Product';
import {productCategory} from '../utils/productCategory';
import "../App.css"
import { getProduct } from '../Services/apicall';

const DisplayProduct = () => {
 
    const [loading,setLoading]=useState(false);
    const [loading1,setLoading1]=useState(false);
    const [finalData,setfinaldata]=useState([]);
    const [category,setCategory]=useState("smartphones");
    const [filteredData,setFilteredData]=useState([]);
    const getData=async()=>{
        setLoading(true);
        setLoading1(true);
        try {
            const json=await getProduct();
            setfinaldata(json);
            const data=json?.filter((item)=>item.category === category);
            setFilteredData(data); 
        } catch (error) {
             console.log("There is some error");
        }
      
        
        setLoading(false);
        setLoading1(false)

       
      }
      const filterData=()=>{
        setLoading1(true);
        const data=finalData.filter((item)=>item.category === category);
        setFilteredData(data);
        setLoading1(false);
      }
 
      useEffect(()=>{
        getData();
      },[])

      useEffect(()=>{
          filterData();
        // console.log(category);
      },[category])
      useEffect(()=>{
      },[filteredData])

  return (
    <div>
     

     <div>
     <div className='bg-gray-200 px-3 py-5 rounded-xl flex flex-col gap-4 font-bold'>
          <p>  Filtered Product</p>
          <div>
            <select onChange={(e)=> setCategory(e.target.value)} className='text-gray-500 px-2 py-2'>
                {
                    productCategory.map((item,index)=>(
                        <option value={item.category} key={index} className='text-gray-600' >{item.name}</option>
                    )

                    )
                }
            </select>
          </div>
        </div>
        {/* items  */}
        <div>
        <div className="w-3/4 min-w-[350px] mx-auto grid grid-cols-1 min-h-screen relative  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {
                loading1? <Spinner/>:(

                  filteredData.length < 0 ? (
                    <div>
                      No data found
                    </div>
                  ):
                  (
                    filteredData.map((product)=>{

                     return <div key={product.id}>
                         {
                              <Product product={product} />
                        }
                        
                      </div>
                    

                  })
                  )

                )
            }
     </div>;
        </div>
     </div>

     <div>
     <div className='bg-gray-200 px-3 py-5 rounded-xl flex flex-col gap-4 font-bold'>
            All Products
        </div>
        {/* items  */}
        <div>
        <div className="w-3/4 min-w-[350px] mx-auto grid grid-cols-1 min-h-screen relative  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {
                loading? <Spinner/>:(

                  finalData.length < 0 ? (
                    <div>
                      No data found
                    </div>
                  ):
                  (
                    finalData.map((product)=>{

                     return <div key={product.id}>
                         {
                              <Product product={product} />
                        }
                        
                      </div>
                    

                  })
                  )

                )
            }
     </div>;
        </div>
     </div>
        
    </div>
  )
}

export default DisplayProduct;