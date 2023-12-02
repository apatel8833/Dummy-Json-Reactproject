import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { NavLink, useNavigate } from "react-router-dom/dist";
import { removeFromCart } from "../redux/Slices/cartSlice";

const NewCart = () => {

    const {cart}=useSelector((state)=>state.Cart);
  const [totleAmount,setTotleAmount]=useState(0);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const remove=(id)=>{
      dispatch(removeFromCart(id))
  }
  useEffect(()=>{
    function getSum(a,b)
    {
      
      return a+b.price;
    }
      setTotleAmount(cart.reduce(getSum,0));
      console.log("totleamount",typeof totleAmount)
  },[cart])
  return <div className=" w-[90%] lg:w-3/4 lg:min-w-[350px] mx-auto mt-8 ">

    {
      cart?.length<1 ?
      (
        <div className="w-full text-center mt-6 flex flex-col gap-4">
          <p className="text-black font-bold text-xl">Yout cart is empty!</p>
          <NavLink to={"/"}>
              <button className="bg-green-800 w-40 py-2 rounded-md text-white mx-auto hover:bg-green-950" >SHOP NOW</button>
          </NavLink>
         
        </div>
      ):
      (
        <div className="flex justify-between gap-20 flex-col lg:flex-row">
          {/* left part  */}
          <div className="w-full lg:w-[70%] flex flex-col gap-8">
          {
              cart.map((item,index) =>{
                return <CartItem key={item.id} item={item} remove={remove} itemIndex={index}/>
              })
            }
          </div>
          {/* right part  */}
          <div  className="flex flex-col w-full  lg:w-[30%] gap-7 justify-between">
            <div className="w-full">
                <h1 className="text-green-500 text-xl font-bold">YOUR CART</h1>
                <h1 className="text-4xl font-bold text-green-600">SUMMERY</h1>

                <p className="text-gray-700 font-bold">Total Item:{cart.length}</p>
            </div>
            <div className="w-full  flex flex-col gap-3 font-bold text-xl">
                <p className="text-gray-700 font-bold">Total Amount : {totleAmount}</p>
                <button className="bg-green-900 text-white py-2 px-24 rounded-md " onClick={()=>navigate("/")}>CheckoutNow</button>
            </div>
          </div>
          
        </div>
      )
    }


  </div>;
};

export default NewCart;
