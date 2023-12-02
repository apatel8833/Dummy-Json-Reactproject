import React, { useEffect, useState } from 'react'
import { MdArrowDropDownCircle } from "react-icons/md"
import 'swiper/css';
import ReactStarts from "react-rating-stars-component";
import { useParams } from 'react-router-dom'
import Spinner from '../Components/Spinner';
import {Swiper,SwiperSlide} from "swiper/react"
import { addToCart, removeFromCart } from "../redux/Slices/cartSlice";
import { CiHeart } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa"
import { getProductByid } from '../Services/apicall';

const ProductDetails = () => {
  const {id}=useParams();
  const [product,setProduct]=useState(null);
  const [loading,setLoading]=useState(false);
  const [flag,setFlag]=useState(false);
  const {cart}=useSelector((state)=>state.Cart);
  const [countImages,setcountImages]=useState(0);
  const getData=async()=>{
    setLoading(true);
    try {
      const data=await getProductByid(id);
    setProduct(data)
    setLoading(false);
    setcountImages(data.images.length);

    } catch (error) {
       console.log("There is some error");
    }
  }
  useEffect(()=>{
    getData();
  },[])
  const dispatch=useDispatch();
  const addToCartHandler=()=>{
         if(!flag){
             dispatch(addToCart(product));
             setFlag(true)
         }
         else{
             dispatch(removeFromCart(product.id));
             setFlag(false);
         }
  }
  useEffect(()=>{
             cart.length > 0 && cart.forEach((item) => {
                   if(item?.id===product?.id){
                    setFlag(true);
                    return;
                   }
             });
            console.log("okk",cart);
                 
  },[cart,product])
  return (
    <div className='w-full'>
   {
      loading ? <Spinner/> : 
      <div className='w-11/12 mx-auto py-5'>

      <div className='text-3xl text-gray-500'>Product Detail</div>
         <div className='flex gap-7 mt-7 flex-col md:flex-row'>
           <div className=' '>
                 <img src={product?.thumbnail} alt="" className='w-[400px] h-[300px] rounded-sm'  />
           </div>
           <div className=''>
                   <div className='flex gap-5'>
                   <h1 className='text-3xl font-bold text-red-600'>{product?.title}</h1>
                   <button className={`text-2xl text-red-400 `} onClick={addToCartHandler}>
                   {!flag && <CiHeart/>}
                   {flag && <FaHeart/> }
              </button>
                   </div>
                   <div className='text-gray-400'>{product?.description}</div>

                   <div className="flex gap-7 items-center text-gray-500">
                {product?.rating}
                <ReactStarts half={true} edit={false} count={5.0}  isHalf={true} value={product?.rating} size={24} activeColor={"#ffd700"}/>
              </div>

              <div>
              <div className='flex  gap-5 items-center mt-5'>
                 <div className='flex gap-1 items-center text-lg text-green-600 '>
                 <MdArrowDropDownCircle/>
                 <p>{product?.discountPercentage}%</p>
                 </div>
                 <div className='text-gray-800 font-bold text-xl'>
                  <p>{product?.price}</p>
                 </div>
                </div>
                <div className='flex gap-5 mt-4'>
                  <p>Brand-</p>
                  <p className='text-blue-700 font-bold'>{product?.brand}</p>
                 </div>
              </div>

           </div>
         </div>

         <div className='mt-2'>
          <h1 className='text-xl font-bold text-gray-700 mb-2'>Different view</h1>
          
          <Swiper  spaceBetween={22} breakpoints={{
             640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            668: {
              width: 668,
              slidesPerView: 3,
            },
          }}>
            {
              product?.images?.map((item,index)=>(
                          <SwiperSlide >
                            <img src={item} alt='' className='h-[200px]w-[300px]'/>
                          </SwiperSlide>
              ))
            }
          </Swiper>
         </div>
    </div>
   }
    </div>
  )
}

export default ProductDetails;