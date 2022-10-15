import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
  );
}

export default App;
