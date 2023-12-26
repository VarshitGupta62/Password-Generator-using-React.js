import React from 'react'
import { useState } from 'react'

function UseEffectOne() {
  const [condition, setCondition] = useState(true)

  return (
    <div>
        <h1>useState use case</h1>
        <h2>Condition rendering</h2>
        <button onClick={() => {setCondition(!condition)}} > Click ! </button>
        { condition && <p>this is text</p> }
    </div>
  )
}

export default UseEffectOne