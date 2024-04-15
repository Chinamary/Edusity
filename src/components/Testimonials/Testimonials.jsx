import React, { useRef } from "react";
import "./Testimonials.css";
import nextIcon from "/src/assets/next-icon.png";
import backIcon from "/src/assets/back-icon.png";
import user_1 from "/src/assets/user-1.png";
import user_2 from "/src/assets/user-2.png";
import user_3 from "/src/assets/user-3.png";
import user_4 from "/src/assets/user-4.png";

const Testimonials = () => {

  const slide = useRef();
  let tx = 0

  const slideForward = () => {
    if (tx > -50) {
      tx = tx - 25;
    }
    slide.current.style.transform = `translate(${tx}%)`

  }

  const slideBackward = () => {
    if (tx < 0) {
      tx = tx + 25;
    }
    slide.current.style.transform = `translate(${tx}%)`

  }
  
  return (
    <div className="testimonials" id="testimonials">
      <img src={backIcon} alt="backIcon" className="back-btn" onClick={slideBackward}/>
      <img src={nextIcon} alt="nextIcon" className="next-btn" onClick={slideForward}/>
      <div className="slide">
        <ul ref={slide}>
          <li>
            <div className="card">
              <div className="user-info">
                <img src={user_1} alt="user" />
                <div className="user-info-text">
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="user-info">
                <img src={user_2} alt="user" />
                <div className="user-info-text">
                  <h3>William Jackson</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="user-info">
                <img src={user_3} alt="user" />
                <div className="user-info-text">
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="user-info">
                <img src={user_4} alt="user" />
                <div className="user-info-text">
                  <h3>William Jackson</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
