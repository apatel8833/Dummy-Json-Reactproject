import { useNavigate } from "react-router-dom";

const User = (props) => {
  
  const product=props.product;
  // const tab=props.tab;
  const navigate=useNavigate();
  return <div>
    
    {
        <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl cursor-pointer" onClick={()=>{
            const url= `/user/${product.id}`
               navigate(url)
        }} >
        <div>
          <h1 className="font-semibold  text-lg">{product.firstName}{" "}{product.lastName}</h1>
        </div>
        <div>
          <p className="text-[12px] text-green-500">
            <span className="text-gray-700">UserName-</span>{product.username}
          </p>
        </div>
        <div>
          <img src={product.image} className=" h-[180px]" alt="" />
        </div>
        <div className="flex justify-between gap-8">
          <p className="text-green-500 items-center "><span className="text-gray-600">Mobile</span> - {product.phone}</p>
        </div>
    
      </div>
    }
  </div>
   
};

export default User;
