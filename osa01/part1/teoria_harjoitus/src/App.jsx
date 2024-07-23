import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Nappi = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const nostaYhdella = () => setCounter(counter + 1)
  const laskeYhdella = () => setCounter(counter - 1)
  const Nollaa = () => setCounter(0)
  console.log('rendering...', counter)

  return (
    <div>
    <Display counter={counter}/>
    <Nappi handleClick={nostaYhdella} text = '+' />
    <Nappi handleClick={laskeYhdella} text = '-' />
    <Nappi handleClick={Nollaa} text = '0' />
    </div>
  )
}

export default App