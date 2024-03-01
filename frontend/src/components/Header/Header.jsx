import React, { useState,useRef,useEffect } from "react";
import Timer from "../Timer/Timer";
import { useLocation } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("SpriteEra Inc.");
  const [time, setTImer] = useState(60);

   const url = useLocation();
  // console.log(url)
  const submitbutton = (
    <div className=" sm:col-span-2 ">
      <button
        onClick={() => navigate("/contest")}
        type="submit"
        className="border w-[100%] p-5 rounded-md border-emerald-400 text-4xl text-center   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500"
      >
        Submit
      </button>
    </div>
  );


// ==========================timer

const submitionTime = "February 27, 2024 17:39:00";
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("0");
  const [timerSeconds, setTimerSeconds] = useState("0");
  const [countdownDate, setCountdownDate] = useState(
    new Date().getTime() + 301000
  );

  // const navigate = useNavigate();

  let interval = useRef();

  // const startTime='February 27, 2024 15:26:00'
  const startTimer = () => {
    // const countdownDate=new Date((${submitionTime})).getTime()
    


    // console.log(countdownDate);
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        // setTimerDays(days)
        // setTimerHours(hours)
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        if(seconds===0 && minutes===0 ){
          handleSubmitpaper();
        }
        // countdownDate=countdownDate+1000
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval.current);
  });


//=======================================timer

  return (
    <header className="fixed sm:min-h-[100px] w-[360px] break-words sm:min-w-[100%] p-2 bg-slate-950 shadow-neutral-200 ">
      <nav className=" grid sm:grid-cols-2 grid-cols-6  gap-5 ">
        <div className="sm:col-span-1 col-span-3 ">
          <h1 className="p-2 sm:text-5xl text-4xl text-start   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-500">
          Instant Quiz
          </h1>
        </div>

        <div className="sm:col-span-1 text-end col-span-3">
         
           
           {(url.pathname =="/contest") || (url.pathname =="/contest/")?  <h1 className=" text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
          {timerMinutes<10?"0"+timerMinutes:timerMinutes}:{timerSeconds<10?"0"+timerSeconds:timerSeconds} min Left </h1> :""}
       
        </div>
      </nav>
    </header>
  );
}

export default Header;
