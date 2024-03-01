import "./App.css";
import { useEffect, useState ,useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Timer from "./components/Timer/Timer";

import check from "./assets/check.svg";

function App() {
  const [quizdetails, setQuizdetails] = useState([]);
  const [ques0, setQues0] = useState(null);
  const [ques1, setQues1] = useState(null);
  const [ques2, setQues2] = useState(null);
  const [ques3, setQues3] = useState(null);
  const [ques4, setQues4] = useState(null);
  // options
  const [opt0, setopt0] = useState([{}]);
  const [opt1, setopt1] = useState([{}]);
  const [opt2, setopt2] = useState([{}]);
  const [opt3, setopt3] = useState([{}]);
  const [opt4, setopt4] = useState([{}]);

  const email = "shivambatham2610@gmail.com";
  // get all user Api call 
  const url = "https://quizcontest.onrender.com/api/v1/quiz/getCurrentUser";
  const[userAns1,setUserAns1]=useState('a')
  const[userAns2,setUserAns2]=useState('a')
  const[userAns3,setUserAns3]=useState('a')
  const[userAns4,setUserAns4]=useState('a')
  const[userAns5,setUserAns5]=useState('a')
  useEffect(() => {
    axios
      .post((url), {email})
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        setQues0(res.questions[0].question);
        setQues1(res.questions[1].question);
        setQues2(res.questions[2].question);
        setQues3(res.questions[3].question);
        setQues4(res.questions[4].question);

        setopt0(res.questions[0].options);
        setopt1(res.questions[1].options);
        setopt2(res.questions[2].options);
        setopt3(res.questions[3].options);
        setopt4(res.questions[4].options);
      });
  }, [setQuizdetails]);

  

  const navigate = useNavigate();
 


  const [checkmark1 ,setCheckmark1] = useState([0, 0, 0, 0, 0])
  const [checkmark2 ,setCheckmark2] = useState([0, 0, 0, 0, 0])
  const [checkmark3 ,setCheckmark3] = useState([0, 0, 0, 0, 0])
  const [checkmark4 ,setCheckmark4] = useState([0, 0, 0, 0, 0])
  const [checkmark5 ,setCheckmark5] = useState([0, 0, 0, 0, 0])

  const handleSubmitpaper = async(e) => {
    // e.preventDefault();
    const userAnswers=[userAns1,userAns2,userAns3,userAns4,userAns5]
    for(let i=0;i<5;i++){
      if(userAnswers[i]==='a'){
        userAnswers[i]='not-marked'
      }
    }
    console.log(userAnswers);
    const url = "https://quizcontest.onrender.com/api/v1/quiz/update-quiz";
     await axios.post((url), {email, userAnswers})
       .then(()=>{navigate("/contest/result")})
       .catch((error)=>console.log("error during calling save api",error))
  
  };

  {/*
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

*/}

  return (
    <div className=" bg-slate-400 sm:pt-5 pb-5 sm:pb-10 minw-[360px]">
      
      <div className=" grid sm:grid-cols-1   bg-slate-400">
     
        <h3 className=" sm:text-6xl text-3xl text-center sm:mb-5 mt-0 mb-5 sm:pt-32 pt-24   font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500   ">
          Welcome to the Instant Quiz contest
        </h3>
        {/* ques 1===========================*/}
        <div className=" sm:w-[70%]  w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{1}. </span> {ques0}{" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark1[0]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns1(opt0[0].option1)
                  setCheckmark1([1,0,0,0]);}
                }
              >
                {opt0[0].option1}
              </label>
            </div>
            
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark1[1]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                // htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns1(opt0[0].option2)
                  setCheckmark1([0,1,0,0]);}
                }
              >
                {opt0[0].option2}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark1[2]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns1(opt0[0].option3)
                  setCheckmark1([0,0,1,0]);}
                }
              >
                {opt0[0].option3}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark1[3]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns1(opt0[0].option4)
                  setCheckmark1([0,0,0,1]);}
                }
              >
                {opt0[0].option4}
              </label>
            </div>

          </div>

        </div>
        {/* Q2 ==============================*/}
        <div className=" sm:w-[70%]  w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{2}. </span> {ques1}{" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark2[0]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns2(opt1[0].option1)
                  setCheckmark2([1,0,0,0,]);}
                }
              >
                {opt1[0].option1}
              </label>
            </div>
            
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark2[1]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns2(opt1[0].option2)
                setCheckmark2([0,1,0,0]);}
                }
              >
                {opt1[0].option2}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark2[2]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns2(opt1[0].option3)
                
                setCheckmark2([0,0,1,0]);}
                }
              >
                {opt1[0].option3}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark2[3]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns2(opt1[0].option4)
                setCheckmark2([0,0,0,1]);}
                }
              >
                {opt1[0].option4}
              </label>
            </div>

          </div>
        </div>

        {/* Q3  */}
        <div className=" sm:w-[70%]  w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{3}. </span> {ques2}{" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              {checkmark3[0]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns3(opt2[0].option1)
                setCheckmark3([1,0,0,0]);}
                }
              >
                {opt2[0].option1}
              </label>
            </div>
            
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark3[1]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns3(opt2[0].option2)
                setCheckmark3([0,1,0,0]);}
                }
              >
                {opt2[0].option2}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark3[2]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns3(opt2[0].option3)
                setCheckmark3([0,0,1,0]);}
                }
              >
                {opt2[0].option3}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark3[3]==true ? <img src={check} /> : null}
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns3(opt2[0].option4)
                setCheckmark3([0,0,0,1]);}
                }
              >
                {opt2[0].option4}
              </label>
            </div>

          </div>

        </div>

        {/* Q4  */}
        <div className=" sm:w-[70%]  w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{4}. </span> {ques3}{" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark5[0]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns4(opt3[0].option1)
                setCheckmark5([1,0,0,0]);}
                }
              >
                {opt3[0].option1}
              </label>
            </div>
            
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark5[1]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns4(opt3[0].option2)
                setCheckmark5([0,1,0,0]);}
                }
              >
                {opt3[0].option2}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark5[2]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns4(opt3[0].option3)
                setCheckmark5([0,0,1,0]);}
                }
              >
                {opt3[0].option3}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark5[3]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns4(opt3[0].option4)
                setCheckmark5([0,0,0,1]);}
                }
              >
                {opt3[0].option4}
              </label>
            </div>

          </div>

        </div>
        {/* Q5  */}
        <div className=" sm:w-[70%]  w-[95%]  m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{5}. </span> {ques4}{" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark4[0]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns5(opt4[0].option1)
                setCheckmark4([1,0,0,0]);}
                }
              >
                {opt4[0].option1}
              </label>
            </div>
            
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark4[1]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns5(opt4[0].option2)
                setCheckmark4([0,1,0,0]);}
                }
              >
                {opt4[0].option2}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark4[2]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns5(opt4[0].option3)
                setCheckmark4([0,0,1,0]);}
                }
              >
                {opt4[0].option3}
              </label>
            </div>

          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark4[3]==true ? <img src={check} /> : null }
              <label
                // onClick={() => setAns((pre) => !pre)}
                htmlFor="option1"
                className="col-span-11"
                onClick={()=>{setUserAns5(opt4[0].option4)
                setCheckmark4([0,0,0,1]);}
                }
              >
                {opt4[0].option4}
              </label>
            </div>

          </div>

        </div>

        {/* btn */}
        <div className="grid sm:grid-1 gap-10 border rounded-md border-emerald-400  min-w-[100px] m-auto mb-5  bg-slate-900 ">
          <button
            // onClick={() => navigate("/contest/result")}
            type="submit"
            onClick={handleSubmitpaper}
            className=" bg-slate-900 p-3  text-4xl text-center   font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500 "
          >
            Submit
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;

