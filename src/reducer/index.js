import { combineReducers } from "@reduxjs/toolkit";

import dataReducer from "../redux/Slices/dataSlice"
import cartReducer from "../redux/Slices/cartSlice"
const rootReducer=combineReducers({
    data:dataReducer,
    Cart:cartReducer,
   
})
export default rootReducer;