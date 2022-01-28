import React,{useState,useEffect} from 'react';
import './App.css';
import QuestionBox from './Components/QuestionBox';
import Result from './Components/Result';
import quizApi from './Utils/QuizList';

function App() {
  
  const [question,setQuestion] = useState([])
  const [score,setScore] = useState(0)
  const [response,setResponse] = useState(0)
  const getQuestion = ()=>{
    quizApi().then(
      q=>{
        setQuestion(q)
        // console.log(question)
      }
    )
  }
  useEffect(()=>{
    getQuestion()
  },[])
  const scoreval = (ans,correct)=>{
    if(ans===correct){
        setScore(score+1)
    }
    setResponse(response+1)
  }
  const playAgain=()=>{
    getQuestion()
    // console.log(question)
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
