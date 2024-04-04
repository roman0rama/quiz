import './index.scss';
import React from 'react'
import { questions } from './questions';

function Result( { correct, setStep, setCorrect } ) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='No pict here :('/>
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={() => {
        setStep(0)
        setCorrect(0)
      }}>Попробовать снова</button>
    </div>
  );
}

function Game( {step, question, onClickVariant} ) {
  const percentage = Math.round(step / questions.length * 100)
  
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant= (index) => {
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant}/> : (<Result correct = {correct} setStep={setStep} setCorrect={setCorrect}/>)
      }
    </div>
  );
}

export default App;
