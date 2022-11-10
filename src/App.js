import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Post } from './pages/Post/Post';
import { Register } from './pages/Register/Register';
import { Signup } from './pages/Signup/Signup';
import {Register2} from './pages/Register2/Register2';
import {Lost} from './pages/Lost/Lost';
import {PostLost} from './pages/PostLost/PostLost'
import {Location} from './pages/Location/Location'
import { Mypage } from './pages/Mypage/Mypage';
import { Mypost } from './pages/Mypost/Mypost';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path ='/register' element={<Register/>}/>
        <Route path='/register2' element={<Register2/>}/>
        <Route path='/lost' element={<Lost/>}/>
        <Route path='/postlost/:id' element={<PostLost/>}/>
        <Route path='/location' element={<Location/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/mypost' element={<Mypost/>}/>
      </Routes>
  );
}

export default App;
