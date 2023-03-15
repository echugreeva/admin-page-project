import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import LoginReg from './components/LoginReg';
import AdminPage from './components/AdminPage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/login' element={<LoginReg/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/user' element={<UserProfile/>}/>
      </Routes>
    </div>
  );
}

export default App;
