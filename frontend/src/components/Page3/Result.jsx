import { useState } from "react";
import axios from "axios";
import Solutions from "./Solutions.jsx";
import { useEffect } from "react";
function Result() {
  const [solutions, setSolutions] = useState([]);
  const [score, setScore] = useState(0);
  const userdata = {
    name: "baby",
    contact: "123443212",
    email: "baby@gmail.com",
    questions: 1,
    timeTaken: 4,
  };

  // get all user Api call
  // const url = "http://localhost:8000/api/v1/quiz/getcurrentuser";
  const url = "https://quizcontest.onrender.com/api/v1/quiz/getcurrentuser";
  useEffect(() => {
    axios.post(url, { email: userdata.email }).then((res) => {
      setSolutions(res.data.questions);
      console.log(res.data);

     
    });
  }, [])
  


  useEffect(()=>{
    solutions.map((ans, index) => {
      let correctans = ans.options[0].correctAns;
      // console.log(correctans);
      let userans = ans.userAns;
      // console.log(userans);
  
      correctans === userans
        ? setScore((pre)=> (pre + 1)%5)
        : null;
      console.log(score);
    })
  },[score,setScore])
    


  return (
    <div className=" bg-slate-400  min-w-[100%]  pt-16 pb-5">
      <div className="p-5 ">
        <h3 className=" mt-10 text-6xl p-3 text-center  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-500">
          Congratulations for Submisson
        </h3>
      </div>
      <div className="p-3  ">
        <h3 className="outline  text-4xl p-3 text-center  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-slate-800">
          {/* {` Your Score : ${score} / 5`} */}
        </h3>
      </div>

      <div className=" sm:min-w-[50%] sm:max-w-[40%]  max-w-[90%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-center mb-5 shadow-xl shadow-neutral-700">
        <div className="min-h-[100px] text-start mb-2 ">
          <h3 className=" p-3 rounded-md border-emerald-400 text-6xl text-center  m-5  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500">
            {" "}
            Solutions{" "}
          </h3>
        </div>

        {/* solutions */}
        {solutions.map((paper, index) => (
          <Solutions
            key={index}
            userAns={paper.userAns}
            quesNumber={paper.question}
            options={paper.options}
            no={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Result;
