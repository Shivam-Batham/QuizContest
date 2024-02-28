import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
// ans
const [useranswers ,setUseranswers] = useState([null, null, null, null, null])

  // get all user Api call
  const paperurl = "https://quizcontest.onrender.com/api/v1/quiz/getalluser";

  useEffect(() => {
    axios
      .get(paperurl)
      .then((res) => {
        setQuizdetails(res.data[0].questions);
        return res.data[0].questions;
      })
      .then((res) => {
        setQues0(res[0].question);
        setQues1(res[1].question);
        setQues2(res[2].question);
        setQues3(res[3].question);
        setQues4(res[4].question);

        setopt0(res[0].options);
        setopt1(res[1].options);
        setopt2(res[2].options);
        setopt3(res[3].options);
        setopt4(res[4].options);
      });
  }, [setQuizdetails]);

  const navigate = useNavigate();
  // const url = "https://myweb-2t4i.onrender.com/api/v1/quiz/getalluser";


  // const handleSubmitpaper = async(e) => {
  //   e.preventDefault();
   
   
  //   console.log(name, contact, email,questions, timeTaken);
  //   const url ="http://localhost:8000/api/v1/quiz/update-quiz"
  //   // const url="https://myweb-2t4i.onrender.com/api/v1/quiz/createuser"
  //   try {
  //     //axios syantax
  //       await axios
  //       .post(url, {
  //         email,
  //         ...useranswers
          
         
  //       })
  //       .then((res) => {
  //         console.log("data send successfully", res.data);
  //         navigate("/contest")
  //       });
  //   } catch (error) {
  //     console.log("error during calling save api",error);
  //   }
  // };

  const handleSubmitpaper = async(e) => {
    e.preventDefault();
    const userAnswers=[...useranswers]
    for(let i=0;i<5;i++){
      if(userAnswers[i]==='a'){
        userAnswers[i]='not-marked'
      }
    }

    const email = localStorage.getItem('email') 
    console.log(userAnswers);
    const url = "http://localhost:8000/api/v1/quiz/update-quiz";
     await axios.post((url), {email, userAnswers})
       .then(()=>{navigate("/contest/result")})
       .catch((error)=>console.log("error during calling save api",error))
  
  };

  const [checkmark1 ,setCheckmark1] = useState([0, 0, 0, 0])
  const [checkmark2 ,setCheckmark2] = useState([0, 0, 0, 0])
  const [checkmark3 ,setCheckmark3] = useState([0, 0, 0, 0])
  const [checkmark4 ,setCheckmark4] = useState([0, 0, 0, 0])
  const [checkmark5 ,setCheckmark5] = useState([0, 0, 0, 0])
 
  // const [mark, setMark] = useState();
  return (
    <div className=" bg-slate-400 sm:pt-5 pb-5 sm:pb-10 min-w-[380px]">
      <div className="pt-32 grid sm:grid-cols-1  bg-slate-400">
        <h3 className=" text-6xl text-center  font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-white to-green-500 sm:mb-5 mt-0 mb-5   ">
          Welcome to the SpriteEra Quiz contest
        </h3>

        {/* ques 1*/}
        <div className=" sm:w-[60%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{1}. </span> {ques0}
              {" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
              { checkmark1[0]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[0] = opt0[0].option1;
                  setCheckmark1([1,0,0,0]);
                  console.log(checkmark1)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt0[0].option1}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark1[1]==true ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[0] = opt0[0].option2;
                  setCheckmark1([0,1,0,0]);
                  console.log(checkmark1)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt0[0].option2}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark1[2]==true ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[0] = opt0[0].option3;
                  setCheckmark1([0,0,1,0]);
                  console.log(checkmark1)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt0[0].option3}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark1[3]==true ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[0] = opt0[0].option4;
                  setCheckmark1([0,0,0,1]);
                  console.log(checkmark1)
                  console.log(useranswers)
                  
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt0[0].option4}
              </label>
            </div>
          </div>
        </div>
        {/* Q2 */}
        <div className=" sm:w-[60%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{2}. </span> {ques1}
              {" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark2[0]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[1] = opt1[0].option1;
                  setCheckmark2([1,0,0,0]);
                  console.log(checkmark2)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt1[0].option1}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark2[1]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[1] = opt1[0].option2;
                  setCheckmark2([0,1,0,0]);
                  console.log(checkmark2)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt1[0].option2}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark2[2]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[1] = opt1[0].option3;
                  setCheckmark2([0,0,1,0]);
                  console.log(checkmark2)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt1[0].option3}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark2[3]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[1] = opt1[0].option4;
                  setCheckmark2([0,0,0,1]);
                  console.log(checkmark2)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt1[0].option4}
              </label>
            </div>
          </div>
        </div>

        {/* Q3  */}
        <div className=" sm:w-[60%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{3}. </span> {ques2}
              {" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark3[0]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[2] = opt2[0].option1;
                  setCheckmark3([1,0,0,0]);
                  console.log(checkmark3)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt2[0].option1}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark3[1]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[2] = opt2[0].option2;
                  setCheckmark3([0,1,0,0]);
                  console.log(checkmark3)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt2[0].option2}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark3[2]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[2] = opt2[0].option3;
                  setCheckmark3([0,0,1,0]);
                  console.log(checkmark3)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt2[0].option3}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark3[3]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[2] = opt2[0].option4;
                  setCheckmark3([0,0,0,1]);
                  console.log(checkmark3)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt2[0].option4}
              </label>
            </div>
          </div>
        </div>

        {/* Q3  */}
        <div className=" sm:w-[60%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{4}. </span> {ques3}
              {" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark4[0]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[3] = opt3[0].option1;
                  setCheckmark4([1,0,0,0,]);
                  console.log(checkmark4)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt3[0].option1}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark4[1]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[3] = opt3[0].option2;
                  setCheckmark4([0,1,0,0,]);
                  console.log(checkmark4)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt3[0].option2}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark4[2]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[3] = opt3[0].option3;
                  setCheckmark4([0,0,1,0,]);
                  console.log(checkmark4)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt3[0].option3}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark4[3]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[3] = opt3[0].option4;
                  setCheckmark4([0,0,0,1]);
                  console.log(checkmark4)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt3[0].option4}
              </label>
            </div>
          </div>
        </div>
        {/* Q4  */}
        <div className=" sm:w-[60%]  max-w-[95%] m-[auto] p-10 bg-gray-950 rounded-xl border-gray-950 mt-0  text-start mb-5 shadow-xl shadow-neutral-700">
          <div className="min-h-[50px] text-start  ">
            <h3>
              <span>{5}. </span> {ques4}
              {" ?"}
            </h3>
          </div>

          {/* options conatiner */}
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark5[0]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[4] = opt4[0].option1;
                  setCheckmark5([1,0,0,0]);
                  console.log(checkmark5)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt4[0].option1}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark5[1]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[4] = opt4[0].option2;
                  setCheckmark5([0,1,0,0]);
                  console.log(checkmark5)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt4[0].option2}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark5[2]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[4] = opt4[0].option3;
                  setCheckmark5([0,0,1,0]);
                  console.log(checkmark5)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt4[0].option3}
              </label>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 mb-5 ">
            { checkmark5[3]==1 ? <img src={check} /> : null}
              <label
                onClick={() => {
                  useranswers[4] = opt4[0].option4;
                  setCheckmark5([0,0,0,1]);
                  console.log(checkmark5)
                  console.log(useranswers)
                }}
                htmlFor="option1"
                className="col-span-11"
              >
                {opt4[0].option4}
              </label>
            </div>
          </div>
        </div>

        {/* btn */}
        <div className="grid sm:grid-1 gap-10 border rounded-md border-emerald-400  min-w-[100px] m-auto mb-5  bg-slate-900 ">
          <button
          // onSubmit={handleSubmitpaper}
            // onClick={() => navigate("/contest/result")}
            onClick={handleSubmitpaper}
            type="submit"
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
