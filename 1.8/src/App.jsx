import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (stats) => {
  return (
    <div>
      good {stats.good} <br/>
      neutral {stats.neutral} <br/>
      bad {stats.bad} <br/>
      total {stats.total} <br/>
      average {(stats.good - stats.bad) / stats.total} <br/>
      positive {stats.good / stats.total * 100} %
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="good" />
      <Button handleClick={handleClickNeutral} text="neutral" />      
      <Button handleClick={handleClickBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App