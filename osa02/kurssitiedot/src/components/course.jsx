const Course = ({course}) => {
  console.log("courses: ", course)
  return (
    <div>
      <Header course={course.name} />
      <p><Content parts={course.parts}/></p>
      <Total parts={course.parts} />
    </div>
  );
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.part.name} {props.part.exercises}
    </p>
  );
};
const Content = (props) => {
  return (
    <>
      {props.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = (props) => {
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p><strong>Total of {totalExercises} exercises</strong></p>
  );
};

export default Course;