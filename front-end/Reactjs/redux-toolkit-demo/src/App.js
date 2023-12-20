import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchData } from './store/reducer/test';

function App() {
  const data = useSelector(state => state.test)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(data);
  }, [data])
  
  const actionDispatch =async () => {
    const data = await dispatch(fetchData()).unwrap().then((data)=>{
      console.log(data);
    })
    console.log(data);
    
  }

  return (
    <div className="App">
      <p>Test</p>
      <button onClick={actionDispatch}>Click</button>
    </div>
  );
}

export default App;
