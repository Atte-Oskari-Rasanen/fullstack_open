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

const GetAnecdote = ({ anecdote }) => {
  return (
    <p>{anecdote}</p>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allRatings, setAll] = useState(0);
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const handleNextAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex);
  };

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
      <Button handleClick={handleNeutral} text='Next anecdote' />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} allRatings={allRatings} />
      <Button handleClick={handleNextAnecdote} text='Next anecdote' />
      <GetAnecdote anecdote={anecdotes[selected]} />

    </div>
  );
};

export default App;
