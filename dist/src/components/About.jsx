import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import me from "./data/me.json";
import Typed from "typed.js";

const About = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Varsha",
        "I'm a Final year undergraduate pursuing B.Tech in Computer Science and Engineering at NIT Patna.",
        "I'm passionate about problem-solving and web development.",
        "In my free time, I enjoy reading novels and playing badminton."
        
      ],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container about" id="about">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${me.imgSrc}`} alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
