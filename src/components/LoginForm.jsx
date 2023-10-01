import React from "react";
import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log(formData);
    navigate("/dashboard");
    toast.success("Logged In successfully");
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="mt-4 w-full flex flex-col gap-5" onSubmit={submitHandler}>
      <label className="-text--text2-dark ">
        <p>
          Email Address <sup className="text-red-500">*</sup>
        </p>

        <input
          className="-bg--surface4-dark mt-1 border rounded-md px-2 w-full py-2"
          required
          type="email"
          name="email"
          value={formData.value}
          onChange={changeHandler}
          placeholder="Enter Email Address"
        />
      </label>

      <label className="relative -text--text2-dark ">
        <p>
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          className=" -bg--surface4-dark border rounded-md mt-1 px-2 w-full py-2"
          required
          type={showPassword ? "password" : "text"}
          name="password"
          onChange={changeHandler}
          value={formData.password}
          placeholder="Enter Password"
        />

        <span className="absolute right-[10px] top-[37px]" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiFillEyeInvisible fontSize={25}/> : <AiFillEye  fontSize={25} />}
        </span>
      </label>

      <button className="-bg--brand-dark -text--text1-dark font-semibold py-3 rounded-md my-2">Sign In</button>
    </form>
  );
};

export default LoginForm;
