import React,{useState} from 'react';
import './App.css';
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';

function App() {
  const quizapi = [
    {
      question:"What is karthik's age?",
      answer:[21,22,20,19],
      correct:21
    },
    {
      question:"What is karthik's surname?",
      answer:["Yadav","Konar","shetty","nadar"],
      correct:"Yadav"
    },
    {
      question:"What is karthik's birthday ?",
      answer:[13,14,15,10],
      correct:13
    },
    {
      question:"What is karthik's mother name?",
      answer:["Jaya","Usha","Pavithra","Maya"],
      correct:"Jaya"
    }
  ]
  const [question,setQuestion] = useState(quizapi)
  const [score,setScore] = useState(0)
  const [response,setResponse] = useState(0)
  /*console.log(question)*/
  const scoreval = (ans,correct)=>{
    if(ans===correct){
        setScore(score+1)
    }
    setResponse(response+1)
  }
  const playAgain=()=>{
    setScore(0)
    setResponse(0)
  }
  console.log("Score:"+score)
  console.log("Response:"+response)
  return (
    <div className='main-container'>
      <div className='quiz-container'>
        <h1 className='quiz-title'>Karthik's QuizBee</h1>
        <div className='quiz-question-container'>
          {response < 4 && question.map(({question,answer,correct},index)=>
          <QuestionBox key ={index} question={question} option={answer} selected={ans => scoreval(ans,correct)}/>
          )}
          {response === 4 ? <Result score={score} playAgain={playAgain}/>:null}
        </div>
      </div>
    </div>
    

  );
}

export default App;
