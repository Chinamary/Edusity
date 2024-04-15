import React from "react";
import "./About.css";
import about_img from "/src/assets/about.png";
import play_icon from "/src/assets/play-icon.png";
import Text from "../Text/Text";


const About = () => {
  return (
    <div className="about">
      <about className="about-left">
        <img src={about_img} alt="about_img" className="about-img"/>
        <img src={play_icon} alt="play_img" className="play-icon"/>
      </about>
      <about className="about-right">
        <Text subTitle = "About University" title = "Nurturing Tomorrow's Leaders Today" uncenter={true}/>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </about>
    </div>
  );
};

export default About;
