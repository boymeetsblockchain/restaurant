
import{Routes, Route} from 'react-router-dom'
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import HomePage from './pages/HomePage';

function App() {
  

  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;
