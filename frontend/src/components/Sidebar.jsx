import { Link, useLocation, useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate();
    const pathname = useLocation().pathname;
    const links = [
        {
            name: 'Dashboard',
            path: '/'
        },
        {
            name: 'Products',
            path: '/products'
        },
        {
            name: 'Categories',
            path: '/categories'
        },
        {
            name: 'Salesman',
            path: '/salesman'
        },
        {
            name: 'Analytics',
            path: '/analytics'
        },
    ]

    const handleLogout = () => {
        navigate('/login');
    }
    return (
        <div className='w-[17%] h-screen bg-secondary'>
            <div className='Logo py-8'>
                <h1 className='text-xl text-textColor font-bold text-center hover:text-tertiary cursor-pointer'>Inventory Management System</h1>
            </div>
            <div className='w-full bg-primary h-2'></div>
            <div className='pt-8 flex flex-col flex-1 items-center'>
                <ul className='w-full flex flex-col gap-3'>
                    {
                        links.map((item, index) => {
                            return (
                                <Link to={item.path} className={pathname === item.path ? `pl-16 font-bold text-lg text-primary cursor-pointer bg-tertiary w-[85%] mx-auto rounded-lg py-2` : `pl-16 font-bold text-lg text-textColor cursor-pointer hover:bg-primary hover:text-tertiary w-[85%] mx-auto rounded-lg py-2`}>
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                    <li onClick={handleLogout} className='pl-16 font-bold text-lg text-textColor cursor-pointer hover:bg-primary hover:text-tertiary w-[85%] mx-auto rounded-lg py-2'>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
