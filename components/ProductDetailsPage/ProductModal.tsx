import Image from "next/image";
import { useState } from "react";


const ProductModal = (product:any) => {
  const {name, productPictures} = product?.product;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  return (
    <div className="hidden lg:block md:block">
      <input type="checkbox" id="productmodal" className="modal-toggle" />
      <div className="modal">
      <div
          className="relative modal-box"
          style={{ width: "90%", maxWidth: "none" }}
        >
          <div
            className="flex items-center justify-start pb-2"
            style={{ borderBottom: "2px solid lightgray" }}
          >
            <h2 className="mx-10 text-xl text-muted">Videos</h2>
            <h2 className="text-xl text-[#FF6A00]">Images</h2>
          </div>
          <label htmlFor="productmodal" className="absolute cursor-pointer right-6 top-4">✕</label>
          <div className="flex justify-between">
            <div style={{ width: "70%", height: "450px", padding: "20px" }}>
              <Image width={550} height={450}
                src={productPictures[selectedImageIndex].img}
                className="object-contain mx-auto w-[450px] h-[400px]"
                alt="1"
              />
            </div>
            <div style={{ width: "30%" }}>
              <div>
                <h4 className="text-lg w-[90%] my-4">{name}</h4>
              </div>
              <div className="grid w-full grid-cols-5 gap-4">
                {productPictures?.map((i:any, index:any) => (
                  <div
                    onClick={() => setSelectedImageIndex(index)}
                    key={i._id}
                    style={{ height: "50px", width: "50px" }}
                  >
                    <Image width={50} height={50}
                      src={i.img}
                      alt={`product thumbnail ${index + 1}`}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                        border: `2px solid ${
                          selectedImageIndex === index ? "#0077EF" : "lightgray"
                        }`,
                        padding: "5px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
