import React,{useState} from 'react';
import './App.css';
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';
import quizapi from './Utils/QuizList';

function App() {
  const quizList = quizapi
  const [question,setQuestion] = useState(quizapi)
  const [score,setScore] = useState(0)
  const [response,setResponse] = useState(0)
  console.log(quizList)
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
