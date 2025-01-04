export function quickSort(unsortedArray) {
    let array = [...unsortedArray];

    if (array.length < 2) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];

    const left = array.filter((element) => element < pivot);
    const right = array.filter((element) => element > pivot);
    const equal = array.filter((element) => element === pivot);

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

/** notes
 * quick sort is a recursive algorithm
 * key word for quick sort === pivot
 * pivot is one of the elements in the array that meets 3 conditions after sorting
 *  1. in correct position after sorting
 *  2. items to the left of pivot are smaller
 *  3. items to right of pivot are larger
 */
