import AlgoVisualizer from "./AlgoVisualizer";

// the MergeSort function takes (array) as input
function MergeSort () {
    const  mergeFunc = (array) => {
        
        // array to store animations
        const animations = [];

        // create a shallow copy of original array
        const sortedArray = array.slice();

        
        // if the array.length is more than 1 -> define the Middle Index of the array
        const midIdx = Math.floor(array.length / 2);
        
        // grab two halves of the array by using the .slice() method - the left one and the right one
        const left = array.slice(0, midIdx);
        const right = array.slice(midIdx);
        
        // return the helper function for sorting. This function is responsible for for doing the merge sort algo. It takes the copy of the original array, the starting index and the last index of the subarray to be sorted and animations as arguments.
        return mergeFuncHelp(sortedArray, 0, sortedArray.length - 1, animations);

        return animations;
    }
    
    // just in case checking if the array length equals to 1 or is less than that = return the array as already sorted
    if (array.length <= 1) {
        return array;
    };
    // helper function that merges the two halves
    function mergeHalves(left, right) {
        let mergedArray = [];
        let i = 0;
        let j = 0;
        // compare items in left and rigth arrays and then merge them
        for (; i < left.length && j < right.length;) {
                if(left[i] < right[j]) {
                    mergedArray.push(left[i]);
                    i++;
                } else {
                    mergedArray.push(right[j]);
                    j++;
                }
            
        }
        
        // add remaining items from the left array
        for(; i < left.length; i++) {
            mergedArray.push(left[i])
        };
        
        // add remaining items from thr right array
        for(; j < right.length; j++) {
            mergedArray.push(right[j])
        };
        
        // return the merge sorted array
        return mergedArray;
    }

    return(
        <AlgoVisualizer mergeFunc={mergeFunc} mergeHalves={mergeHalves} />
    )
};

export default MergeSort;