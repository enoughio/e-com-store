import React, { createContext, useEffect, useState } from "react";
import axios from "../utils/axios.jsx";

export const productContext = createContext();

function context(props) {
  const [product, setproduct] = useState( JSON.parse(localStorage.getItem('products')) || null);

//  const getProduct = async () => {
//     const {data} = await axios('/products');
//     setproduct(data);
//  }

 useEffect( ()=> {
    //  getProduct();
    }, [])
    
    
  return (
    <productContext.Provider value={[product, setproduct]}>
      {props.children}
    </productContext.Provider>
  );
}

export default context;
