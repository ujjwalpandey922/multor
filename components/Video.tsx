import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div className="w-full min-h-screen bg-blue-200 flex justify-start items-center flex-col relative padding-x py-8 mb-52 max-width">
      <h1 className="2xl:text-[50px] sm:text-[40px] text-[30px] font-extrabold text-green-900 w-full  lg:w-[50%]; uppercase text-center">
        Show visitors what they're signing up For
      </h1>
      <p className="text-[27px]  font-light mt-5 text-green-500 w-full lg:w-[50%] text-center ">
        Include a video or photo from one of your sessions to help people
        understand your service (or just to hype ‘em up).
      </p>
      <div className="absolute  -bottom-[25%] w-full flex-center ">
        <Image
          src="/bg1.jpg"
          alt="image"
          width={650}
          height={650}
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default Video;
