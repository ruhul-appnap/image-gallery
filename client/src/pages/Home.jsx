import React from "react";
import Card from "../components/partial/Card";

function Home({ data }) {
  console.log(data);

  if (!data.length) {
    return <div>No data Found</div>;
  }

  return (
    <div className="flex flex-wrap px-10 justify-center">
      {data.length &&
        data.map((image) => <Card imageData={image} key={image.id} />)}
    </div>
  );
}

export default Home;
