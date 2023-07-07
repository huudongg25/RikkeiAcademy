import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<h1>Đây là Home</h1>} />
        <Route path='/about' element={<h1>Đây là About</h1>} />
        <Route path='/details' element={<h1>Đây là Detail</h1>} />
      </Routes>
    </div>
  );
}

export default App;
