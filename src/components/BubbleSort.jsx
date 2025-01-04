import useArray from '../hooks/use-array.js';
import Buttons from './Buttons.jsx';
import { bubbleSort } from '../algorithms/bubble-sort.js';

const BubbleSort = () => {
    const { array, setArray, highlighted, setHighlighted, setSorted } =
        useArray(10, 100);

    const handleSort = async () => {
        bubbleSort(array, setArray, setHighlighted, setSorted);
    };

    return (
        <main className='flex flex-col items-center justify-between h-[600px]'>
            <div className='relative mx-auto mt-[50px] w-[fit] h-[500px] md:w-[750px] md:h-[700px]'>
                {array.map((number, i) => {
                    const isHighlighted = highlighted.includes(i);
                    return (
                        <div
                            key={i}
                            className={`rounded-full md:absolute ${
                                isHighlighted
                                    ? highlighted[0] === i
                                        ? 'bg-purple-300'
                                        : 'bg-yellow-300'
                                    : 'bg-blue-300'
                            }`}
                            style={{
                                height: `${number}px`,
                                width: `${number}px`,
                                left: `${i * 70}px`,
                                bottom: `${i * 40}px`,
                            }}
                        ></div>
                    );
                })}
            </div>
            <Buttons handleSort={handleSort} />
        </main>
    );
};
export default BubbleSort;
