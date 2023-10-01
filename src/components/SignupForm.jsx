import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignupForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType, setAccountType] = useState("student");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
    const accountData = {
      ...formData,
    };

    console.log(accountData);
  }

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    console.log(formData);
    navigate("/dashboard");
    toast.success("Account Created");
  }

  return (
    <>
    <div className="flex max-w-max -bg--surface3-dark p-1 gap-2 rounded-full -text--text2-dark font-semibold m-3">
    <button
    className={
      `${accountType==="student"?("-bg--surface1-dark -text--text1-dark"):("-bg--surface3-dark")} py-2 px-5 rounded-full`
    }
    onClick={()=>setAccountType("student")}
    >Student</button>

    <button
    className={
      `${accountType==="instructor"?("-bg--surface1-dark -text--text1-dark"):("-bg--surface3-dark")} py-2 px-5 rounded-full`
    }
    onClick={()=>setAccountType("instructor")}
    
    >Instructor</button>
  </div>

    <form className="mt-4 w-full flex flex-col gap-5" onSubmit={submitHandler}>


      <div className="flex w-full gap-3">
        <label className="-text--text2-dark w-full ">
          <p>
            First Name <sup className="text-red-500">*</sup>
          </p>

          <input
            className="-bg--surface4-dark mt-1 border rounded-md px-2 w-full py-2"
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
            value={formData.firstName}
          />
        </label>

        <label className="-text--text2-dark w-full ">
          <p>
            Last Name <sup className="text-red-500">*</sup>
          </p>

          <input
            className="-bg--surface4-dark mt-1 border rounded-md px-2 w-full py-2"
            required
            type="text"
            name="lastName"
            onChange={changeHandler}
            value={formData.lastName}
          />
        </label>
      </div>

      <label className="-text--text2-dark ">
        <p>
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          className="-bg--surface4-dark mt-1 border rounded-md px-2 w-full py-2"
          required
          type="email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        />
      </label>

      <div className="flex w-full gap-3">
        <label className="-text--text2-dark w-full relative ">
          <p>
            Password <sup className="text-red-500">*</sup>
          </p>
          <input
            className="-bg--surface4-dark mt-1 border rounded-md px-2 w-full py-2"
            required
            type={showPassword ? "password" : "text"}
            name="password"
            onChange={changeHandler}
            value={formData.password}
          />

          <span className="absolute right-[10px] top-[37px]"  onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiFillEyeInvisible fontSize={25} /> : <AiFillEye fontSize={25}/>}
          </span>
        </label>

        <label className="-text--text2-dark w-full relative ">
          <p>
            Confirm Password <sup className="text-red-500">*</sup>
          </p>
          <input
            className="-bg--surface4-dark mt-1 border rounded-md px-2 w-full py-2"
            required
            type={showConfirmPassword ? "password" : "text"}
            name="confirmPassword"
            onChange={changeHandler}
            value={formData.confirmPassword}
          />

          <span className="absolute right-[10px] top-[37px]"  onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showConfirmPassword ? <AiFillEyeInvisible fontSize={25} /> : <AiFillEye  fontSize={25}/>}
          </span>
        </label>
      </div>
      <button className="-bg--brand-dark -text--text1-dark font-semibold py-3 rounded-md my-2" type="submit">Create Account</button>
    </form>
  
    </>);
  
};

export default SignupForm;
