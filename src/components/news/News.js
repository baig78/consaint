import React from "react";
import administraionImage from "../../assets/admin_image.png";

const News = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">News</div>
      </div>
    </>
  );
};

export default News;
