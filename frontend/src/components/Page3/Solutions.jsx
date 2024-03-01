import React from 'react'
import check from "./../../assets/check.svg"

function Solutions({ userAns,quesNumber, no, correctans }) {
  return (
    <>
     <div className=" sm:min-w-[80%]  min-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
        <div className="min-h-[50px] text-start  ">
          <h3>
            <span>{no + 1}. </span> {quesNumber}{" "}
          </h3>
        </div>

        {/* options conatiner */}
        <div>

          <div className="grid grid-cols-12 mb-5 ">
            <p htmlFor="option1" className="col-span-11">
             Your Answer :   {userAns } {userAns == correctans ?  <span className="  pt-[1px] pb-[1px] pl-[5px] pr-[5px]  m-1 border-red-500 rounded-md text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">correct</span>
              : 
             <h1 className="drop-shadow lg:drop-shadow-lg  shadow-red-200  pt-[1px] pb-[1px] pl-[5px] pr-[5px]  m-1  rounded-md text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">wrong</h1>} 
            </p>
          </div>
          <div className="grid grid-cols-12 mb-5 ">
            <p htmlFor="option1" className="col-span-11">
            Correct Answer :   {correctans}   {userAns == correctans ?  <span className="  pt-[1px] pb-[1px] pl-[5px] pr-[5px]  m-1 border-red-500 rounded-md text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">correct</span> : 
             <span className="  pt-[1px] pb-[1px] pl-[5px] pr-[5px]  m-1 border-red-500 rounded-md text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500">correct</span>} 
            </p>
          </div>

       

        </div>
      </div> 
    </>
  )
}

export default Solutions
