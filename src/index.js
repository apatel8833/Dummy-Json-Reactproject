import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const stores=configureStore({
  reducer:rootReducer
}
)
root.render(
 
  <div>
    <Provider store={stores}>
     <BrowserRouter>
     <App />
     </BrowserRouter>
    </Provider>
    
    <Toaster/>

  </div>
  
  
  
);
