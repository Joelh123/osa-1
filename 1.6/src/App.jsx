import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Content = (stats) => {
  return (
    <div>
      good {stats.good} <br/>
      neutral {stats.neutral} <br/>
      bad {stats.bad}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />      
      <Button handleClick={handleClickBad} text="bad" />
      <h1>Statistics</h1>
      <Content good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App