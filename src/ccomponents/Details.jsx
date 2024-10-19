import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const [products, setproducts] = useContext(productContext);
  const [detail, setdetail] = useState({});
  const [loading, setloading] = useState(true)
  const { id } = useParams();

  // const getDetails = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setdetail(data);
      
  //   } catch (error) {
  //     console.error("Error fetching details", error);
  //   } finally {
  //     setloading(false); // Set loading to false when done
  //   }
  // };

  useEffect(() => {
    // getDetails();
    setdetail(products.filter((p) => p.id == id))
    setloading(false); //
  }, []);

  if(loading == true){
   return <Loading />
  }
  const { image, title, description, price, category } = detail;


  return (
    <>
    
      <div className="w-[80%] h-full m-auto p-[10%]  flex justify-between items-center">
        <img className="object-contain w-[40%]" src={image} alt="" />

        <div className="content w-[50%] ">
          <h1 className="text-5xl mb-4">{title}</h1>
          <h2 className="text-zinc-500 ">{category}</h2>
          <h2 className="text-xl py-3"> $ {price}</h2>
          <p className="font-regular mb-10 ">{description}</p>

          <Link to='/edit' className="py-3 px-5 mr-5 border border-blue-400 text-blue-700 rounded">
            Edit
          </Link>
          <Link to='/delete' className="py-3 px-5 border border-blue-400 text-red-700 rounded">
            Delete
          </Link>
        </div>
      </div>

    </>
  );
}

export default Details;
