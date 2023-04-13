import React from "react";
// import { Link } from "react-router-dom";
import calculateAverageRating from "../../utils/calculateAverageRating";
import Rating from "../UI/Rating/Rating";
import Image from "next/image";
import Link from "next/link";

const ProductCard1 = ({ product }: any) => {
  return (
    <Link
      href={`/product/${product?.slug}/${product._id}/p`}
      className="px-2 py-3 md:p-3 border-[0.5px] border-white hover:border-gray-200 hover:shadow-xl block rounded-md bg-white"
      key={product?._id}
    >
      <div className="h-[200px] w-full flex items-center justify-center">
        <Image
          className="max-h-full max-w-full object-contain"
          width={100}
          height={100}
          src={product?.productPictures[0]?.img}
          alt={product?.name}
        />
      </div>
      <div>
        <p className="textTwoLine">{product.name}</p>
        <div className="flex items-center justify-stater gap-x-2">
          <Rating value={calculateAverageRating(product?.ratings) || 0} />
          <span className="text-[12px]">
            ({product?.ratings?.length || "0"})
          </span>
        </div>
        <div className="flex md:items-center justify-start md:justify-end gap-x-2 md:flex-row-reverse flex-col">
          <div>
            <del className="md:text-xs text-[10px] text-gray-400">
              TK. {product?.price + 1000}
            </del>{" "}
            <span className="text-success md:text-sm text-[12px]">20% Off</span>
          </div>
          <p className="text-[12px] md:text-sm font-bold">
            Tk. {product?.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard1;
