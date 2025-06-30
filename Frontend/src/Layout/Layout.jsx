import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
const Layout = () => {

    return (
        <>
            <div className='flex h-[calc(100vh-70px)]'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout