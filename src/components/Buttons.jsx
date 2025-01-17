import { useNavigate } from 'react-router-dom';
import { SlRefresh } from 'react-icons/sl';

const Buttons = ({handleSort}) => {
    const navigate = useNavigate();
    return (
        <section className='w-[300px] flex items-center justify-between p-[30px]'>
            <button
                onClick={handleSort}
                className='border-2 md:text-[28px] px-[10px] py-[6px] rounded'
            >
                SORT
            </button>
            <button onClick={() => navigate(0)}>
                <SlRefresh className='w-[25px] h-[25px] md:w-[45px] md:h-[45px]' />
            </button>
        </section>
    );
};
export default Buttons;
