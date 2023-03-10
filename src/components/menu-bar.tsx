import React, { useRef } from 'react'

import { Menu } from 'primereact/menu';
import { Menubar } from 'primereact/menubar';
import { Toast } from 'primereact/toast';

export default function MenuBar() {
    const menu = useRef<any>(null);
    const toast = useRef<any>(null);

    const itemsMenu = [
        { label: 'Sign up now', },
        { label: 'Sign in' },
        { label: 'Home' },
        { separator: true, },
        {
            label: 'About Us',
            items: [
                {label: 'What we do'},
                {label: 'Partners'},
                {label: 'Contact'}
            ]
        },
        { separator: true },
        {label: 'News'},
        {label: 'Services'}
    ];

    const start = <img
                    alt="logo"
                    src="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/07d993cf-6c35-46b4-a3d8-2c26c53b2958/Biggest_BoatMate-removebg-preview.png?format=1500w"
                    className="mr-2 h-14 md:h-20"></img>;
    const end = <>
        <a  className='mr-5 font-semibold cursor-pointer hover:underline' >Join the Club</a>
        <Toast ref={toast}></Toast>
        <Menu
            model={itemsMenu}
            popup
            ref={menu} />
        <a className='pi pi-ellipsis-h font-bold cursor-pointer bg-gray-200 p-2 rounded-full' onClick={(e) => menu.current.toggle(e)}></a>
        </>;

    return (
        <div className="card">
            <Menubar start={start} end={end} className="bg-white shadow-md md:pl-64 md:pr-64 fixed w-full z-10" />
        </div>
    )
};