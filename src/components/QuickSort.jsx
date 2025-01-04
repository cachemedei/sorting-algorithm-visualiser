import useArray from '../hooks/use-array.js';
import { quickSort } from '../algorithms/quick-sort.js';
import Buttons from './Buttons.jsx';

const QuickSort = () => {
    const { array, setArray } = useArray(50, 400);

    const handleSort = () => {
        const sortedArray = quickSort(array);
        setArray(sortedArray);
    };

    return (
        <main className='flex flex-col items-center justify-between h-[600px]'>
            <div className='flex justify-evenly items-end w-fit mx-auto mt-[50px]'>
                {array.map((number, i) => {
                    return (
                        <div
                            key={i}
                            className='w-[10px] mx-[3px] bg-pink-300'
                            style={{
                                height: `${number}px`,
                            }}
                        ></div>
                    );
                })}
            </div>
            <Buttons handleSort={handleSort} />
        </main>
    );
};
export default QuickSort;
