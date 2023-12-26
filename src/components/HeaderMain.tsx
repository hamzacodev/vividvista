"use client";
import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Context } from "./context";
import Cart from "./cart";

const HeaderMain = () => {
  const [categories, setCategories] = useState<any>(null);
  const [cartShow, setcartShow] = useState<any>(false);
  const { changeProducts, cart } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  }, []);
  console.log(categories);

  async function search(value: string) {
    let response = await fetch(
      `https://dummyjson.com/products/search?q=${value}`
    );
    const data = await response.json();
    changeProducts(data.products);
  }

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          VividVista
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            onChange={(e) => search(e.target.value)}
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>

        {/* <div className="relative group">
          <button className="bg-black text-white py-2 px-10 rounded inline-flex items-center">
            Categories
          </button>
          <div className="absolute hidden bg-gray-100 py-2 px-10 space-y-4 group-hover:block">
            {categories?.map((category: string, index: number) => (
              <a
                key={index}
                href={`#${category}`}
                className="block py-2 px-4 rounded"
              >
                {category.replace(/-/g, " ")}{" "}
              </a>
            ))}
          </div>
        </div> */}

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <div
            className="relative cursor-pointer "
            onClick={() => setcartShow((pre) => !pre)}
          >
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[28px] h-[28px] text-[17px] text-white grid place-items-center translate-x-3 -translate-y-3">
              {cart.length}
            </div>
          </div>
          {cartShow && <Cart setcartShow={setcartShow} />}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
