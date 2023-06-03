// import MergeSort from './components/MergeSort'
import Header from './components/Header';
import Footer from './components/Footer';
import Algos from './components/Algos';
import About from './components/About';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { Routes, Route, useNavigate, redirect, useFetcher } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const loader = async () => {
    if (!user) {
      return navigate('/signin');
    } else {
      return 
    }
  }

  useEffect(() => {
    loader();
  }, []);
    
    return (
      <div className="App">
      <Header user={user}  setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/algos' element={<Algos />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};   
  

export default App;
