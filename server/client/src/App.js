import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {useState, createContext} from 'react'
import Nav from './components/Nav';
import Login from './components/Login';
import AdminPage from './components/AdminPage';
import UserProfile from './components/UserProfile';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
export const AppContext = createContext();


function App() {
  const theme = createTheme();

  const [userProfileId, setProfile] = useState('')
  return (
    <AppContext.Provider value={{userProfileId, setProfile}}>
      <ThemeProvider theme={theme}>
        <Container className="App">
          <Nav/>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
            <Route path='/user' element={<UserProfile/>}/>
          </Routes>
        </Container>
      </ThemeProvider>
    </AppContext.Provider> 
  );
}

export default App;
