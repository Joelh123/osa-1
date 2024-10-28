const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
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
      <Part part={content.part1.name} exercise={content.part1.exercises} />
      <Part part={content.part2.name} exercise={content.part2.exercises} />
      <Part part={content.part3.name} exercise={content.part3.exercises} />
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
