import React from 'react';
import "./Program.css";
import program1 from "/src/assets/program-1.png";
import program2 from "/src/assets/program-2.png";
import program3 from "/src/assets/program-3.png";
import caption1 from "/src/assets/program-icon-1.png";
import caption2 from "/src/assets/program-icon-2.png";
import caption3 from "/src/assets/program-icon-3.png";



const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program1} alt="program" />
        <div className="caption">
          <img src={caption1} alt="caption-img" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="program" />
        <div className="caption">
          <img src={caption2} alt="caption-img" />
          <p>Master's Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="program" />
        <div className="caption">
          <img src={caption3} alt="caption-img" />
          <p>Post Graduation</p>
        </div>
      </div>
       
       
      
    </div>
  )
}

export default Program
