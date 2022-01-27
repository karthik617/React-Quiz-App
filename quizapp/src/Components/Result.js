import React from 'react';
import '../Styles/Result.css'

function Result({score,playAgain}) {
  return (
  <div className='result-main-container'>
    <div className='result-container'>
      <h4 className='result-title'>Your Score {score}/4 Click the button to Play Again</h4>
      <div className='button-container'>
        <button onClick={playAgain} className='playagain-btn'>Play Again</button>
      </div>
    </div>
  </div>
  )
}

export default Result;
