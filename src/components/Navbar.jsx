import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-full -bg--surface2-dark px-5 py-2 -text--text2-dark border-b-[1px]">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <nav>
        <ul className="flex gap-10 pr-16 font-semibold">
          <li className="hover:-text--text1-dark">
            <Link to="/">Home</Link>
          </li>

          <li  className="hover:-text--text1-dark">
            <Link to="/">About</Link>
          </li>

          <li  className="hover:-text--text1-dark">
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3 ">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="-bg--brand-dark rounded-md px-3 py-1 -text--text1-dark font-semibold ">Login</button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to="/signup">
            <button  className="font-semibold -text--text1-dark -bg--brand-dark rounded-md px-3 py-1 whitespace-nowrap">Sign Up</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/">
            <button
             className="-bg--brand-dark rounded-md px-3 py-1 -text--text1-dark font-semibold "
            onClick={()=>
              {
                setIsLoggedIn(false);
            toast.success("Logged Out successfully")
              }
            }>Log Out</button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button
             className="-bg--brand-dark rounded-md px-3 py-1 -text--text1-dark font-semibold ">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

