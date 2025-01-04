import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='bg-[#2d2c2c] min-h-screen min-w-[1100px] p-[40px] text-[#ebe5e5]'>
            <section className='flex justify-evenly text-[20px]'>
                <NavLink
                    to='/heap'
                    className={({ isActive }) => (isActive ? 'border-2 p-2 rounded' : 'p-2 rounded')}
                >
                    Heap Sort
                </NavLink>
                <NavLink
                    to='/merge'
                    className={({ isActive }) => (isActive ? 'border-2 p-2 rounded' : 'p-2 rounded')}
                >
                    Merge Sort
                </NavLink>
                <NavLink
                    to='/bubble'
                    className={({ isActive }) => (isActive ? 'border-2 p-2 rounded' : 'p-2 rounded')}
                >
                    Bubble Sort
                </NavLink>
                <NavLink
                    to='/quick'
                    className={({ isActive }) => (isActive ? 'border-2 p-2 rounded' : 'p-2 rounded')}
                >
                    Quick Sort
                </NavLink>
            </section>
            <Outlet />
        </nav>
    );
};
export default Nav;
