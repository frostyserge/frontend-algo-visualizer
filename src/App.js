import AlgoVisualizer from './components/AlgoVisualizer';
import MergeSort from './components/MergeSort'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Form } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MergeSort />
    </div>
  );
}

export default App;
