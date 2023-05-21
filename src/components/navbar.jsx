import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-full items-center px-10 justify-between">
      <div className="flex items-center">
        <Image
          src={"/Logo.jpg"}
          alt="Logo"
          width={400}
          height={400}
          className=" w-24 h-24 rounded-full"
        />
        <h3 className=" text-4xl ml-5">Brand</h3>
      </div>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search here..."
        className=" w-80 h-10 p-1 border-blue-400 border-2 outline-none"
      />
      <div className="flex">
        {
          [
            ["Home","/"],
            ["Tasks","/tasks"],
            ["Contact","/"],
          ].map(([title , url] )=>{
            return(
              <Link href={url} className="mr-5 text-xl">{title}</Link>
           ) })
        }
      </div>
    </div>
  );
};

export default Navbar;
