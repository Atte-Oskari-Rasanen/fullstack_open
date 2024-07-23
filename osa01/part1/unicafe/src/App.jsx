import { useState } from 'react'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [allRatings, setAll] = useState([])
  const handleGood = () => {
    // setAll(allRatings.concat('G'))
    setGood(good + 1)
    console.log(good)
  }
  
  const handleBad = () => {
    // setAll(allRatings.concat('R'))
    setBad(bad + 1)
    console.log(bad)
  }
  
  const handleNeutral = () => {
    // setAll(allRatings.concat('R'))
    setNeutral(neutral + 1)
    console.log(neutral)
  }
  

  return (
    <div>
      <h1> Give feedback </h1>
        <Button handleClick={handleGood} text='Good' />
        <Button handleClick={handleBad} text='Bad' />
        <Button handleClick={handleNeutral} text='Neutral' />
        <h2>Statistics</h2>
        <p> Good: {good}</p>
        <p> Bad: {bad}</p>
        <p> Neutral: {neutral}</p>
    </div>
  )
}

export default App