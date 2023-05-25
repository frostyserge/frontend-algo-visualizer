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
import { motion } from 'framer-motion';
import './App.css';
// import { Form } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  const  mergeFunc = (array) => {
    // array to store animations
    const animations = [];
    // just in case checking if the array length equals to 1 or is less than that = return the array as already sorted
    if (array.length <= 1) return array;

    // create a shallow copy (auxilliary array) of the original array
    const auxArray = array.slice();
    
    // return the helper function for sorting. This function is responsible for for doing the merge sort algo.
    // It takes the original array, the starting index and the last index of the subarray to be sorted, the copy of the otiginal array and animations as arguments.
    mergeFuncHelp(array, 0, array.length - 1, auxArray, animations);
    
    return animations;
};

function mergeFuncHelp (mainArray, start, end, auxArray, animations) {
    
    if (start === end) return;

    // if the array.length is more than 1 -> define the Middle Index of the array
    const mid = Math.floor((start + end) / 2);

    // recursevly sort the left part of the array
    mergeFuncHelp(auxArray, start, mid, mainArray, animations);
    // recursevly sort the right side of the array
    mergeFuncHelp(auxArray, mid + 1, end, mainArray, animations);
    // merge the two sorted halves of the array
    merge(mainArray, start, mid, end, auxArray, animations);
}

    // function that merges the two halves
    function merge(mainArray, start, mid, end, auxArray, animations) {
      // Initialize variables
      let k = start; // Current index in the mainArray where the sorted elements will be placed
      let i, j; // Variables for iterating over the subarrays
    
      // Merge the two subarrays while both have elements
      for (i = start, j = mid + 1; i <= mid && j <= end; k++) {
        // Push indices of elements being compared to the animations array
        animations.push([i, j]);
        animations.push([i, j]);
    
        // Compare the elements from the two subarrays
        if (auxArray[i] <= auxArray[j]) {
          // Push index and value to animations array for overwriting the mainArray
          animations.push([k, auxArray[i]]);
          // Copy the value from the auxiliary array to the mainArray
          mainArray[k] = auxArray[i];
          // Move to the next element in the first subarray
          i++;
        } else {
          // Push index and value to animations array for overwriting the mainArray
          animations.push([k, auxArray[j]]);
          // Copy the value from the auxiliary array to the mainArray
          mainArray[k] = auxArray[j];
          // Move to the next element in the second subarray
          j++;
        }
      }
    
      // Copy remaining elements from the first subarray, if any
      for (; i <= mid; i++, k++) {
        // Push indices of elements being compared to the animations array
        animations.push([i, i]);
        animations.push([i, i]);
        // Push index and value to animations array for overwriting the mainArray
        animations.push([k, auxArray[i]]);
        // Copy the value from the auxiliary array to the mainArray
        mainArray[k] = auxArray[i];
      }
    
      // Copy remaining elements from the second subarray, if any
      for (; j <= end; j++, k++) {
        // Push indices of elements being compared to the animations array
        animations.push([j, j]);
        animations.push([j, j]);
        // Push index and value to animations array for overwriting the mainArray
        animations.push([k, auxArray[j]]);
        // Copy the value from the auxiliary array to the mainArray
        mainArray[k] = auxArray[j];
      }
    }
    
    return (
      <div className="App">
      <Header user={user}  setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route index element={<Algos />} /> */}
        <Route path='/algos' element={<Algos />} />
        <Route path='/algovis' element={<AlgoVisualizer mergeFunc={mergeFunc} />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
};   
  

export default App;
