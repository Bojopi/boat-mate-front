import React, { useRef } from 'react'

import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { Toast } from 'primereact/toast';
import { Link } from 'react-router-dom';

export default function MenuBar() {
    const menu = useRef<any>(null);
    const toast = useRef<any>(null);

    const itemsMenu = [
        {
            label: 'Sign up now',
            url: '/register',
        },
        {
            label: 'Sign in',
            url: '/login',
        },
    ];

    const start = <img
                    alt="logo"
                    src="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/07d993cf-6c35-46b4-a3d8-2c26c53b2958/Biggest_BoatMate-removebg-preview.png?format=1500w"
                    className="mr-2 h-14 md:h-20"></img>;
    const end = <>
        <a  className='mr-5 font-semibold cursor-pointer hover:underline' >Join Our Pro Network</a>
        <Toast ref={toast}></Toast>
        <Menu
            model={itemsMenu}
            popup
            ref={menu} />
        <a className='pi pi-ellipsis-h font-bold cursor-pointer bg-gray-200 p-2 rounded-full' onClick={(e) => menu.current.toggle(e)}></a>
        </>;

    return (
        <div className="fixed w-full z-10">
            <Menubar start={start} end={end} className="bg-white shadow-md md:pl-64 md:pr-64 z-10" style={{'borderRadius': 0}} />
            <div className='w-full bg-gray-200 shadow-sm'>
                <ul className='flex flex-row justify-between md:justify-start md:px-0 py-3 text-xs md:text-sm text-gray-600 font-medium tracking-wider'>
                    <li className='px-3 md:px-5 border-r-2 border-gray-500 hover:text-black'><Link to={'/'}>Boats</Link></li>
                    <li className='px-3 md:px-5 border-r-2 border-gray-500 hover:text-black'><Link to={'/'}>Jetskis</Link></li>
                    <li className='px-3 md:px-5 border-r-2 border-gray-500 hover:text-black'><Link to={'/'}>Dock & Storage</Link></li>
                    <li className='px-3 md:px-5 border-r-2 border-gray-500 hover:text-black'><Link to={'/'}>Insurance</Link></li>
                    <li className='px-3 md:px-5 hover:text-black'><Link to={'/'}>More</Link></li>
                </ul>
            </div>
        </div>
    )
};