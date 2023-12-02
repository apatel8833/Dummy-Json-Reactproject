import { useEffect, useState } from "react";
import CartItem from "../Components/CartItem";
import { useNavigate, useParams } from "react-router-dom/dist";
import Spinner from "../Components/Spinner";
import { getProducts } from "../Services/apicall";

const Cart = () => {

  const [totleAmount,setTotleAmount]=useState(0);
  const navigate=useNavigate();
  const [products,setProducts]=useState([]);
  const [total,setTotal]=useState(0);
  const [loading,setLoading]=useState(false);
  const {id}=useParams();
  const getProduct=async()=>{
    setLoading(true);
            try {
              const newdata=await getProducts();
              for(var item of newdata)
              {
                 console.log("fdfdsf",item)
                 if(item.userId==id){
                       setProducts(item.products);
                       setTotal(item.total);
                       setTotleAmount(item.discountedTotal)
                 }
              }
            } catch (error) {
                 console.log(error);
            }
    setLoading(false);

  }
  useEffect(()=>{
      getProduct();
  },[])
  const remove=(id)=>{
           for(var item of products){
            if(item.id===id){
              setTotleAmount(totleAmount - item.discountedPrice);
              setTotal(total - item.total);
            }
           }
           const newData=products.filter((item)=>item.id!==id);
           setProducts(newData);
           
  }
  return <div className=" w-[97%] lg:w-3/4 lg:min-w-[350px] mx-auto mt-8 ">

  {
       loading ? <div>
                  <Spinner></Spinner>
       </div>:<div>
        
       {
      products?.length<1 ?
      (
        <div className="w-full text-center mt-6 flex flex-col gap-4">

          <div className="flex justify-between gap-20 flex-col lg:flex-row">
          {/* left part  */}
          <div className="w-full lg:w-[70%] flex flex-col gap-8">
          <p className="text-black font-bold text-xl">Yout cart is empty!</p>
          </div>
          {/* right part  */}
          <div  className="flex flex-col w-full  lg:w-[30%] gap-7 justify-between">
            <div className="w-full">
                <h1 className="text-green-500 text-xl font-bold">YOUR CART</h1>
                <h1 className="text-4xl font-bold text-green-600">SUMMERY</h1>

                <p className="text-gray-700 font-bold">Total Item:{products?.length}</p>
            </div>
            <div className="w-full  flex flex-col gap-3 font-bold text-xl">
                <p className="text-gray-700 font-bold">Total Amount : {totleAmount} <span className="line-through">{total}</span></p>
                <button className="bg-green-900 text-white py-2 px-24 rounded-md " onClick={()=>navigate("/")}>CheckoutNow</button>
            </div>
          </div>
          
        </div>
         
        </div>
      ):
      (
        <div className="flex justify-between gap-20 flex-col lg:flex-row">
          {/* left part  */}
          <div className="w-full lg:w-[70%] flex flex-col gap-8">
          {
              products?.map((item,index) =>{
                return <CartItem key={item.id} item={item} remove={remove} itemIndex={index}/>
              })
            }
          </div>
          {/* right part  */}
          <div  className="flex flex-col w-full  lg:w-[30%] gap-7 justify-between">
            <div className="w-full">
                <h1 className="text-green-500 text-xl font-bold">YOUR CART</h1>
                <h1 className="text-4xl font-bold text-green-600">SUMMERY</h1>

                <p className="text-gray-700 font-bold">Total Item:{products?.length}</p>
            </div>
            <div className="w-full  flex flex-col gap-3 font-bold text-xl">
                <p className="text-gray-700 font-bold">Total Amount : {totleAmount} <span className="line-through">{total}</span></p>
                <button className="bg-green-900 text-white py-2 px-24 rounded-md " onClick={()=>navigate("/")}>CheckoutNow</button>
            </div>
          </div>
          
        </div>
      )
    }
       </div>
  }


  </div>;
};

export default Cart;
