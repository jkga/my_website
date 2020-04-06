import React, {useState, useEffect} from 'react'
import Bar from './bars'

export default () => {
  let bars = []
  const [barHeight, setBarHeight] = useState(0)

  useEffect(() => {
    setInterval(() => {
      let rand = Math.round(Math.random() * 30)
      setBarHeight(rand)
    }, 700)
    
  }, [])

  const generateBars = () => {
    [...Array(10).keys()].forEach((el, index) => {
      bars.push(<Bar class="bar" key={index} style={{height: barHeight + Math.round(Math.random() * 30) + 'px', background: '#e91e63'}}/>)
    })
  }

  generateBars ()

  return (
    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
      {bars}
    </div>
  )
}