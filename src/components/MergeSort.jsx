import AlgoVisualizer from "./AlgoVisualizer";

// the MergeSort function takes (array) as input
function MergeSort () {
    const  mergeFunc = (array) => {

        // just in case checking if the array length equals to 1 or is less than that = return the array as already sorted
        if (array.length <= 1) {
            return array;
        };
    
        // if the array.length is more than 1 -> define the Middle Index of the array
        const midIdx = Math.floor(array.length / 2);
    
        // grab two halves of the array by using the .slice() method - the left one and the right one
        const left = array.slice(0, midIdx);
        const right = array.slice(midIdx);
    
        // recursively sort the left and the right halves
        return mergeHalves(mergeFunc(left), mergeFunc(right));
    }
    
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