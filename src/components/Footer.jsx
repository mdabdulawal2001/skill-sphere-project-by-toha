import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <div>
            <Image
              className="hidden md:flex"
              width={60}
              height={60}
              src={logo}
              alt="skill logo"
            ></Image>
          </div>
          <h1 className="text-2xl md:text-4xl">SkillSphere</h1>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact info</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
        
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <div><FaFacebook className="text-2xl cursor-pointer"></FaFacebook></div>
            <div><FaYoutube className="text-2xl cursor-pointer"></FaYoutube></div>
            <div><FaLinkedin className="text-2xl cursor-pointer"></FaLinkedin></div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
