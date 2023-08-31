import logo from "../assets/whole.png";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black border-t-4 py-6 px-8">
      <div className="container mx-auto flex  justify-between flex-col items-center md:flex-row">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-36 mr-2" />
        </div>
        <div className="flex space-x-4">
          <a href="" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="text-center">
          copyright; {new Date().getFullYear()} Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
