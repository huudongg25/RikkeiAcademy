import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react'

function App() {
  const [test, setTest] = useState(0)
  let TestRef = useRef()

  useEffect(() => {
    TestRef.current = test
  }, [])

  const handleSetState = () => {
    setTest(test + 1)
    console.log(test);
    console.log(TestRef.current);
  }

  const handleSetRef = () => {
    TestRef.current = test
  }
  // useEffect(() => {
  //   setInterval(() => {
  //     setTest(test => test + 1)
  //   }, 1000) 
  //   console.log(test);
  // },[])

  return (
    <div className="App">
      <button onClick={handleSetState}>OK</button>
      <button onClick={handleSetRef}>OK2</button>
      <h2>{test}</h2>
      <h2>{TestRef.current}</h2>
    </div>
  );
}

export default App;
