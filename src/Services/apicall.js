import { setData } from "../redux/Slices/dataSlice";
import axios from "axios";
export const getApiData=async(category,tab,limit,setLoading,dispatch)=>{
    setLoading(true);
    // console.log("imafsdfsfsd")
        var apiData
      if(limit){
       await fetch(`https://dummyjson.com/${category[tab-1].apicall}?limit=${limit}`)
        .then(res => res.json())
        .then(json => 
            {
                if(category[tab-1].apicall==="users"){
                   apiData=[...json.users]
                }
                else if(category[tab-1].apicall==="carts"){
                    apiData=json.carts;
                }
                else if(category[tab-1].apicall==="products"){
                    apiData=json.products;
                }
                else if(category[tab-1].apicall==="todos"){
                    apiData=json.todos;
                }
            })
      }
      else{
        await fetch(`https://dummyjson.com/${category[tab-1].apicall}`)
        .then(res => res.json())
        .then(json => 
            {
                if(category[tab-1].apicall==="users"){
                   apiData=[...json.users]
                }
                else if(category[tab-1].apicall==="carts"){
                    apiData=json.carts;
                }
                else if(category[tab-1].apicall==="products"){
                    apiData=json.products;
                }
                else if(category[tab-1].apicall==="todos"){
                    apiData=json.todos;
                }
            })
      }
    console.log(tab,"fsdfsfs",apiData);
    dispatch(setData(apiData));
    setLoading(false);
}


export const getProducts=async()=>{
      let ans=null;
                try {
                    const temp=await axios.get("https://dummyjson.com/carts?limit=150");
                    ans=temp.data.carts;

                } catch (error) {
                    console.log(error);
                }

                return ans;

             }

   
export const getUsersData=async()=>{
      let ans=null;
                try {
                    const temp=await axios.get("https://dummyjson.com/users?limit=150");
                    ans=temp.data.users;

                } catch (error) {
                    console.log(error);
                }

                return ans;

}

export const getProduct=async()=>{
                let ans=null;
                          try {
                              const temp=await axios.get("https://dummyjson.com/products?limit=150");
                              ans=temp.data.products;
          
                          } catch (error) {
                              console.log(error);
                          }
          
                          return ans;
          
}
export const getTodos=async()=>{
    let ans=null;
              try {
                  const temp=await axios.get("https://dummyjson.com/todos?limit=150");
                  ans=temp.data.todos;

              } catch (error) {
                  console.log(error);
              }

              return ans;

}
export const getProductByid=async(id)=>{
    let ans=null;
              try {
                  const temp=await axios.get(`https://dummyjson.com/products/${id}`);
                  ans=temp.data;

              } catch (error) {
                  console.log(error);
              }

              return ans;

           }
      

export const getUserByid=async(id)=>{
            let ans=null;
                      try {
                          const temp=await axios.get(`https://dummyjson.com/users/${id}`);
                          ans=temp.data;
        
                      } catch (error) {
                          console.log(error);
                      }
        
                      return ans;
        
                   }
              
        