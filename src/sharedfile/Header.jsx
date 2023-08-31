/* eslint-disable react-hooks/rules-of-hooks */

import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/whole@2x.png'


const Headers = () => {
  const navigate = useNavigate()
  const localstrageusers  = localStorage.getItem('user')

  const user = JSON.parse(localstrageusers )
  console.log(user)

  let Links = [
    { name: "Home", link: "/" },

    { name: "Post-blog", link: "/addblog" },
    { name: "My-Posts", link: "/mypost" },
  ];

  let [open, setOpen] = useState(false);

  // console.log(user)
  return (
    <div className=" w-full border-b-2">
      <div className="md:flex  bg-white  mx-auto shadow-gray-700   text-black items-center justify-between  py-2 md:px-10 px-7 ">
        <div
          className=" cursor-pointer w-36 flex items-center  
        "
        >
          <img src={logo} alt="logo" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-1 cursor-pointer md:hidden"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8  text-1xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className="font-bold hover:text-gray-400 duration-500"
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {!user ? (
            <Link to={"/login"}>
              <button
                className="bg-red-500 hover:bg-red-600 text-white  md:ml-10 px-4 rounded-lg shadow-lg
           "
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                window.location.reload()
                navigate('/')
                
                
              }}
              className="bg-red-500 hover:bg-red-600 text-white  md:ml-10 px-4 rounded-lg shadow-lg"
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Headers;
