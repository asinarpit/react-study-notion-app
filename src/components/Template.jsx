import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] pt-12 mx-auto gap-x-12 justify-between  ">
      <div className="w-11/12 max-w-[450px]">
        <h1  className="-text--text1-dark text-3xl font-bold ">{title}</h1>

        <p className="mt-4">
          <span className="-text--text2-dark text-lg font-semibold">{desc1}</span>
          <br />
          <span className="text-blue-300 text-lg  italic">{desc2}</span>
        </p>

        {/* changing the form componets on template when the page changes bw Login and Signup */}

        {formtype === "login" ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex items-center">
          <div className="-bg--surface4-dark h-[2px] w-full"></div>
          <p className="text-2xl -text--text1-dark px-2">OR</p>
          <div className="-bg--surface4-dark h-[2px] w-full"></div>
        </div >

        <button className="mt-5 w-full flex justify-center items-center -bg--surface1-dark py-3 rounded-md 
        font-semibold border-[1px] -text--text1-dark">
            <FcGoogle/>
            <p className="pl-3">Sign Up with Google</p></button>
      </div>

      <div className="relative w-11/12 max-w-[450px] z-0 p-3">
        <img
        src={image} 
        alt="login img"
        loading="lazy"
         />

      </div>
    </div>
  );
};

export default Template;
