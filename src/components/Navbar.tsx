"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  }, []);
  console.log(categories);
  return (
    <div className="hidden lg:block">
      <div className="container">
        <h1 className="text-2xl mt-6">Categories</h1>
        <div className="flex flex-wrap gap-8 mx-auto font-medium py-4 text-blackish">
          {categories?.map((category: string, index: number) => (
            <Link className="navbar__link relative" href={`/?category=${category}`} key={index}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
