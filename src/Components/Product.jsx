import ReactStarts from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css"

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Product = (props) => {
  
  const product=props.product;
  const navigate=useNavigate();
  const {Cart}=useSelector((state)=>state.Cart);
  const dispatch=useDispatch();
  

  return (
         <div className="cursor-pointer" onClick={()=>{
             var ulrr=`/product/${product.id}`
             navigate(ulrr);
         }}>
          
             <div className=" hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 py-4 px-2 mt-10 ml-5  rounded-xl">
            <div className="flex gap-6">
              <h1 className="font-semibold text-center text-lg">{ product.title?.substring(0,17)}...</h1>
            </div>
            <div>
              <p className="text-[12px] text-gray-400">
                { product?.description?.substring(0,70)}...
              </p>
            </div>
            <div>
              <img src={ product?.thumbnail} className=" h-[180px]" alt="" />
            </div>
            <div className="w-full gap-4 text-sm">
            <div className="flex justify-between  w-full">
            <p> Brand-</p> <p>In Stock</p>
              </div>
              <div  className="flex justify-between  w-full">
              {product?.brand} <span> {product?.stock}</span>
              </div>
              </div>

              <div className="flex gap-7 items-center text-gray-500">
                {product?.rating}
                <ReactStarts half={true} edit={false} count={5.0}  isHalf={true} value={product?.rating} size={24} activeColor={"#ffd700"}/>
              </div>
            <div className="flex justify-between gap-8">
              <p className="text-green-500 items-center ">{product.price}</p>
              <p className="text-red-700 font-bold ">{product?.discountPercentage}% <span className="text-sm font-bold text-green-500">Dicount</span></p>
            </div>
        
          </div>
          
         </div>

  )
};

export default Product;
