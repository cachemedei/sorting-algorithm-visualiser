function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

export function mergeSort(array) {

    if (array.length === 1) {
        return array;
    }

    const midIndex = Math.floor(array.length / 2);
    const left = array.slice(0, midIndex);
    const right = array.slice(midIndex);

    return merge(mergeSort(left), mergeSort(right));
}



/** merge() function
 * initiliazes an empty array and pointers to track the current position in the
 * left and right arrays
 *
 * iterate while both arrays have unsorted elements, compare each element in focus from
 * left and right and add the smaller one to the resultArray
 *
 * add any remaining elements to the end of resultArray
 */

/** mergeSort() function
 * if the array has 1 element, return it
 *
 * split the array into 2, left and right by using the middle index
 * recursively call merge on the left and right arrays
 */
