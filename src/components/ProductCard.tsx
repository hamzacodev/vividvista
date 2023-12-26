import Link from "next/link";
import React, { useContext } from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Context } from "./context";

interface propsType {
  img: string;
  title: string;
  id: number;
  rating: number;
  price: string;
  discount: number;
  stock: number;
  brand: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  id,
  rating,
  price,
  discount,
  stock,
  brand,
}) => {
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
  const { setcart, cart } = useContext(Context);

  return (
    <Link
      href={`/products/${id}`}
      className="px-4 border cursor-pointer border-gray-200 flex flex-col justify-between rounded-xl max-w-[350px] max-h-[394px] min-w-[350px] min-h-[394px]"
    >
      <div className="px-4 border cursor-pointer border-gray-200 flex flex-col justify-between rounded-xl max-w-[350px] max-h-[394px] min-w-[350px] min-h-[394px]">
        <div className="w-[316px] h-[210px]">
          <img className="w-full h-full" src={img} alt={title} />
        </div>

        <div className="space-y-2 py-2">
          <div className="flex items-center justify-between">
            <h2 className="text-black text-lg uppercase">{brand}</h2>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setcart([
                  ...cart,
                  {
                    img,
                    title,
                    id,
                    rating,
                    price,
                    discount,
                    stock,
                    brand,
                  },
                ]);
              }}
              className="px-4 py-2 rounded-full bg-orange-400 text-white font-[600] text-[20px]"
            >
              +
            </div>
          </div>

          <h2 className="text-accent font-medium uppercase">{title}</h2>

          <div>{generateRating(rating)}</div>

          <div className="font-bold flex gap-4">
            ${price}
            <p className="text-red-500 font-normal">{discount}% OFF</p>
          </div>
          <p className="text-green-700">{stock < 30 ? "Limited Stock" : ""}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
