import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Post } from './pages/Post/Post';
import { Register } from './pages/Register/Register';
import { Signup } from './pages/Signup/Signup';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path ='/register' element={<Register/>}/>
      </Routes>
  );
}

export default App;
