import { useState, useEffect } from 'react'
import './AlgoVisualizer.css';

function AlgoVisualizer () {

    // initializing the array state on an empty array
    const [array, setArray] = useState([]);

    // take action when component mounts by calling resetArray func which generates a new random array
    useEffect(() => {
        resetArray();
    }, []);

    function resetArray() {
        const newArray = [];
        // so here I use a for loop to iterate 100 items in the array and then push a random integer from 10 to 500 into newArray
        for(let i = 0; i < 100; i++) {
            newArray.push(randomNum(10, 500));
        }
        // update the value of array to be newArray
        setArray(newArray)
    }
    return(
        <>
        {array.map((value, idx) => (
            <div className="arrayElement" key={idx}>
                {value}
            </div>
        ))}
        </>
    );
}

// stole it here https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default AlgoVisualizer;