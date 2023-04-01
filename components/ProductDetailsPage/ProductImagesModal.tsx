import React, { useState } from "react";
import ModalClose from "../../components/ModalClose/ModalClose";

const ProductImagesModal = ({
  images,
  productName,
  setProductPicturesModal,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <>
      <input
        type="checkbox"
        id="productPicturesModal"
        className="modal-toggle"
      />
      <div className="overflow-x-auto modal">
        <div
          className="relative modal-box"
          style={{ width: "90%", maxWidth: "none" }}
        >
          <div
            className="flex items-center justify-start pb-2"
            style={{ borderBottom: "2px solid lightgray" }}
          >
            <h2 className="mx-10 text-xl text-muted">Videos</h2>
            <h2 className="text-xl text-primary">Images</h2>
          </div>
          <div className="flex justify-between">
            <div style={{ width: "70%", height: "450px", padding: "20px" }}>
              <img
                src={images[selectedImageIndex].img}
                className="object-contain w-full h-full mx-auto"
                alt="1"
              />
            </div>
            <div style={{ width: "30%" }}>
              <div>
                <h4 className="text-lg w-[90%] my-4">{productName}</h4>
              </div>
              <div className="grid w-full grid-cols-5 gap-4">
                {images?.map((i, index) => (
                  <div
                    onClick={() => setSelectedImageIndex(index)}
                    key={i._id}
                    style={{ height: "50px", width: "50px" }}
                  >
                    <img
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
          <ModalClose top="20px" right="20px" handleClose={() => setProductPicturesModal(false)} />
        </div>
      </div>
    </>
  );
};

export default ProductImagesModal;
