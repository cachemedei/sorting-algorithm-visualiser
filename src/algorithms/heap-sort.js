function createHeap(array) {
    // create heap from the input array
    let heap = [...array];
    // starting from the last non-leaf node, heapify each node
    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
        heapify(heap, i, heap.length);
    }
    return heap;
}

function heapify(heap, i, heapSize) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < heapSize && heap[left] > heap[largest]) {
        largest = left;
    }
    if (right < heapSize && heap[right] > heap[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]];
        heapify(heap, largest, heapSize);
    }
}

export function heapSort(arr, setArray, sorted, setSorted) {
    let array = [...arr];
    let sortedArray = [];
    let heap = createHeap(array);

    let frameCount = 0;
    const framesToWait = 10;

    function step() {
        frameCount++;

        if (frameCount >= framesToWait) {
            frameCount = 0;

            if (heap.length > 0) {
                setArray([...heap]);

                sortedArray.unshift(heap.shift());
                setArray(heap);
                setSorted([...sorted, ...sortedArray]);

                heap = createHeap(heap);
            } else {
                return;
            }
        }
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

/** shift()
 * removes the first element of an array and returns it
 *
 * unshift()
 * inserts new elements at the start of an array
 */
