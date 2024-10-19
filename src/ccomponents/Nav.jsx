import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../utils/context";
import Loading from "./Loading";
import { Link, NavLink, useLocation } from "react-router-dom";
import axios from "../utils/axios";

function Nav() {
  const [products] = useContext(productContext);

  let cat = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  cat = Array.from(new Set(cat)); // Convert Set back to array to remove duplicates



  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">

      <Link
        to='/add'
        className="py-3 py-2 border w-[80%] border-blue-200 text-blue-300 rounded"
        href="/create"
      >
        {" "}
        add produt
      </Link>

      <hr className="w-[80%] my-3" />

      <NavLink to='/'  style={(e)=>{
        return{ color:( e.isActive ? "red" : 'black') }
      }}>Home</NavLink>


      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%]">Catagory Fileter</h1>

      {!products || products.length === 0 ? (
        <Loading />
      ) : (
        <ul className=" flex flex-col flex-start">
          {cat.map((item, index) => (
            <li key={index}  className="mt-4">
              <NavLink
               
                style={(e) => {
                  
                  return { color: e.isActive ? "" : "black" }; // use `===` and provide default color
                }}
                to={`?category=${item}`}
              >
                <span className="inline-block bg-blue-200 rounded-full mr-2 w-[15px] h-[15px]"></span>
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
