import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="break-words sm:min-h-[300px] w-[360px]  sm:min-w-[100%] sm:p-10  bg-slate-950 shadow-lg">
      {/* container */}
      <div className="grid sm:grid-cols-12 grid-cols-2 sm:gap-2 gap-4 p-2 ">
        {/* company details */}

        <div className=" sm:col-span-6 col-span-1   overflow-auto ">
          <p className=" pt-0 pb-2 pl-2 sm:text-5xl text-4xl sm:text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-600 ">
            Instant Quiz
          </p>
          
            <p className="pt-0 pb-1 pl-2 sm:text-xl  text-l text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
              shivambatham2610@gmail.com
            </p>
        

          <p className="sm:text-xl text-l  text-start pl-2 pt-0 pb-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
            +91 6390590908
          </p>
          <p className="pt-0 pb-1 pl-2 sm:text-xl text-l  text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
            Kanpur,Up
          </p>
        </div>

        {/* company socials */}
        <div className="sm:col-span-6 col-span-1 ">
          

         
          <h3 className="sm:text-start pl-5  pt-0 pb-2  sm:text-5xl text-4xl  p1-2   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
            Social Pages
          </h3>
          <Link
            className="pt-0 pb-1  block sm:text-xl text-l  sm:text-start pl-5  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500"
            to={"https://www.linkedin.com/in/shivam-batham/"}
          >
            <span className=""> Linkedin </span>
          </Link>
          <Link
            className="block pt-0 pb-1 sm:text-xl text-l sm:text-start pl-5   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500"
            to={"//github.com/Shivam-Batham"}
          >
            <span className=""> Github </span>
          </Link>
          <Link
            className="block pt-0 pb-1 sm:text-xl text-l sm:text-start pl-5   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500"
            to={"https://twitter.com/Shivam63905"}
          >
            <span className=""> X </span>
          </Link>
         
        </div>

      </div>

      {/* credit */}
      <div className="mb-0 text-l text-center   font-bold  bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
        <div className=" m-3 min-h-[1px]  bg-gradient-to-r from-cyan-200 to-green-200"></div>

        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
          © Copyright 2024. All Rights Reserved by <br />
          <Link
            className="text-blue-500 "
            to="https://github.com/Shivam-Batham"
          >
            💙
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
              {" "}
              Shivam Batham
            </span>{" "}
          </Link>
          <Link className="text-blue-500 " to="https://github.com/Arman-ali1">
          ❤
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-green-500">
              {" "}
              Arman Ali
            </span>{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
