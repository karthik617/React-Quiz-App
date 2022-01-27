import React,{useState} from 'react';
import '../Styles/QuestionBox.css'

function QuestionBox({question,option,selected}) {
    const [opt,setOpt] = useState(option)

  return( 
    <div className='single-question'>
        <h4>{question}</h4>
        {opt.map((ans,i)=><button key={i} onClick={()=>{setOpt([ans]); selected(ans)}}>{ans}</button>)}
    </div>
  )}

export default QuestionBox;
