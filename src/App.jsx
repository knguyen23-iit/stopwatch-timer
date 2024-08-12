import Stopwatch from "./Stopwatch";
import React, { useState, useEffect, useRef } from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stopwatch />
      <Stopwatch />
      <Stopwatch />
      <Stopwatch />
      <Stopwatch />
    </>
  )
}

export default App
