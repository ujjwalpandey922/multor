import React from "react";
import { LiaTvSolid } from "react-icons/lia";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { GiWerewolf } from "react-icons/gi";

const Form = () => {
  return (
    <div className=" min-h-screen w-full flex-between  md:flex-row gap-8 flex-col-reverse pb-8 md:my-0 padding-x my-8 bg-blue-50 max-width">
      <div className="flex-center gap-12   flex-col  w-full ">
        <div className="flex-center gap-4 ">
          <LiaTvSolid size={100} color="#448a85" className="flex-shrink-0" />
          <div className="flex flex-col gap-4 md:w-[60%]">
            <h1 className=" text-green-800 text-xl font-bold">Benefit 1</h1>
            <p className=" text-md text-green-600">
              Highlight the benefits of signing up for an appointment, online
              class, or video consultation.
            </p>
          </div>
        </div>
        <div className="flex-center gap-4  ">
          <BsFillArrowThroughHeartFill
            size={100}
            color="#448a85"
            className="flex-shrink-0"
          />
          <div className="flex flex-col gap-4  md:w-[60%]">
            <h1 className=" text-green-800 text-xl font-bold">Benefit 1</h1>
            <p className=" text-md text-green-600">
              Highlight the benefits of signing up for an appointment, online
              class, or video consultation.
            </p>
          </div>
        </div>
        <div className="flex-center gap-4  ">
          <GiWerewolf size={100} color="#448a85" className="flex-shrink-0" />
          <div className="flex flex-col gap-4  md:w-[60%]">
            <h1 className=" text-green-800 text-xl font-bold">Benefit 1</h1>
            <p className=" text-md text-green-600">
              Highlight the benefits of signing up for an appointment, online
              class, or video consultation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end  min-h-screen ">
        <div className="flex flex-col items-center p-5 m-1   w-full md:-mt-32 mt-8 h-max  relative   bg-black-100 md:z-50 z-0">
          <div className="flex-center flex-col">
            <h3 className="text-4xl font-bold text-center text-slate-300 capitalize">
              Schedule an Appointment
            </h3>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  First Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="fname"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Last Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="lname"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="User Name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Type Of Appointment
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="uName"
                    className="block w-full mt-1 border-gray-950 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password_confirmation"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className=" mt-4 w-full">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2  text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false w-full "
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
