import { heapSort } from '../algorithms/heap-sort.js';
import useArray from '../hooks/use-array.js.js';
import Buttons from './Buttons.jsx';

const HeapSort = () => {
    const { array, setArray, sorted, setSorted } =
        useArray(25, 50);

    const handleSort = () => {
        heapSort(array, setArray, sorted, setSorted);
    };

    return (
        <main className='flex flex-col justify-between items-center h-[600px] relative'>
            <div className='flex justify-start w-[60%] items-center space-x-[10px] my-auto'>
                {array.map((number, i) => {

                    return (
                        <div
                            key={i}
                            className='bg-yellow-200'
                            style={{
                                width: `${number / 2}px`,
                                height: `${number * 4}px`,
                            }}
                        ></div>
                    );
                })}
            </div>

            <div className='flex justify-end absolute top-[150px] right-[240px] items-center mx-auto h-[200px] space-x-[10px]'>
                {sorted.map((number, i) => {
                    return (
                        <div
                            key={i}
                            className='bg-green-200'
                            style={{
                                width: `${number / 2.5}px`,
                                // messed with index to provide clear difference when numbers are similar
                                height: `${(number * i / 4)}px`,
                            }}
                        ></div>
                    );
                })}
            </div>
            <Buttons handleSort={handleSort} />
        </main>
    );
};
export default HeapSort;
