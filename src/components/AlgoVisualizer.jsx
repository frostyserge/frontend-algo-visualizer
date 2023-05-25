import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './AlgoVisualizer.css';

function AlgoVisualizer({ mergeFunc }) {
    // initializing the array state on an empty array
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);

    // const animationSpeed = 100;

    // take action when component mounts by calling resetArray func which generates a new random array
    useEffect(() => {
        resetArray();
        mergeFunc(array);
    }, []);
    // console.log(mergeFunc(array));
    console.log(array);
    function resetArray() {
        const newArray = [];
        // here I use a for loop to iterate 120 items in the array and then push a random integer from 10 to 500 into newArray by ivoking the randomNum function
        for (let i = 0; i < 120; i++) {
            newArray.push(randomNum(10, 700));
        }
        // update the value of array to be newArray
        setArray(newArray);
    }

    // stole it here https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function runMergeSort() {
        setSorting(true);
        const animations = mergeFunc(array);
        // console.log(mergeFunc);
        for (let i = 0; i < animations.length; i++) {
            const arrayElements = Array.from(document.getElementsByClassName('array-element'));
            const colorChange = i % 3 !== 2;
            if (colorChange) {
                const [idx1, idx2] = animations[i];
                const idx1Style = arrayElements[idx1]?.style;
                const idx2Style = arrayElements[idx2]?.style;
                const color = i % 3 === 0 ? 'blue' : 'red';
                if (idx1Style && idx2Style) {
                    setTimeout(() => {
                        idx1Style.backgroundColor = color;
                        idx2Style.backgroundColor = color;
                    }, i * 20);
                }
            } else {
                setTimeout(() => {
                    const [idx1, newHeight] = animations[i];
                    const idx1Style = arrayElements[idx1]?.style;
                    if (idx1Style) {
                        idx1Style.height = `${newHeight}px`
                    }
                }, i * 20);
            }
        }
    }
        return (
            <>
                <div className="controls">
                    <button onClick={resetArray} disabled={sorting}>
                        New Array
                    </button>
                    {/* button that calls the function resetArray that is first called when our component was mounted */}
                    <button onClick={runMergeSort} disabled={sorting}>
                        Merge Sort
                    </button>
                </div>
                <div className="array-container">
                    {array.map((number, idx) => (
                        <div
                            className="array-element"
                            key={idx}
                            style={{
                                height: `${number}px`
                            }}
                        >
                            {/* {number} */}
                        </div>
                    ))}
                </div>
            </>
        );
}

export default AlgoVisualizer;
