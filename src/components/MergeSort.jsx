import AlgoVisualizer from "./AlgoVisualizer";

// the MergeSort function takes (array) as input
function MergeSort () {
    const  mergeFunc = (array) => {
        
        // array to store animations
        const animations = [];

        // create a shallow copy (auxilliary array) of the original array
        const auxArray = array.slice();
        
        
        // return the helper function for sorting. This function is responsible for for doing the merge sort algo. It takes the copy of the original array, the starting index and the last index of the subarray to be sorted and animations as arguments.
        return mergeFuncHelp(auxArray, 0, auxArray.length - 1, animations);

        return animations;
    };
    
    function mergeFuncHelp (auxArray, start, end, array, animations) {
        if (start >= end) return;

        // if the array.length is more than 1 -> define the Middle Index of the array
        const mid = Math.floor((start + end) / 2);

        // recursevly sort the left part of the array
        mergeFuncHelp(auxArray, start, mid, array, animations);
        // recursevly sort the right side of the array
        mergeFuncHelp(auxArray, mid + 1, end, array, animations);
        // merge the two sorted halves of the array
        merge(array, start, mid, end, auxArray, animations);
    }
    
    // just in case checking if the array length equals to 1 or is less than that = return the array as already sorted
    // if (array.length <= 1) {
    //     return array;
    // };
        // function that merges the two halves
        function merge(array, start, mid, end, auxArray, animations) {

        // empty array to store the values of merged array
        let mergedArray = [];
        // store start index in the left var and next index after the mid in the right var
        let left = start;
        let right = mid + 1;

        // compare items in left and rigth arrays and then merge them
        for (let i = start; i <= end; i++) {
            // push and animation object to the animations array to mark the compared items in the array with a specific color
            animations.push({ idxs: [left, right], color: 'blue'});

            // check if the left index is reachable or the right index is not reachable and also if the item at left index is smaller or equal to the item at right index
            if(left <= mid && (right > end || auxArray[left] <= auxArray[right])) {

                // push animations object to the animations array to mark the color of the swapped item
                animations.push({idxs: [i], color: 'red'});

                // add the smaller item from the left part of the array to the mergedArray and increment the left idnex
                mergedArray[i - start] = auxArray[left++];
            } else {
                // if the above conditions are not met => push animations obj to the animations array to mark the element that is to be swapped with a color for swapped items
                animations.push({idxs: [i], color: 'red'});
                
                // and add the smaller item from the rigth half of the array to the mergedArray and increment the right index
                mergedArray[i - start] = array[right++];
            }
        };

        // now we need to update the original array with the sorted values
        for (let i = start; i <= end; i++) {
            auxArray[i] = mergedArray[i - start]; // copy mergedArray into oiginal array
            // push animations obj to the animatons array to mark sorted items with the specific color for sorted ones
            animations.push({idxs: [i], color: 'green'})
        }


    return(
            <AlgoVisualizer mergeFunc={mergeFunc} mergeFuncHelp={mergeFuncHelp} merge={merge} />
        )
    }   
};

export default MergeSort;