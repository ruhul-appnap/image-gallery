import React from "react";
//import { AiOutlineDelete } from "react-icons/ai";

function Card({ imageData }) {
  return (
    <>
      <div className="p-5 shadow-md w-1/4 m-3">
        <img src={imageData.image} alt="" className="w-full" />
        <div className="flex">
          {imageData?.tags?.length &&
            imageData?.tags.map((tag) => (
              <small
                className="px-3 py-2 bg-blue-400 m-2 shadow rounded-full text-white"
                key={tag}
              >
                #{tag}
              </small>
            ))}
        </div>
        {/* <div>
          <AiOutlineDelete className="text-2xl cursor-pointer" onClick={(imageData.id) => deleteImage}/>
        </div> */}
      </div>
    </>
  );
}

export default Card;
