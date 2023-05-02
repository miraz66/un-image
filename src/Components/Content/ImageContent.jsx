import React from "react";
import ImageLi from "./ImageLi";
import ImageJson from "./Image.json";

const ImgContent1 = ImageJson.ImgContant;

const ImageContent = () => {
  return (
    <div>
      <div className="w-8/12 m-auto pt-10">
        <div className="flex gap-4 overflow-hidden">
          <div className="w-full bg-white grid grid-cols-1 gap-y-4 ">
            {ImgContent1.contant1.map((status) => {
              return <ImageLi images={status} />;
            })}
          </div>

          <div className="w-full  bg-white grid grid-cols-1 gap-y-5">
            {ImgContent1.contant2.map((status) => {
              return <ImageLi images={status} />;
            })}
          </div>

          <div className="w-full bg-white grid grid-cols-1 gap-y-5">
            {ImgContent1.contant3.map((status) => {
              return <ImageLi images={status} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
