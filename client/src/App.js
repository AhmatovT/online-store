import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage/HomePage';
import Navbar from './component/Navbar/Navbar';
import SignIn from './component/Register/SignIn';
import Signup from './component/Register/SignUp';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
