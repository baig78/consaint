import React from "react";
import administraionImage from "../../assets/admin_image.png";

const Carrier = () => {
  return (
    <>
      <div class="image-container">
        <img
          src={administraionImage}
          class="img-fluid"
          alt="administraionImage"
        ></img>
        <div class="overlay-text">Carrier</div>
      </div>
    </>
  );
};

export default Carrier;
