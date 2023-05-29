// import AlgoVisualizer from "./AlgoVisualizer";

// // the MergeSort function takes (array) as input
// function MergeSort () {
//     const  mergeFunc = (array) => {
//         // array to store animations
//         const animations = [];
//         // just in case checking if the array length equals to 1 or is less than that = return the array as already sorted
//         if (array.length <= 1) return array;

//         // create a shallow copy (auxilliary array) of the original array
//         const auxArray = array.slice();
        
//         // return the helper function for sorting. This function is responsible for for doing the merge sort algo.
//         // It takes the original array, the starting index and the last index of the subarray to be sorted, the copy of the otiginal array and animations as arguments.
//         mergeFuncHelp(array, 0, array.length - 1, auxArray, animations);
        
//         return animations;
//     };
    
//     function mergeFuncHelp (array, start, end, auxArray, animations) {
        
//         if (start >= end) return;

//         // if the array.length is more than 1 -> define the Middle Index of the array
//         const mid = Math.floor((start + end) / 2);

//         // recursevly sort the left part of the array
//         mergeFuncHelp(auxArray, start, mid, array, animations);
//         // recursevly sort the right side of the array
//         mergeFuncHelp(auxArray, mid + 1, end, array, animations);
//         // merge the two sorted halves of the array
//         merge(array, start, mid, end, auxArray, animations);
//     }
    
//         // function that merges the two halves
//         function merge(array, start, mid, end, auxArray, animations) {

//         // empty array to store the values of merged array
//         let mergedArray = [];
//         // start and next after mid indices
//         let i = start;
//         let j = mid + 1;

//         // compare items in left and rigth arrays and then merge them
//         // in each loop down below index k represents the index of the element in the original array that needs to be updated during merging
//         for (let k = start; k <= end; k++) {
//             if (i > mid) { // if left side elements are merged - push elements from the right side to mergedArray
//                 mergedArray.push(auxArray[j++]);
//             } else if (j > end) { // if the right side is merged - push from the left
//                 mergedArray.push(auxArray[i++]);
//             } else if (auxArray[i] <= auxArray[j]) { // if the current element from the left is smaller or equal than the rigth one - push it
//                 mergedArray.push(auxArray[i++]);
//             } else { // and vice versa
//                 mergedArray.push(auxArray[j++]);
//             }
//         };

//         // now we need to update the original array with the sorted values
//         for (let k = start; k <= end; k++) {
//             animations.push([k, mergedArray[k - start]]);
//             array[k] = mergedArray[k - start];
//         };

//     };   
//         return(
//                 <AlgoVisualizer mergeSort={MergeSort} />
//             )
// };

// export default MergeSort;