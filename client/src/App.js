import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import HomePage from './component/HomePage/HomePage';
import Navbar from './component/Navbar/Navbar';
import SignIn from './component/Register/SignIn';
import Signup from './component/Register/SignUp';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
