import React from "react";

const Text = ({ subTitle, title, uncenter }) => {
  return (
    <div className="title">
      <p style={{textAlign:uncenter?"left":''}}>{subTitle}</p>
      <h2 style={{textAlign:uncenter?"left":''}}>{title}</h2>
    </div>
  );
};

export default Text;
