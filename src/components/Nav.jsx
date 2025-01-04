import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='bg-[#2d2c2c] min-h-screen text-[#ebe5e5] font-light'>
            <section className='p-[20px]'>
                <section className='flex justify-evenly text-[15px] md:text-[20px] text-center'>
                    <NavLink
                        to='/heap'
                        className={({ isActive }) =>
                            isActive ? 'border-2 p-[5px] rounded self-center' : 'p-2 rounded self-center'
                        }
                    >
                        Heap Sort
                    </NavLink>
                    <NavLink
                        to='/merge'
                        className={({ isActive }) =>
                            isActive ? 'border-2 p-2 rounded' : 'p-2 rounded'
                        }
                    >
                        Merge Sort
                    </NavLink>
                    <NavLink
                        to='/bubble'
                        className={({ isActive }) =>
                            isActive ? 'border-2 p-2 rounded' : 'p-2 rounded'
                        }
                    >
                        Bubble Sort
                    </NavLink>
                    <NavLink
                        to='/quick'
                        className={({ isActive }) =>
                            isActive ? 'border-2 p-2 rounded' : 'p-2 rounded'
                        }
                    >
                        Quick Sort
                    </NavLink>
                </section>
            </section>
            <Outlet />
        </nav>
    );
};
export default Nav;
