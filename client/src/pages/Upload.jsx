import React, { useState } from "react";
import AppButton from "../components/partial/AppButton";
import AppInput from "../components/partial/AppInput";

function Upload({ getData }) {
  const [file, setFile] = useState();
  const [tag, setTag] = useState("");

  const handelClick = (e) => {
    e.preventDefault();
    if (file && tag) {
      let tagArray = tag.split("#");
      let data = {
        tags: tagArray.slice(1),
        image: URL.createObjectURL(file),
      };
      getData(data);
    }
  };

  return (
    <div className="w-6/12 p-9 shadow-md rounded m-auto mt-20 border border-green-100">
      <h1 className="text-xl mb-4 text-center">Upload Image</h1>
      <AppInput
        type="file"
        placeholder="Choose Image"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <AppInput
        type="text"
        placeholder="Enter tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <AppButton title="Submit" onClick={handelClick} />
    </div>
  );
}

export default Upload;
