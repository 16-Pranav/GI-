/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        phone,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      }
      else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        // Generic error handling for unexpected issues
        console.error(error);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="h-screen flex justify-center items-center ">
          <div className="h-[500px] w-[500px] px-10 bg-white flex flex-col justify-center border border-teal-600 shadow-lg">
            <h1 className="text-3xl ">Welcome back!!</h1>
            <h1 className=" mt-10 text-2xl font-bold">Login</h1>
            <h3 className="mt-10 text-xl">Phone Number: </h3>
            <div className="mt-4 flex items-center border rounded px-4 py-2 bg-slate-50">
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
              />
            </div>
            <div className=" flex flex-col justify-center items-center">
              <button
                type="submit"
                className="  w-11 h-11 mt-10 flex justify-center items-center bg-gradient-to-r from-green-600 to-blue-600 px-10 rounded-md font-extrabold "
              >
                Login{" "}
              </button>
            </div>

            <div className=" flex flex-col justify-center items-center mt-10">
              <h3 className="justify-center ">
                Don't have an account?{" "}
                <Link to="/Signup" className="text-green-900 font-semibold">
                  SignUp
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
