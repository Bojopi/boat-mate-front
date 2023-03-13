import React, { useRef } from 'react';
import {FormProvider, useForm} from "react-hook-form";

import { Toast } from 'primereact/toast';

import { InputWrapper } from '../components/react-hook-form/input-wrapper';
import { Label } from '../components/react-hook-form/label';
import { Input } from '../components/react-hook-form/input';
import { ErrorMessage } from '../components/react-hook-form/error-message';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';


export type FormProps = {
    username: string;
    password: string;
}

const Login: React.FC<FormProps> = () => {
    const toast = useRef<Toast>(null);

    const methods = useForm<FormProps>({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const {
        handleSubmit,
        setError,
        formState: {errors},
    } = methods;

    const onSubmit = (formData: FormProps) => {
        console.log(formData);
    };

    const onErrors = () => {
        toast.current?.show({severity:'error', summary:'Error', detail: 'Existen errores en el formulario', life: 3000});
    };

  return (
    <>
        <div
            className="w-full h-1/3 rounded-b-md shadow-md md:h-screen absolute bg-no-repeat bg-cover bg-center"
            style={{'backgroundImage': "url('https://i.postimg.cc/qv8LyXWs/tomas-malik-FHAHn-F9-C0-Sw-unsplash.jpg')"}}>
            <div></div>
        </div>
        <div className="absolute container mx-auto mt-36 md:mt-36 p-5 md:flex md:justify-center">
            <div className='bg-white w-full md:w-2/4 rounded-md shadow-2xl p-10 flex flex-col items-center'>
                <div className='w-full flex justify-between'>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/07d993cf-6c35-46b4-a3d8-2c26c53b2958/Biggest_BoatMate-removebg-preview.png?format=1500w"
                        alt="logo"
                        className='w-24'
                    />
                    <h1 className='mt-5 text-2xl md:text-4xl font-semibold mr-5' style={{'color': '#373A85'}}>SIGN IN</h1>
                </div>
                <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit, onErrors)} className="w-full md:mt-5">

                            <div className="grid grid-cols-1 gap-y-6 p-5">
                                <InputWrapper outerClassName="col-span-12">
                                        <Label id='username'>Username</Label>
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
                                        <Label id="password">Password</Label>
                                        <Input
                                            id='password'
                                            name='password'
                                            type='password'
                                            rules={{required: "Password is required"}}
                                        />
                                    {errors?.username?.message && (
                                        <ErrorMessage>{errors.username.message}</ErrorMessage>
                                    )}
                                </InputWrapper>
                                <p className='w-full text-center text-sm font-medium text-[#373A85]'>New to BoatMate? <a href='/register' className='text-[#00CBA4] hover:underline'>Create an account</a></p>
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <a href="/forgot-password" className='text-sm font-medium text-[#00CBA4] hover:underline'>Forgot password?</a>
                                <button type='submit' className='p-3 bg-[#109EDA] hover:bg-[#0E8FC7] text-white rounded-md hover:transition'>SIGN IN</button>
                            </div>
                        </form>
                    </FormProvider>
            </div>
        </div>
    </>
  )
}

export default Login


// container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center