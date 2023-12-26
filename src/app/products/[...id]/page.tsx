"use client";

// import { generateRating } from "@/components/ProductCard";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface ProductProps {
  params: Params;
}
interface Params {
  id: number[];
}
interface ResponseType {
  thumbnail: string;
  title: string;
  rating: number;
  price: string;
  discount: number;
  stock: number;
  brand: string;
}
const page: React.FC<ProductProps> = ({ params }) => {
  const [IDDATA, setIDDATA] = useState<ResponseType | undefined>(undefined);
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${params.id[0]}`
      );
      const data = await response.json();
      console.log({ data });
      setIDDATA(data);
    };
    fetchData();
  }, []);
  if (IDDATA === undefined) return;
  console.log(IDDATA.thumbnail);
  return (
    <div className="px-4 border border-gray-200 flex flex-col justify-between rounded-xl max-w-[350px] max-h-[394px] min-w-[350px] min-h-[394px]">
      <div className="w-[316px] h-[210px]">
        <img
          className="w-full h-full"
          src={IDDATA.thumbnail}
          alt={IDDATA.title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-black text-lg uppercase">{IDDATA.brand}</h2>
        <h2 className="text-accent font-medium uppercase">{IDDATA.title}</h2>

        <div>{generateRating(IDDATA.rating)}</div>

        <div className="font-bold flex gap-4">
          ${IDDATA.price}
          <p className="text-red-500 font-normal">{IDDATA.discount}% OFF</p>
        </div>
        <p className="text-green-700">
          {IDDATA.stock < 30 ? "Limited Stock" : ""}
        </p>
      </div>
    </div>
  );
};

export default page;
