import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (stats) => {
  if (stats.total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  else {
    return (
      <table>
        <tbody>
          <Statisticline text="good" value={stats.good}/>
          <Statisticline text="neutral" value={stats.neutral}/>
          <Statisticline text="bad" value={stats.bad}/>
          <Statisticline text="total" value={stats.total}/>
          <Statisticline text="average" value={Math.round((stats.good - stats.bad) / stats.total * 10) / 10}/>
          <Statisticline text="positive" value={`${Math.round(stats.good / stats.total * 1000) / 10}%`}/>
        </tbody>
      </table>
    )
  }
}

const Statisticline = (value) => {
  return (
    <tr>
      <td>{value.text}</td> 
      <td>{value.value}</td>
    </tr>
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