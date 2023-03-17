import React, { useState, useRef } from 'react';
import {FormProvider, useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

import { Toast } from 'primereact/toast';
import { Steps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';


import Spinner from '../components/spinner';
import PersonalData from '../components/personalData';


export type FormProps = {
    fullname:   string;
    email:      string;
    username:   string;
    password:   string;
    c_password: string;
}

const Register: React.FC = () => {
    const toast = useRef<Toast>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const items = [
        {
            label: 'Personal Data',
        },
        {
            label: 'Address'
        },
        {
            label: 'User Data'
        }
    ];

    const methods = useForm<FormProps>({
        defaultValues: {
            fullname: '',
            email: '',
            username: '',
            password: '',
            c_password: '',
        },
    });

    const {
        handleSubmit,
        setError,
        formState: {errors},
    } = methods;

    const onSubmit = (formData: FormProps) => {
        console.log(formData);
        setLoading(true);
    };

    const onErrors = () => {
        toast.current?.show({severity:'error', summary:'Error', detail: 'User and/or password are not correct', life: 4000});
    };

  return (
    <>
        <Spinner loading={loading} />
        <Toast ref={toast} />
        <div
            className="w-full h-1/3 shadow-md md:h-screen absolute bg-no-repeat bg-cover bg-center"
            style={{'backgroundImage': "url('https://i.postimg.cc/qv8LyXWs/tomas-malik-FHAHn-F9-C0-Sw-unsplash.jpg')"}}>
            <div></div>
        </div>
        <div className="absolute container mx-auto mt-36 md:mt-5 md:flex md:justify-center">
            <div className='bg-white w-full md:w-2/4 rounded-lg shadow-2xl py-5 px-10 flex flex-col items-center'>
                <div className='w-full flex justify-between'>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/07d993cf-6c35-46b4-a3d8-2c26c53b2958/Biggest_BoatMate-removebg-preview.png?format=1500w"
                        alt="logo"
                        className='w-24 md:w-20'
                    />
                    <h1 className='mt-5 text-2xl md:text-3xl font-semibold mr-5' style={{'color': '#373A85'}}>SIGN UP</h1>
                </div>
                <div className='w-full mt-4'>
                    <Steps model={items} activeIndex={activeIndex} readOnly={true} />
                </div>
                <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit, onErrors)} className="w-full">
                            {
                                activeIndex === 0 ?
                                    <PersonalData 
                                        fullname={fullname} 
                                        setFullname={setFullname} 
                                        email={email} 
                                        setEmail={setEmail} 
                                        phone={phone}
                                        setPhone={setPhone}
                                        errors={errors} />
                                : null
                            }
                            <p className='w-full text-center text-sm font-medium text-[#373A85]'>Already have an account? <Link to={'/login'} className='text-[#00CBA4] hover:underline'>Sign in now</Link></p>
                            <div className="mt-4 flex items-center justify-end">
                                <button type='submit' className='p-3 bg-[#109EDA] hover:bg-[#0E8FC7] text-white rounded-md hover:transition'>SIGN UP</button>
                            </div>
                        </form>
                    </FormProvider>
            </div>
        </div>
    </>
  )
}

export default Register