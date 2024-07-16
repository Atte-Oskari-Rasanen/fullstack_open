const Hello = (props) => {
  return (
  <div>
    <p> Moi moi {props.name} :), olet jo {props.age} vuotta vanha! </p>
  </div>
  )
}

const App = () => {
  const friends = [
    {name: 'ABC', age: '10'},
    {name: 'DEF', age: '12'}
  ]
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name= "Atte" age= "100" />
      <Hello name= "Mikko" age = "1.5" />
      <p> Moi kaverit: {friends[0].name} ja {friends[1].name}</p>
    </div>
  )
}
export default App