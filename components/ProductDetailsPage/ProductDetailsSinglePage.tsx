import Image from "next/image";
import { MdContentCopy } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AiFillStar, AiFillThunderbolt } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import style from "../../styles/CardStyle.module.css"
import ProductModal from "./ProductModal";

const ProductDetailsSinglePage = (product: any) => {
  const { name, productPictures, price, brand } = product?.product;
  console.log(product, "pictur");

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="relative flex flex-wrap px-10">
      <ProductModal product={product?.product}></ProductModal>
      <div className="flex lg:w-5/12">
        <div className="hidden lg:block md:block">
          <div className="w-[67px] flex flex-col ">
            {productPictures?.slice(0, 7)?.map((thumb: any, index: any) => (
              <div
                key={index}
                onMouseEnter={() => setSelectedImageIndex(index)}
                className={`${style.thumbnail}   ${
                  index === selectedImageIndex ? `${style.active}` : ""
                }`}
              >
                <Image className="object-contain max-w-full max-h-full" src={thumb.img} alt={index} width={67} height={67} />
              </div>
            ))}
            <label htmlFor="productmodal" className="text-sm text-center cursor-pointer hover:underline text-[#0078F0]">All</label>
          </div>
        </div>
        <div>
          <div className="lg:w-[485px] lg:h-[440px] md:w-[485px] md:h-[440px] w-full lg:border md:border ">
            <Image
              className="object-contain max-w-full max-h-full p-5 mx-auto "
              src={productPictures[selectedImageIndex].img}
              width={322}
              height={398}
              alt=""
            ></Image>
          </div>
          <div className="flex lg:w-[485px] md:w-[485px]  gap-3 text-center ">
            <div className="w-full bg-[#FF9F00] flex justify-center items-center gap-1 text-white font-semibold rounded-sm py-3">
              <HiOutlineShoppingCart />{" "}
              <button className="">ADD TO CART</button>
            </div>
            <div className="w-full bg-[#FB641B] flex justify-center items-center gap-1 text-white font-semibold rounded-sm py-3">
              <AiFillThunderbolt /> <button className="">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-7/12">
        <div className="">
          <div>
            <div className="text-xs breadcrumbs text-[#777] lg:block md:block hidden">
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Documents</a>
                </li>
                <li>Add Document</li>
                <li className="font-medium">{name}</li>
              </ul>
            </div>
            <div className="mb-3">
              <p className="text-lg font-medium text-[#212121]">{name}</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <p className="text-[#878787] font-medium text-base">
                Product Identity Code
              </p>
              <MdContentCopy color="#878787" />
            </div>
            <div className="flex items-center gap-2 ">
              <div className="flex items-center justify-center w-12 gap-1 text-xs text-white bg-green-600 rounded py-[2px]">
                <p>5.0</p>
                <FaStar />
              </div>
              <p>1 Ratings & 1 Reviews</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[28px] font-bold">Tk. {price}</p>
              <p className="text-base">{price}</p>
              <p className="text-xs font-medium text-[#36D399]">20% Off</p>
            </div>
            <div>
              <p className="font-medium">Available Offers</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#878787] mb-5">Highlight</p>
              <div className="text-[#363636] pl-8">
                <li>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</li>
                <li>16.76 cm (6.6 inch) Full HD+ Display</li>
                <li>50MP + 5MP + 2MP | 8MP Front Camera</li>
                <li>6000 mAh Lithium Ion Battery</li>
                <li>Exynos 850 Processor</li>
              </div>
            </div>
            <div>
              <h2 className="mt-5 text-2xl font-bold">Description</h2>
              <p className="text-xs text-[#181818]">
                Enjoy seamless connectivity and an uninterrupted movie marathon
                with the impressive Samsung Galaxy F13 that is designed
                specifically to impress the entertainment fanatics. This
                smartphone features a terrific 16.62 cm (6.6) FHD+ LCD Display
                that can effortlessly blow your mind with its incredible
                performance. Furthermore, this phone boasts a 50 MP Triple
                Camera setup that allows you to capture awesomeness with a
                gentle tap. Moreover, the Samsung Galaxy F13 sports up to 8 GB
                of RAM and features an innovative RAM plus technology that taps
                into the phone’s internal storage to elevate its performance.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Brand</h2>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold">{brand?.name}</h2>
              <h4 className="text-sm font-bold">
                {" "}
                1 Year Manufacturer Warranty for Phone and 6 Months Warranty for
                in the Box Accessories
              </h4>
            </div>
            <div className="p-4 border">
              <div className="flex items-center justify-between">
                <p>Ratings and reviews</p>
                <button className="rounded bg-[#087df1] text-white px-2 py-1">
                  Rate Product
                </button>
              </div>
              <div className="flex">
                <div>
                  <p>5.0</p>
                  <AiFillStar />
                </div>
                {/* <div className="flex">
                  <div className="flex">
                    <p>5</p>
                    <AiFillStar />
                  </div>
                  <div className="w-full h-[5px] relative rounded-[10px] bg-[#1A73E8]"></div>
                  <p>0</p>
                </div> */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSinglePage;
