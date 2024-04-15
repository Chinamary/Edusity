import React from "react";
import "./Campus.css";
import gallery_1 from "/src/assets/gallery-1.png";
import gallery_2 from "/src/assets/gallery-2.png";
import gallery_3 from "/src/assets/gallery-3.png";
import gallery_4 from "/src/assets/gallery-4.png";
import whiteArrow from "/src/assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus" id="campus">
      <div className="gallery">
        <img src={gallery_1} alt="campus_img" />
        <img src={gallery_2} alt="campus_img" />
        <img src={gallery_3} alt="campus_img" />
        <img src={gallery_4} alt="campus_img" />
      </div>
      <button className="btn blue">See more here <img src={whiteArrow} alt="" /></button>
    </div>
  );
};

export default Campus;
