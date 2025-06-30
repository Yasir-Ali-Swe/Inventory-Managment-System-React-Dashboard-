import { Link ,useLocation} from 'react-router-dom';

const Sidebar = () => {
    const pathname = useLocation().pathname;
    console.log(pathname);
    const links=[
        {name:"Products",path:"/"},
        {name:"Orders",path:"/Orders"},
        {name:"Sales",path:"/Sales"},
        {name:"Cashier",path:"/Cashier"},
         {name:"Profile",path:"/Profile"},
    ]
    return (
        <div className='w-1/5 bg-mainForground h-full'>
            <div className='border-mainBg border-b-4 h-18 flex flex-col justify-center'>
                <h1 className='pl-12 text-2xl font-bold text-textColor'>Sidebar</h1>
                <h1 className='pl-12 text-[12px] font-semibold text-textColor'>Inventory Managment System</h1>
            </div>
            <div className='mt-4'>
                <ul className='flex flex-col gap-4'>
                    {
                        links.map((link,index)=>
                        <Link key={index} to={link.path} className='hover:bg-textColor hover:text-mainForground text-textColor flex items-center cursor-pointer w-full'>
                        <li className={`text-lg pl-12 h-10 font-semibold w-full flex items-center ${pathname===link.path?"bg-textColor text-mainForground border-mainBg border-l-4":""}`}>{link.name}</li></Link>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;