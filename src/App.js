import AlgoVisualizer from './components/AlgoVisualizer';
import MergeSort from './components/MergeSort'
import Header from './components/Header';
import Footer from './components/Footer';
// import Main from './components/Main';
import Algos from './components/Algos';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import { Routes, Route, Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
// import { Form } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Header user={user}  setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route index element={<Algos />} /> */}
        <Route path='/algos' element={<Algos />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
