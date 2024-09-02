/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SignUp = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      toast.success("Registered Successfully")
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong")
      
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="h-screen flex justify-center items-center ">
          <div className=" mt-15 mb-15 h-[550px] w-[500px] px-20 bg-white flex flex-col justify-center border border-teal-600 shadow-lg">
            <h1 className="text-3xl ">Welcome!!</h1>
            <h1 className=" mt-10 text-2xl font-bold">Register</h1>

            <h3 className="mt-10 text-xl">Name: </h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Full name "
              className=" px-5 mt-2 outline-none border rounded-lg  border-teal-500 flex h-[40px] bg-slate-50 "
              required
            />

            <h3 className="mt-10 text-xl">Phone Number: </h3>
            <div className="mt-4 flex items-center border border-teal-500 rounded-lg px-4 py-2 bg-slate-50">
              <span className="mr-2">+91</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                maxLength="10"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
                className="flex-grow outline-none bg-slate-50"
                required
              />
            </div>
            <div className=" flex flex-col justify-center items-center">
              <button
                type="submit"
                className="  w-11 h-11 mt-10 flex justify-center items-center bg-gradient-to-r from-green-600 to-blue-600 px-10 rounded-md font-extrabold "
              >
                SignUp
              </button>
            </div>

            <div className=" flex flex-col justify-center items-center mt-10">
              <h3 className="justify-center ">
                Already have an account?{" "}
                <Link to="/Login" className="text-green-900 font-semibold">
                  Login
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
