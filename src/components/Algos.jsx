import './Algos.css';
import { useState, useEffect } from 'react';
import { MDBContainer, MDBBtn } from 'mdb-react-ui-kit';

function Algos() {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);

    // const animationSpeed = 100;

    // call a function when component mounts by calling resetArray func which generates a new random array
    useEffect(() => {
        resetArray();
    }, []);
    useEffect(() => {
        mergeFunc(array);
    }, []);
    useEffect(() => {
        bubbleFunc(array);
    }, []);
    // console.log(mergeFunc(array));
    console.log(array);
    function resetArray() {
        const newArray = [];
        // for loop to iterate 88 items in the array and then push a random integer from 10 to 500 into newArray by ivoking the randomNum function
        for (let i = 0; i < 88; i++) {
            newArray.push(randomNum(10, 500));
        }
        // update the value of array to be newArray
        setArray(newArray);
    }

    // from here https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const mergeFunc = (array) => {
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

    function mergeFuncHelp(mainArray, start, end, auxArray, animations) {
        if (start >= end) return;

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

    function runMergeSort() {
        setSorting(true);
        const copiedArray = [...array];
        // calling the mergeFunc function to generate an array of animations for the merge sort algorithm.
        const animations = mergeFunc(copiedArray);

        for (let i = 0; i < animations.length; i++) {
            // converting the arrayElements into array
            const arrayElements = Array.from(
                document.getElementsByClassName('array-element')
            );

            // Check if it's a color change step or a height update step
            const colorChange = i % 3 !== 2;

            // Color change step
            if (colorChange) {
                // Retrieve the indices and styles of the elements to be compared
                const [idx1, idx2] = animations[i];
                const idx1Style = arrayElements[idx1].style;
                const idx2Style = arrayElements[idx2].style;

                // Alternate between red and green colors for comparison steps
                const color = i % 3 === 0 ? 'red' : 'green';

                if (idx1Style && idx2Style) {
                    setTimeout(() => {
                        // Apply the color to the compared elements
                        idx1Style.backgroundColor = color;
                        idx2Style.backgroundColor = color;
                    }, i * 10);
                }
            } else {
                // Height update step

                setTimeout(() => {
                    // Retrieve the index and new height of the element
                    const [idx1, newHeight] = animations[i];
                    const idx1Style = arrayElements[idx1].style;

                    if (idx1Style) {
                        // Update the height of the element
                        idx1Style.height = `${newHeight}px`;
                    }
                }, i * 10);
            }
        }
    }

    const bubbleFunc = (array) => {
        const animations = []; // array to store animations representing the steps of the sorting process

        // outer loop iterating over the elements of the array
        for (let i = 0; i < array.length; i++) {
            // inner loop iterating over the elements of the array
            // the number of iterations decreases with each outer loop iteration
            for (let j = 0; j < array.length - i - 1; j++) {
                animations.push([j, j + 1, false]); // false indicates a comparison

                // checking if the current element is greater than the next element
                if (array[j] > array[j + 1]) {
                    // swapping the elements using destructuring assignment
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];

                    animations.push([j, j + 1, true]); // true indicates a swap of elements
                }
            }
        }

        return animations; // Return the array of animations
    };

    function runBubbleSort() {
        setSorting(true);
        const copiedArray = [...array];
        const animations = bubbleFunc(copiedArray); // calling the bubbleFunc function to generate an array of animations for the bubble sort algorithm.
        const arrayElements = Array.from(
            document.getElementsByClassName('array-element')
        ); // converting the arrayElements into array

        for (let i = 0; i < animations.length; i++) {
            const [idx1, idx2, isSwap] = animations[i]; // destructuring the animations array to get the indices of the elements
            // and a bolean flag to toggle the indicator whether it's a swap or just a comparison
            const idx1Style = arrayElements[idx1].style;
            const idx2Style = arrayElements[idx2].style;

            setTimeout(() => {
                // delay to change
                idx1Style.backgroundColor = 'red';
                idx2Style.backgroundColor = 'red';
            }, i * 10);

            setTimeout(() => {
                if (isSwap) {
                    // if this animation is a swap, swap the heights
                    const tempHeight = idx1Style.height;
                    idx1Style.height = idx2Style.height;
                    idx2Style.height = tempHeight;
                }
                idx1Style.backgroundColor = '';
                idx2Style.backgroundColor = '';
            }, i * 10 + 50);
        }

        setTimeout(() => {
            setSorting(false);
        }, animations.length * 100);
    }

    return (
        <>
            <>
                <div className="controls">
                    <MDBBtn
                        color="light"
                        rippleColor="dark"
                        onClick={resetArray}
                    >
                        New Array
                    </MDBBtn>
                    <MDBBtn
                        color="light"
                        rippleColor="dark"
                        onClick={runMergeSort}
                    >
                        Merge Sort
                    </MDBBtn>
                    <MDBBtn
                        color="light"
                        rippleColor="dark"
                        onClick={runBubbleSort}
                    >
                        Bubble Sort
                    </MDBBtn>
                </div>
                <MDBContainer>
                    <div className="array-container">
                        {array.map((number, idx) => (
                            <div
                                className="array-element"
                                key={idx}
                                style={{
                                    height: `${number}px`,
                                }}
                            >
                                {/* {number} */}
                            </div>
                        ))}
                    </div>
                </MDBContainer>
            </>
        </>
    );
}

export default Algos;
