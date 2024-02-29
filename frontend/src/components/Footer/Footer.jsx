import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="sm:min-h-[300px] w-[100%]  sm:min-w-[100%] p-10 bg-slate-950 shadow-lg">
      {/* container */}
      <div className="grid sm:grid-cols-12 grid-cols-2  gap-2">
        {/* company details */}

        <div className=" sm:col-span-6 col-span-1  ">
        
          <p className="text-5xl sm:text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-600">
            Instant Quiz
          </p>
          <p className="text-xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
            shivambatham2610@gmail.com
          </p>
          <p className="text-xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
            +91 6390590908
          </p>
          <p className="text-xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
            Kanpur,Up
          </p>
          
        </div>

        {/* company socials */}
        <div className="sm:col-span-6 col-span-1 ">
          <h3 className="text-5xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">Social Media</h3>
          <Link className="block text-xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500" to={"https://www.linkedin.com/in/shivam-batham/"}>
            <span className=""> Linkedin  </span>
          </Link>
          <Link className="block text-xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500" to={"//github.com/Shivam-Batham"}>
            <span className=""> Github </span>
          </Link>
          <Link className="block text-xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-green-500" to={"https://twitter.com/Shivam63905"}>
            <span className=""> X </span>
          </Link>
        </div>
      </div>

      {/* credit */}
      <div className="m-2   text-l text-center   font-bold  bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">

       <div className=" m-3 min-h-[1px]  bg-gradient-to-r from-cyan-200 to-green-200" >
       </div>
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
          © Copyright 2024. All Rights Reserved by <br/>
          <Link
            className="text-blue-500 "
            to="https://github.com/Shivam-Batham"
          >❤<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500"> Shivam Batham</span>{" "}
          </Link>
          <Link className="text-blue-500 " to="https://github.com/Arman-ali1">💙
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-green-500"> Arman Ali</span>{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
