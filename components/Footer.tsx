import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex md:flex-row md:justify-between justify-center items-center gap-8 mt-52 flex-col padding-x py-20 bg-blue-300 m-auto max-width">
      <Image src="/logo1.png" alt="logo" width={200} height={200} />
      <span className="font-bold text-xl text-slate-900">
        © 2020 Insert Name Here. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
