import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import ChilComponent from './childrenComponent';
import countSlice from './redux/reducers/countSlice';

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(dispatch);
  return (
    <div className="App">
      <span> Component Cha  </span>
      <button onClick={() => dispatch({ type: 'UP' })}>UP</button>
      <button onClick={() => dispatch({ type: 'DOWN' })}>DOWN</button>

      <div>=================</div>
      <ChilComponent />
    </div>
  );
}
 
export default App;
 