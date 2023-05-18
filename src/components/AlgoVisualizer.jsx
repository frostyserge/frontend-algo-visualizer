import { useState, useEffect } from 'react'
import './AlgoVisualizer.css';
import MergeSort from './MergeSort';

function AlgoVisualizer ({ mergeFunc, mergeHalves }) {

    // initializing the array state on an empty array
    const [array, setArray] = useState([]);

    // take action when component mounts by calling resetArray func which generates a new random array
    useEffect(() => {
        resetArray();
        // mergeFunc(array);
    }, []);
    // console.log(array);
    console.log(mergeFunc(array))
    function resetArray() {
        const newArray = [];
        // so here I use a for loop to iterate 250 items in the array and then push a random integer from 10 to 500 into newArray
        for(let i = 0; i < 250; i++) {
            newArray.push(randomNum(10, 700));
        }
        // update the value of array to be newArray
        setArray(newArray)
    }
        

    return(
        <>
            <button onClick={resetArray}>New Array</button> {/* button that calls the function resetArray that is first called when our component was mounted */}
            {/* {console.log()} */}
            <button onClick={mergeFunc}>Merge Sort</button>
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

// stole it here https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default AlgoVisualizer;