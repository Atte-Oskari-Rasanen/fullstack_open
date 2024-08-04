import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const StatisticsLine = ({ text, value }) => {
  return (
    <p>{text}: {value}</p>
  );
}


const Statistics = ({ good, neutral, bad, allRatings }) => {
  const total = good + neutral + bad;
  // const average = total === 0 ? 0 : allRatings / total;
  let average;
  if (total === 0) {
    average = 0;
  } else {
    average = allRatings / total;
  }
  let posPercentage;
  if (total === 0) {
    posPercentage = 0;
  } else {
    posPercentage = good / total * 100;
  }

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <StatisticsLine text="good" value ={good} />
      <StatisticsLine text="neutral" value ={neutral} />
      <StatisticsLine text="bad" value ={bad} />
      <StatisticsLine text="all" value ={total} />
      <StatisticsLine text="average" value ={average.toFixed(1)} />
      <StatisticsLine text="positive" value ={posPercentage.toFixed(1)} />

      {/* <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average.toFixed(1)}</p>
      <p>Positive: {posPercentage.toFixed(1)}%</p> */}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allRatings, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(allRatings + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(allRatings - 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text='Good' />
      <Button handleClick={handleBad} text='Bad' />
      <Button handleClick={handleNeutral} text='Neutral' />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} allRatings={allRatings} />
    </div>
  );
};

export default App;
