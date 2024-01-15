import React from "react";

const Image = (imageAttr) => {
    console.log(imageAttr);

  try {
    // Import image on demand
    const image = require(`../assets/images/${imageAttr.name}`);

    // If the image doesn't exist. return null
    if (!image) return null;
    return <img src={image} alt='aaaa' {...imageAttr}  />;
  } catch (error) {
    console.log(`Image with name "${imageAttr.name}" does not exist`);
    return null;
  }
};

export default Image;