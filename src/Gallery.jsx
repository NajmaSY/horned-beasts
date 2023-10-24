import React from "react";
import HornedBeast from "./HornedBeast";
// import hornedBeastsData from "./Data.json";

function Gallery() {
  // add data later
  const hornedBeastsData = [
    {
      title: "Beast 1",
      imageUrl: "beast1.jpg",
      description: "Description for Beast 1",
    },
    {
      title: "Beast 2",
      imageUrl: "beast2.jpg",
      description: "Description for Beast 2",
    },
    // 2 copies of HornedBeast
  ];

  // .map iterates over an array and creates new array using a function
  // returns new array
  return (
    <div className="gallery">
      {hornedBeastsData.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.imageUrl}
          description={beast.description}
        />
      ))}
    </div>
  );
}

export default Gallery;
