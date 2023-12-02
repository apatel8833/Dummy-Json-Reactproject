import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { IoLocation } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { getProducts, getTodos, getUserByid } from '../Services/apicall';

// import { setCarat } from '../redux/Slices/cartSlice';
const UserDetails = () => {
    const [userData,setUserData]=useState(null);
    const {id}=useParams();
    const [loading,setLoading]=useState(false);
    const [tab,setTab]=useState(1);
    const [todos,setTodos]=useState([]);
    const [Cart,setCart]=useState(null);
    const getData=async()=>{
        setLoading(true);
        try {
            const user=await getUserByid(id);
            setUserData(user);
        } catch (error) {
             console.log("There is some error");
        }
        
        setLoading(false);
      }

      const getTodo=async()=>{
        setLoading(true);

        try {
            const todosData=await getTodos();
            const newdata=todosData.filter((item)=>item.userId==id);
             setTodos(newdata);
            
        } catch (error) {
             console.log("There is some error");
        }
        setLoading(false);
      }
      const getProduct=async()=>{
        setLoading(true);

        try {
            const Cartsdata=await getProducts();
            for(var item of Cartsdata)
            {
               if(item.userId==id){
                     setCart(item);
               }
            }
        } catch (error) {
             console.log("There is some error");
        }
    
        setLoading(false);
      }

      useEffect(()=>{
        getData();
        getTodo();
        getProduct();
      },[])
  return (
    <div>
        {
            loading ? <div>
                <Spinner/>
            </div>:<div className='w-11/12 mx-auto  py-10'>
                <div className=''>
                    {
                        userData ? <div className='flex flex-col md:flex-row  gap-10'>
                            <div className=' md:w-[30%] w-full'>
                   <div className='bg-gray-400   w-fit rounded-md  px-5 py-5'>
                   <img src={userData?.image} alt="" className='w-[100px] h-[100px]' />
                   </div>
                   <div className='mt-5 flex items-center gap-1'>
                    <p className='text-gray-400 text-[10px]'>WORK</p>
                    <div className='w-[70%] bg-gray-500 h-[1px]'></div>
                   </div>
                   <div className='mt-5'>
                    <h2 className='font-bold text-2xl'>{userData?.company?.title}</h2>
                    <p className='text-gray-500'>Department- <span> {userData?.company?.department}</span></p>
                    <div>
                        <h1 className='text-lg font-bold' >Company Details</h1>
                        <h3 className='text-gray-500'>Name- {userData?.company?.name}</h3>
                        <p className='text-gray-500'>Address- {userData?.address?.address}</p>
                        <p className='text-gray-500'>City- {userData?.address?.city}</p>
                        <p className='text-gray-500'>State- {userData?.address?.state}</p>
                    </div>
                    <div>
                        <h1 className='text-lg font-bold' >Bank Details</h1>
                        <p className='text-gray-500'>CardType- <span> {userData?.bank?.cardType}</span></p>
                        <p className='text-gray-500'>CardNumber- <span> {userData?.bank?.cardNumber}</span></p>
                        <p className='text-gray-500'>CardExpire- <span> {userData?.bank?.cardExprire}</span></p>
                    </div>
                   </div>

                </div>
                <div className='md:w-[70%]'>
                 <div className='flex justify-between'>
                 <div className='flex gap-4'>
                     <div className='flex flex-col'>
                     <h1 className='text-3xl font-semibold text-gray-800'>{userData?.firstName}{" "}{userData?.lastName}</h1>
                     <p className='text-blue-700 pl-5'>{userData?.username}</p>
                     </div>
                    <p className='flex items-center gap-2 text-sm text-gray-500 font-serif'>
                        <IoLocation/>
                        <p>{userData?.address?.city}</p>
                    </p>
                    </div>
                     <Link to={`/cart/${id}`}>
                     <div className='text-gray-600 text-3xl relative cursor-pointer'>
                        <BsCart4/>
                        <div className='absolute animate-bounce right-0 -top-3 bg-green-800 text-white w-5 h-5 rounded-full text-center justify-center flex items-center text-sm'>
                            {Cart ? Cart?.totalProducts:0}
                        </div>
                    </div>
                     
                     </Link>
                 </div>
                    <div>
                        <h1 className='font-bold text-xl text-gray-600 mt-6'>Wish list</h1>
                        <div className='flex flex-col gap-2'>
                            {
                                todos && todos.map((item,index)=>{
                                    return <div key={index} className='md:w-[500px] bg-gray-200 py-1 rounded-sm px-2 flex justify-between w-full'>
                                        <div className='w-[80%] '>{index+1}. {item.todo}</div>
                                        <div className={`${item.completed?"bg-green-500 text-white":"bg-gray-600 text-white "} rounded-md px-2 text-sm h-fit py-3`}>{item.completed ? "Completed":"Uncompleted"}</div>
                                    </div>
                                })
                            }
                        </div>

                    </div>
                    <div>
                        <div className='bg-gray-200 mt-9  py-3 px-10 flex gap-4 rounded-lg'>
                            <button className={`px-3 py-1  rounded-md text-slate-100 ${tab===1?"bg-gray-600":"bg-gray-300"}`} onClick={()=>setTab(1)}>Address</button>
                            <button className={`px-3 py-1  rounded-md text-slate-100 ${tab===2?"bg-gray-600":"bg-gray-300"}`} onClick={()=>setTab(2)}>About</button>
                        </div>
                        <div>
                            {
                                tab===1 ? <div className='py-6'>

                                    <div className='flex flex-col gap-3'>
                                        <h1 className='text-gray-700 font-bold'>Address</h1>
                                        
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>Street</p>
                                            <p>{userData?.address?.address}</p>
                                        </div>
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>City</p>
                                            <p>{userData?.address?.city}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <h1 className='text-gray-700 align-text-bottom font-bold'>Contact Information</h1>
                                        <div className='flex flex-col gap-3'>
                                            <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                                <p>Phone:</p>
                                                <p>{userData?.phone}</p>
                                            </div>
                                            <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                                <p>Email:</p>
                                                <p>{userData?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>:
                                <div className='flex flex-col gap-3'>
                                    <h1>About</h1>
                                    <div className='flex flex-col gap-3'>
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>Full Name</p>
                                            <p>{`${userData?.firstName} ${userData?.maidenName} ${userData?.lastname}`}</p>
                                        </div>
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>Age</p>
                                            <p>{userData?.age}</p>
                                        </div>
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>Gender</p>
                                            <p>{userData?.gender}</p>
                                        </div>
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>Date of Birth</p>
                                            <p>{userData?.birthDate}</p>
                                        </div>
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>Gender</p>
                                            <p>{userData?.bloodGroup}</p>
                                        </div>
                                        <div className='text-gray-500 text-sm flex justify-between w-[250px]'>
                                            <p>Height</p>
                                            <p>{userData?.height}</p>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            }
                        </div>
                    </div>

                </div>
                        </div>:<div>
                            No data found
                        </div>
                    }
                </div>
            </div>
        }

    </div>
  )
}

export default UserDetails;