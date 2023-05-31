import './Algos.css';
import { useState, useEffect } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

function Algos() {
    const [array, setArray] = useState([]);
    const [sorting, setSorting] = useState(false);
    const [sorted, setSorted] = useState(false);

    // const animationSpeed = 100;

    // take action when component mounts by calling resetArray func which generates a new random array
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
        // here I use a for loop to iterate 88 items in the array and then push a random integer from 10 to 500 into newArray by ivoking the randomNum function
        for (let i = 0; i < 88; i++) {
            newArray.push(randomNum(10, 700));
        }
        // update the value of array to be newArray
        setArray(newArray);
    }

    // stole it here https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
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
    };

    function runMergeSort() {
        setSorting(true);
        const copiedArray = [...array];
        const animations = mergeFunc(copiedArray);
        for (let i = 0; i < animations.length; i++) {
            const arrayElements = Array.from(
                document.getElementsByClassName('array-element')
            );
            const colorChange = i % 3 !== 2;
            if (colorChange) {
                const [idx1, idx2] = animations[i];
                const idx1Style = arrayElements[idx1]?.style;
                const idx2Style = arrayElements[idx2]?.style;
                const color = i % 3 === 0 ? 'red' : 'green';
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
                        idx1Style.height = `${newHeight}px`;
                    }
                }, i * 20);
            }
        }
    };

    const bubbleFunc = (array) => {
        // const to store an array of animations for the sorting process
        const animations = [];

        // outer for loop to iterate thru the length of the array
        for (let i = 0; i < array.length; i++) {
            // inner loop to iterate thru the array minus the current index
            for (let j = 0; j < array.length - i - 1; j++) {
                // then push the indices that are compared to the animations array
                animations.push([j, j + 1]);
                // swapping of elements by comparing the current index to the one next to it
                if (array[j] > array[j + 1]) {
                    // basically if the left side is greater than the right side
                    // we switch the indeces' spots
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    // then again push the swapped elements to the animations array
                    animations.push([j, j + 1]);
                }
            }
        }
        return animations;
    };

    function runBubbleSort() {
        setSorting(true);
        const copiedArray = [...array];
        const animations = bubbleFunc(copiedArray);
        const arrayElements = Array.from(
            document.getElementsByClassName('array-element')
        );

        for (let i = 0; i < arrayElements.length - 1; i++) {
            for (let j = 0; j < (arrayElements.length - i - 1); j++) {
                setTimeout(() => {
                    if(arrayElements[j] > arrayElements[j + 1]) {
                        if (j > 0) {
                            arrayElements[j - 1]?.style.classList.remove('swapped');
                            arrayElements[j]?.style.classList.remove('swapped');
                        }
                        arrayElements[j]?.style.classList.add('swapped');
                        arrayElements[j + 1]?.style.classList.add('swapped');
                        setTimeout(() => {
                            const temp = arrayElements[j];
                            arrayElements[j] = arrayElements[j + 1];
                            arrayElements[j + 1] = temp;
                        }, 100)
                        if (j === arrayElements.length - i - 2) {
                            setTimeout(() => {
                                arrayElements[j]?.style.classList.remove('swapped');
                                arrayElements[j + 1]?.style.classList.remove('swapped');
                            }, 200)
                        }
                    }
                }, 200 + 100)
            }
            // const [idx1, idx2] = animations[i];
            // const idx1Style = arrayElements[idx1]?.style;
            // const idx2Style = arrayElements[idx2]?.style;

            // setTimeout(() => {
            //     idx1Style.backgroundColor = 'red';
            //     idx2Style.backgroundColor = 'red';
            // }, i * 100);

            // setTimeout(() => {
            //     idx1Style.backgroundColor = '';
            //     idx2Style.backgroundColor = '';
          
            //     const tempHeight = idx1Style.height;
            //     idx1Style.height = idx2Style.height;
            //     idx2Style.height = tempHeight;
          
            //     const tempValue = copiedArray[idx1];
            //     copiedArray[idx1] = copiedArray[idx2];
            //     copiedArray[idx2] = tempValue;
          
            //     if (i === animations.length - 1) {
            //       setTimeout(() => {
            //         setSorting(false);
            //       }, 100);
            //     }
            //   }, i * 100);
        }

        // setTimeout(() => {
        //     setSorting(false);
        // }, animations.length * 100);
    }

    return (
        <>
            <>
                <div className="controls">
                    <button onClick={resetArray}>New Array</button>
                    {/* button that calls the function resetArray that is first called when our component was mounted */}
                    <button onClick={runMergeSort}>Merge Sort</button>
                    <button onClick={runBubbleSort}>Bubble Sort</button>
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
