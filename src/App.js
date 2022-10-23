
import{Routes, Route, BrowserRouter} from 'react-router-dom'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup'; 
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Favorite from './pages/Favorite'; 
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
        {/* <div className='app-header'> */}
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
