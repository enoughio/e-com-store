import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { productContext } from "../utils/context";

const Add = () => {
  const nevigate = useNavigate()
  const [product, setproduct] = useContext(productContext)
  const [title, settitle] = useState(null);
  const [catagory, setCatagory] = useState(null);
  const [price, setPrice] = useState(null);
  const [discription, setdiscription] = useState(null);
  const [image, setimage] = useState(null);

  const handelSubmit = (e) => {
    e.preventDefault()

    const newProduct = {
      title,
      catagory,
      price,
      image,
      discription
    }

    // setproduct()
    console.log(product)
    // localStorage.setItem('products', JSON.stringify([...product, newProduct]))
    console.log(product);
    nevigate(-1);
  }

  return (
    <div className="flex bg-zinc-400 w-screen h-screen justify-center items-center">
      <form onSubmit={(e)=>handelSubmit(e)} className="w-[60%] flex flex-col ">
        <NavLink
          to="/"
          className="p-3 text-3xl font-bold text-sky-400"
          style={(e) => {
            return { color: e.isActive ? "red" : "sky" };
          }}
        >
          Home
        </NavLink>
        <h1 className="inline-block  mb-4 px-2 py-1 text-2xl">Add Producrt</h1>
        <input
          type="text"
          name="title"
          required
          onChange={(e) => settitle(e.target.value)}
          className=" w-full rounded-md h-[3vw] bg-zinc-300 text-2xl mb-4 px-2 py-1"
          placeholder="title"
        />
        <input
          type="url"
          name="image"
          required
          onChange={(e) => setimage(e.target.value)}
          className=" w-full rounded-md h-[3vw] bg-zinc-300 text-2xl mb-4 px-2 py-1"
          placeholder="image Url"
        />
        <div className=" w-full rounded-md  h-[3vw] mb-4 flex justify-between">
          <input
            type="text"
            name="catagory"
          required
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="catagory"
            className=" w-[48%] bg-zinc-300 rounded-md  px-2  bg-zinc-300 text-2xl h-[3vw] mb-4"
          />

          <input
            type="text"
            name="price"
            placeholder="price"
            required
            onChange={(e) => setPrice(e.target.value)}
            className=" w-[48%] rounded-md bg-zinc-300 text-2xl px-2  h-[3vw] mb-4"
          />
        </div>

        <textarea
          name="discription"
          rows="10"
          required
          onChange={(e) => setdiscription(e.target.value)}
          className="w-full rounded-md p-4 bg-zinc-300 text-2xl px-2 "
        ></textarea>

        <button
          to="/add"
          className="py-3 px-2 mt-5 border w-[20%] border-blue-200 text-blue-300 rounded"
          type="submit"
        >
          {" "}
          add produt
        </button>
      </form>
    </div>
  );
};

export default Add;
