import logo from './logo.svg';
import './App.css';
import DefaultLayout from './layouts/defaultLayout';
import Profile from './components/Profile';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import ProfileLayout from './layouts/ProfileLayout';
import UserLayout from './layouts/UserLayout';

function App() {
  return (
    // cách sử dụng layout trong các router
    <div className="App">
      <Routes>
        <Route path="/" element={
          <DefaultLayout children={<Home/>}/>} />
        <Route path="/profile" element={<ProfileLayout><Profile /></ProfileLayout>} />
        <Route path="/user" element={<UserLayout><h2>Trang User</h2></UserLayout>} />
        <Route path="/settings" element={<DefaultLayout><h2>Trang settings</h2></DefaultLayout>} />
      </Routes>

    </div>
  );
}

export default App;
