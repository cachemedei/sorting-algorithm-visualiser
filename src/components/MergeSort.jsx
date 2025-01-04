import { mergeSort } from '../algorithms/merge-sort.js';
import useArray from '../hooks/use-array.js';
import Buttons from './Buttons.jsx';

const MergeSort = () => {
    const { array, setArray } = useArray(40, 300);

    const handleSort = () => {
        const sortedArray = mergeSort(array);
        setArray(sortedArray);
    };

    return (
        <main className='flex flex-col items-center justify-between h-[600px]'>
            <div className='flex justify-evenly items-end w-fit mx-auto mt-[50px]'>
                {array.map((number, i) => {
                    return (
                        <div
                            key={i}
                            className='bg-orange-300 w-[20px] mx-[3px] rounded'
                            style={{ height: `${number}px` }}
                        ></div>
                    );
                })}
            </div>
            <Buttons handleSort={handleSort} />
        </main>
    );
};
export default MergeSort;
