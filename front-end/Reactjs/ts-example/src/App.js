import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Content2 from './Content2';

function App() {
  //call api
  // data = api

  return (
    <div className="App">
     <Content name="huu dong" age={10} eat="chicken"  />
     <Content2 name="huudong" />
    </div>
  );
}

export default App;
