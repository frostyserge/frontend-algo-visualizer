import { useState, useEffect } from 'react'
import './AlgoVisualizer.css';
import MergeSort from './MergeSort';

function AlgoVisualizer ({ mergeFunc, mergeFuncHelp, merge, animations }) {

    // initializing the array state on an empty array
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);

    // const animationSpeed = 100;

    // take action when component mounts by calling resetArray func which generates a new random array
    useEffect(() => {
        resetArray();
        // mergeFunc(array);
    }, []);
    // console.log(array);
    console.log(array)
    function resetArray() {
        const newArray = [];
        // here I use a for loop to iterate 150 items in the array and then push a random integer from 10 to 500 into newArray by ivoking the randomNum function
        for(let i = 0; i < 150; i++) {
            newArray.push(randomNum(10, 700));
        }
        // update the value of array to be newArray
        setArray(newArray);
    };
     
    // stole it here https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    function runMergeSort () {
        setSorting(true);
       const animations = mergeFunc(array);
        animateMergeSort(animations);
    };

    function animateMergeSort (animations) {
        // animation logic
        
        for (let i = 0; i < animations.length; i++) {
            const [idx1, idx2] = animations[i];
            const arrayElements = document.getElementsByClassName('array-element');
            arrayElements[idx1].classList.add('array-element');
            arrayElements[idx2].classList.add('array-element');
            
            setTimeout(() => {
                // animation fx for items in the array based on the color value
                
            }, i * 100);
        };
    }
    
    return(
        <>
            <div className="controls">
                <button onClick={resetArray} disabled={sorting}>New Array</button> {/* button that calls the function resetArray that is first called when our component was mounted */}
                <button onClick={runMergeSort} disabled={sorting}>Merge Sort</button>
            </div>
            <div className="array-container">
                {array.map((number, idx) => (
                    <div className="array-element" key={idx} style={{height: `${number}px`}}>
                        {/* {number} */}
                    </div>
                ))}
            </div>
        </>
    );
}


export default AlgoVisualizer;