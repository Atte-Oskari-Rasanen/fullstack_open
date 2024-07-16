const Header = (props) => {
  return (
    <div>
      <p> {props.course} </p>
    </div>
    )  
}

const Part = (props) => {
  return (
    <div>
      <p> {props.part} {props.exercises} </p>
    </div>
    )
}

const Content = (props) => {
  console.log("all parts: ", props)
  return (
    <div>
      <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
    </div>
  )
}

// const Content = (props) => {
//   return (
//     <div>
//       <p> {props.part} </p>
//     </div>
//     )  
// }

const Total = (props) => {
  return(
  <div>
    <p> Number of exercises: {props.total}</p>
  </div>
  )
}
const App = () => {
  // const-määrittelyt
  const course = 'Half Stack application development'
  const info = [{part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
    ]
  return (
    <div>
      <Header course={course} />
      <Content parts= {info}/>
      <Total total= {info[0].exercises + info[1].exercises + info[2].exercises} />
    </div>
  )
}
export default App