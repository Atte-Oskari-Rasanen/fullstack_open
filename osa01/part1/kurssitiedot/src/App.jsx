const Header = (props) => {
  console.log("Header props: ", props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  console.log("Part props: ", props)
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <div>
      <p>Number of exercises: {totalExercises}</p>
    </div>
  )
}

const App = () => {
  // const-määrittelyt
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log("Kurssi: ", course)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default App