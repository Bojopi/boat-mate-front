
import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faPinterestP, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function FooterComponent() {

    const [email, setEmail] = useState<string>('')
    const [zip, setZip] = useState<string>('')

    const submit = () => {
        console.log('enviando datos...');
    }

    return(
        <footer className="w-full p-4 bg-gray-200">
            <div className="hidden md:grid grid-cols-5 gap-20 p-28 pb-5">
                <div className="col-span-2 w-full flex flex-col items-start gap-6">
                    <p className="w-full text-left font-bold text-lg">Sign up for free project cost information</p>
                    <form action="" onSubmit={submit} className="w-full grid grid-cols-1 gap-10">
                        <span className="p-float-label">
                            <InputText id="email" value={email} onChange={(e:any) => setEmail(e.target.value)} className='w-full' />
                            <label htmlFor="email">Email</label>
                        </span>
                        <span className="p-float-label">
                            <InputText id="zip" value={zip} onChange={(e:any) => setZip(e.target.value)} className='w-full' />
                            <label htmlFor="zip">ZIP code</label>
                        </span>
                        <button className="px-2 py-4 bg-[#373A85] text-white text-sm font-medium rounded-lg hover:bg-[#474aa0]">Sign up</button>
                    </form>
                </div>
                <div className="col-span-1 w-full flex flex-col items-start gap-3">
                    <p className="font-medium">Boat services</p>
                    <Link to={'/'} className='hover:underline'>Find local businesses</Link>
                    <Link to={'/'} className='hover:underline'>Services near me</Link>
                </div>
                <div className="col-span-1 w-full flex flex-col items-start gap-3">
                    <p className="font-medium">Service pros</p>
                    <Link to={'/'} className='hover:underline'>Register your business</Link>
                    <Link to={'/'} className='hover:underline'>Business center</Link>
                </div>
                <div className="col-span-1 w-full flex flex-col items-start gap-3">
                    <p className="font-medium">About us</p>
                    <Link to={'/'} className='hover:underline'>How it works</Link>
                    <Link to={'/'} className='hover:underline'>Who we are</Link>
                    <Link to={'/'} className='hover:underline'>Careers</Link>
                    <Link to={'/'} className='hover:underline'>Contact us</Link>
                </div>
            </div>
            <div className="w-full grid grid-cols-4 items-center px-10 lg:px-28 gap-5">
                <img
                    alt="logo"
                    src="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/07d993cf-6c35-46b4-a3d8-2c26c53b2958/Biggest_BoatMate-removebg-preview.png?format=1500w"
                    className="col-span-1 lg:col-span-1 w-full lg:w-[50%]"></img>
                <p className="col-span-3 lg:col-span-2 text-left text-xs lg:text-sm font-normal lg:font-medium p-1 lg:p-5 tracking-wide w-full">Tampa, FL | (813) 766-7565 | support@boatmate.com | Copyright &copy; 2021-2023 BoatMate, Inc. All rights reserved</p>
                <div className="col-span-4 lg:col-span-1 flex flex-row justify-between">
                    <Link to={'/'} className='w-8 h-8 bg-gray-600 flex justify-center items-center p-2 rounded-full' ><FontAwesomeIcon className="text-white" icon={faTwitter} /></Link>
                    <Link to={'/'} className='w-8 h-8 bg-gray-600 flex justify-center items-center p-2 rounded-full' ><FontAwesomeIcon className="text-white" icon={faFacebookF} /></Link>
                    <Link to={'/'} className='w-8 h-8 bg-gray-600 flex justify-center items-center p-2 rounded-full' ><FontAwesomeIcon className="text-white" icon={faPinterestP} /></Link>
                    <Link to={'/'} className='w-8 h-8 bg-gray-600 flex justify-center items-center p-2 rounded-full' ><FontAwesomeIcon className="text-white" icon={faYoutube} /></Link>
                    <Link to={'/'} className='w-8 h-8 bg-gray-600 flex justify-center items-center p-2 rounded-full' ><FontAwesomeIcon className="text-white" icon={faInstagram} /></Link>
                </div>
            </div>
        </footer>
    )
};
