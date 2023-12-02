import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


const initialState={
    cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
    total:localStorage.getItem("total")?JSON.parse(localStorage.getItem("total")):0,
    totalItems:localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")):0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload;
            const index=state.cart.findIndex((item)=> item.id===product.id);


            if(index>=0){
                //if course already present
                toast.error("Product alread in cart");
                return
            }

        
            //push data

            state.cart.push(product);
            //update total and totalitem
            state.total++;
            state.totalItems=parseInt(state.totalItems) + +product.price;

            //updating to localstorage
            localStorage.setItem("cart",JSON.stringify(state.cart));
            localStorage.setItem("total",JSON.stringify(state.total));
            localStorage.setItem("totalItems",JSON.stringify(state.totalItems));
             toast.success("Product Added to Cart")
     
        },
        removeFromCart:(state,action)=>{
            const courseId=action.payload;
            const index=state.cart.findIndex((item)=> item.id === courseId);
             console.log("vfff",courseId)
            if(index>=0){
                state.total--;
                state.totalItems-=state.cart[index].price;
                state.cart.splice(index,1);

                // update local Storage

                localStorage.setItem("cart",JSON.stringify(state.cart));
                localStorage.setItem("total",JSON.stringify(state.total));
                localStorage.setItem("totalItems",JSON.stringify(state.totalItems));

                // show toast 
                toast.success("Product removed from cart");
            }
        },
        resetCart:(state,value)=>{
 
            // const temp=cart.filter((item)=>)
            state.cart=[];
            state.total=0;
            state.totalItems=0;

            //Update to localstorage
            localStorage.removeItem("cart");
            localStorage.removeItem("total");
            localStorage.removeItem("totalItems");
        },
    },
})

export const {addToCart,removeFromCart,resetCart,setreviews} =cartSlice.actions;
export default cartSlice.reducer;