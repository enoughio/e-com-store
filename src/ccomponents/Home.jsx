import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import { productContext } from "../utils/context";
import Loading from "./Loading";
import axios from '../utils/axios';

function Home() {
  const [products] = useContext(productContext);
  const category = decodeURIComponent(useLocation().search.split('=')[1]);
  const [filteredProduct,  setfilteredProduct]  = useState(null);

  const getItemByCategory = async () => {
    try {
      const {data} = await axios.get(`/products/category/${category}`);
      console.log( data); 
      setfilteredProduct(data);
    } catch (error) {
      console.error(error);
    }
}  

useEffect(() =>{
  if( !filteredProduct || category == 'undefined') setfilteredProduct(products);
  if(category != "undefined") getItemByCategory();
}, [category, products])



  return (
    <>
      <Nav />

      <div className="w-[85%] h-full flex gap-5  flex-wrap px-5 py-10 ">
      
     
      {products ? 
        
          filteredProduct && filteredProduct.map((p, i) => (
            <Link
            to={`/details/${p.id}`}
            key={p.id}

            className="shadow border rounded mt-3 w-[18%] h-[25vh] flex flex-col justify-center items-center"
          >
            <div
              className="w-full hover:scale-110 h-[80%] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
            ></div>
            <h1>{p.title}</h1>
          </Link>
          ))

         : <Loading /> }

      </div>
    </>
  );
}

export default Home;
