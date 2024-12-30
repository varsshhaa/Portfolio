import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";


const Contact = () => {
  

  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/varsha-sharma-4b0796257/"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>

          <a
            href="https://github.com/varsshhaa"
            target="_blank"
            className="items"
          >
            <IoLogoGithub className="icons" />
          </a>
          <a href="https://www.gmail.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
