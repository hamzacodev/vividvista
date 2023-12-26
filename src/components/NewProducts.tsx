"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";
import { Context } from "./context";
import Cart from "./cart";

const NewProducts = () => {
  const [data, setData] = useState<any>(null);
  const [currentPage, setcurrentPage] = useState<any>(1);
  const params = useSearchParams();
  const { Products, changeProducts } = useContext(Context);
  console.log({ Products });
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data.products);
    };

    fetchData();
  }, []);
  const dataVal = Array.from(
    { length: getTotalPages(Products, 8) },
    (_, index) => index + 1
  );
  function paginate(array, currentPage) {
    const startIndex = (currentPage - 1) * 8;
    const endIndex = startIndex + 8;

    return Products?.slice(startIndex, endIndex);
  }
  function getTotalPages(array, itemsPerPage) {
    return Math.ceil(array?.length / itemsPerPage);
  }
  useEffect(() => {
    if (data === undefined) return;
    if (params.get("category") == null) {
      changeProducts(data);
      return;
    }

    let newData = data
      ?.map((it: any) => {
        if (it.category === params.get("category")) {
          return it;
        } else {
        }
      })
      .filter((iu: any) => iu != undefined);
    console.log({ newData });
    changeProducts(newData);
  }, [params.get("category"), data?.length]);
  console.log({ data });

  return (
    <div>
      <div className="container pt-16">
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {paginate(Products, currentPage)?.map((item: any, index: number) => (
            <ProductCard
              key={index}
              id={item.id}
              discount={item.discountPercentage}
              img={item.thumbnail}
              title={item.title}
              rating={Math.floor(item.rating)}
              price={item.price}
              stock={item.stock}
              brand={item.brand}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-6 justify-center items-center mt-4 "> 
        {dataVal.map((u, id) => {
          return (
            <span
              key={id}
              className={`text-[24px] cursor-pointer font-[600] px-4 py-2 rounded-full text-black ${
                (id+1) === Number(currentPage) ? "bg-black text-white" : ""
              }`}
              onClick={() => setcurrentPage(u)}
            >
              {u}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default NewProducts;
