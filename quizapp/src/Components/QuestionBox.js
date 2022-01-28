import React,{useState,useEffect} from 'react';
import '../Styles/QuestionBox.css'

function QuestionBox({question,option,selected}) {
  console.log("Question:"+question)
  const [q,setQ] = useState(question)
  const [opt,setOpt] = useState(option)
  console.log("q:"+q)
  useEffect(()=>{
    setQ(q)
    setOpt(option)
  },[option])
  return( 
    <div className='single-question'>
        <h4>{question}</h4>
        {opt.map((ans,i)=><button key={i} onClick={()=>{setOpt([ans]); selected(ans)}}>{ans}</button>)}
    </div>
  )}

export default QuestionBox;
