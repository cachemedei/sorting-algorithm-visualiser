// bubble sort function with animation
export function bubbleSort(unsortedArray, setArray, setHighlighted) {
    let arr = [...unsortedArray];
    let i = 0,
        j = 0;
    let frameCount = 0;
    const framesToWait = 8;

    function step() {
        frameCount++;

        if (frameCount >= framesToWait) {
            frameCount = 0;

            if (i < arr.length) {
                if (j < arr.length - i - 1) {
                    setHighlighted([j, j + 1]);
                    if (arr[j] > arr[j + 1]) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        setArray([...arr]);
                    }
                    j++;
                } else {
                    j = 0;
                    i++;
                    setHighlighted([]);
                }
            } else {
                return;
            }
        }
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

// bubble sort function
function originalBubbleSort(unsortedArray) {
    let array = [...unsortedArray];
    let length = array.length;

    for (let i = 0; i < length - 1; i++) {
        let swapped = false;
        for (let p = 0; p < length - i - 1; p++) {
            if (array[p] > array[p + 1]) {
                let tempValue = array[p];
                array[p] = array[p + 1];
                array[p + 1] = tempValue;
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return array;
}

/** why array = [...unsortedArray] instead of array = unsortedArray??
 * array = unsortedArray mutates the existing array rather than creating a new one
 * react setState relies on a new reference to trigger a re-render
 * therefore the function should create and return a new array
 *
 * issues
 * i tried calling the useArray() hook from inside this function which is incorrect
 * hooks like useArray() can only be called from inside react functional components not standalone functions
 * to fix: pass setArray and setSorted in through the animatedBubbleSort() function from the BubbleSort component
 */
