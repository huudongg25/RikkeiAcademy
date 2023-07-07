import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Started } from './components/started';
import { Dashboard } from './components/dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Started />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
