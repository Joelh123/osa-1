const App = () => {
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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

const Header = (course) => {
  
  return (
    <div>
      <h1>{course.course}</h1>
    </div>
  )
} 

const Content = (content) => {

  return (
    <div>
      <Part part={content.parts[0].name} exercise={content.parts[0].exercises} />
      <Part part={content.parts[1].name} exercise={content.parts[1].exercises} />
      <Part part={content.parts[2].name} exercise={content.parts[2].exercises} />
    </div>
  )
}

const Part = (parts) => {

  return (
    <div>
      <p>{parts.part} {parts.exercise}</p>
    </div>
  )
}

const Total = (total) => {
  
  return (
    <div>
      <p>Number of exercises {total.total}</p>
    </div>
  )
}

export default App
