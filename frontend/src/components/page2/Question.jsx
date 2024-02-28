import React, { useState } from "react";
import "./q.css";
import check from "./../../assets/check.svg"
function Question({handleSubmitquiz, quesNumber, no, options, arr}) {
  const handleSubmitpaper= handleSubmitquiz;

  function handleOptionChange(e) {
 
    console.log(e.target.textContent);
  
   };
   
   //
   const [ans,setAns] = useState(false)
   const handleClick = (e)=>{
    console.log("clicked");
   }
  return (
    <div>
      <div className=" sm:w-[60%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
       
        <div className="min-h-[50px] text-start  ">
          <h3>
            <span>{no + 1}. </span> {quesNumber}{" "}
          </h3>
        </div>

        {/* options conatiner */}
        <div onSubmit={handleSubmitpaper}>

          <div className="grid grid-cols-12 mb-5 ">
            {ans === true ? <img src={check} /> : null }
            <label
            onClick={()=>setAns((pre)=>!pre)} htmlFor="option1" className="col-span-11">
              {options[0].option1}  
            </label>
          </div>

          <div className="grid grid-cols-12 mb-5 ">
            {ans === true ? <img src={check} /> : null }
            <label
            onClick={()=>setAns(true)} htmlFor="option1" className="col-span-11">
              {options[0].option1}  
            </label>
          </div>

         

        </div>
      </div>
    </div>
  );
}

export default Question;
