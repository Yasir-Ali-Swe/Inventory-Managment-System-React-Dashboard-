import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiX } from 'react-icons/hi';

const Sidebar = ({ onClose }) => {
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
            name: 'Invoice',
            path: '/invoice'
        },
        {
            name: 'Analytics',
            path: '/analytics'
        },
         {
            name: 'Profile',
            path: '/profile'
        },
    ]

    const handleLogout = () => {
        navigate('/login');
    }

    const handleLinkClick = () => {
        if (onClose) {
            onClose();
        }
    }

    return (
        <div className='w-full h-screen bg-secondary flex flex-col'>
            {/* Mobile Close Button */}
            <div className='lg:hidden flex justify-end p-4'>
                <button
                    onClick={onClose}
                    className='p-2 text-textColor hover:text-tertiary transition-colors'
                >
                    <HiX size={24} />
                </button>
            </div>

            <div className='Logo py-4 lg:py-8 px-4'>
                <h1 className='text-lg lg:text-xl text-textColor font-bold text-center hover:text-tertiary cursor-pointer leading-tight'>
                    Inventory Management System
                </h1>
            </div>
            <div className='w-full bg-primary h-2'></div>
            <div className='pt-4 lg:pt-8 flex flex-col flex-1 items-center px-2'>
                <ul className='w-full flex flex-col gap-2 lg:gap-3'>
                    {
                        links.map((item, index) => {
                            return (
                                <Link 
                                    key={index}
                                    to={item.path} 
                                    onClick={handleLinkClick}
                                    className={pathname === item.path 
                                        ? `pl-4 lg:pl-16 font-bold text-sm lg:text-lg text-primary cursor-pointer bg-tertiary w-[95%] lg:w-[85%] mx-auto rounded-lg py-2 transition-all duration-200` 
                                        : `pl-4 lg:pl-16 font-bold text-sm lg:text-lg text-textColor cursor-pointer hover:bg-primary hover:text-tertiary w-[95%] lg:w-[85%] mx-auto rounded-lg py-2 transition-all duration-200`
                                    }
                                >
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                    <li 
                        onClick={() => {
                            handleLogout();
                            handleLinkClick();
                        }} 
                        className='pl-4 lg:pl-16 font-bold text-sm lg:text-lg text-textColor cursor-pointer hover:bg-primary hover:text-tertiary w-[95%] lg:w-[85%] mx-auto rounded-lg py-2 transition-all duration-200'
                    >
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
