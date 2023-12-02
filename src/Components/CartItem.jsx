import {AiFillDelete} from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { toast } from "react-hot-toast";
import { removeFromCart } from '../redux/Slices/cartSlice';
const CartItem = (props) => {
  const item=props.item;
  const dispatch=useDispatch();
  return <div>

    <div className='w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-2'>
      {/* left side  */}
      <div className='md:w-[30%] w-full'>
            <img src={item.thumbnail} className='h-[180px] w-[200px] rounded-md mx-auto' alt="" />
      </div>
      {/* right side */}
      <div className='md:w-[70%] w-full flex flex-col gap-4'>
        <h1 className='font-semibold text-xl'>{item.title}</h1>
       
        <div className='flex justify-between'>
         <p className='text-green-500 font-bold'>{item.price}</p>
         <button className='text-red-700 bg-red-300 rounded-full w-8 h-8 flex items-center justify-center text-sm' onClick={()=>{
          props.remove(item.id);
         }} >
                 <AiFillDelete/>
         </button>
          
        </div>
        <div className='w-full h-[2px] bg-gray-600 mt-5'></div>

      </div>
    </div>

  </div>;
};

export default CartItem;
