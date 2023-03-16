import React, { useState, useRef } from 'react';
import {FormProvider, useForm} from "react-hook-form";

import { Toast } from 'primereact/toast';
import { Steps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';

import { InputWrapper } from '../components/react-hook-form/input-wrapper';
import { Label } from '../components/react-hook-form/label';
import { Input } from '../components/react-hook-form/input';
import { ErrorMessage } from '../components/react-hook-form/error-message';
import Spinner from '../components/spinner';


export type FormProps = {
    fullname:   string;
    email:      string;
    username:   string;
    password:   string;
    c_password: string;
}

const Register: React.FC = () => {
    const toast = useRef<Toast>(null);
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const items = [
        {
            label: 'Personal'
        },
        {
            label: 'Seat'
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
        <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
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
                <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit, onErrors)} className="w-full">

                            <div className="grid grid-cols-1 gap-y-3 p-5">
                                <InputWrapper outerClassName="col-span-12">
                                        <Label id='fullname'>Full Name *</Label>
                                        <Input
                                            id='fullname'
                                            name='fullname'
                                            type='text'
                                            rules={{required: "Full name is required"}}
                                        />
                                    {errors?.fullname?.message && (
                                        <ErrorMessage>{errors.fullname.message}</ErrorMessage>
                                    )}
                                </InputWrapper>
                                <InputWrapper outerClassName="col-span-12">
                                        <Label id='email'>Email *</Label>
                                        <Input
                                            id='email'
                                            name='email'
                                            type='email'
                                            rules={{required: "Email is required"}}
                                        />
                                    {errors?.email?.message && (
                                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                                    )}
                                </InputWrapper>
                                <InputWrapper outerClassName="col-span-12">
                                        <Label id='username'>Username *</Label>
                                        <Input
                                            id='username'
                                            name='username'
                                            type='text'
                                            rules={{required: "Username is required"}}
                                        />
                                    {errors?.username?.message && (
                                        <ErrorMessage>{errors.username.message}</ErrorMessage>
                                    )}
                                </InputWrapper>
                                <InputWrapper outerClassName="col-span-12">
                                        <Label id="password">Password *</Label>
                                        <Input
                                            id='password'
                                            name='password'
                                            type='password'
                                            rules={{required: "Password is required"}}
                                        />
                                    {errors?.password?.message && (
                                        <ErrorMessage>{errors.password.message}</ErrorMessage>
                                    )}
                                </InputWrapper>
                                <InputWrapper outerClassName="col-span-12">
                                        <Label id="c_password">Confirm Password *</Label>
                                        <Input
                                            id='c_password'
                                            name='c_password'
                                            type='password'
                                            rules={{required: "Confirm password is required"}}
                                        />
                                    {errors?.c_password?.message && (
                                        <ErrorMessage>{errors.c_password.message}</ErrorMessage>
                                    )}
                                </InputWrapper>
                                <p className='w-full text-center text-sm font-medium text-[#373A85]'>Already have an account? <a href='/login' className='text-[#00CBA4] hover:underline'>Sign in now</a></p>
                            </div>

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