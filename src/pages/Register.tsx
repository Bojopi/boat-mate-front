import React, { useState, useRef, useEffect } from 'react';
import {FormProvider, useForm} from "react-hook-form";
import { Link } from 'react-router-dom';

import { Toast } from 'primereact/toast';
import { Steps } from 'primereact/steps';

import { InputWrapper } from '../components/react-hook-form/input-wrapper';
import { Label } from '../components/react-hook-form/label';
import { Input } from '../components/react-hook-form/input';
import { ErrorMessage } from '../components/react-hook-form/error-message';

import Spinner from '../components/spinner';
import { RESTCountriesInterface } from '../interfaces/restCountries.interface';
import { Countries } from '../hooks/countries.hooks';


export type FormProps = {
    fullname:       string;
    email:          string;
    phone:          string;
    country:        string;
    city:           string;
    address:        string;
    username:       string;
    password:       string;
    c_password:     string;
    select_country: string;
}

const Register: React.FC = () => {
    const toast = useRef<Toast>(null);

    const { getAllCountries } = Countries()

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const [searchCountryIsOpen, setSearchCountryIsOpen] = useState<boolean>(false)
    const [searchCountries, setSearchCountries] = useState<any>([])

    const [countries, setCountries] = useState<RESTCountriesInterface[]>([])

    useEffect(() => {
        resetAsyncForm()
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const resetAsyncForm = async () => {
        const result = await getAllCountries();
        (result.data).sort((a, b) => {
            if(a.name.common > b.name.common) {
                return 1;
            } else if(a.name.common < b.name.common) {
                return -1;
            } else {
                return 0;
            }
        })
        setCountries(result.data);
    };

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
            fullname:       '',
            email:          '',
            phone:          '',
            country:        '',
            city:           '',
            address:        '',
            username:       '',
            password:       '',
            c_password:     '',
            select_country: '',
        },
    });

    const {
        setValue,
        getValues,
        handleSubmit,
        setError,
        formState: {errors},
    } = methods;

    const onSubmit = (formData: FormProps) => {
        console.log(formData);
        setLoading(true);
        console.log(errors)
    };

    const onErrors = () => {
        toast.current?.show({severity:'error', summary:'Error', detail: 'User and/or password are not correct', life: 4000});
    };

    const filterCountries = (value: string) => {
        setSearchCountryIsOpen(true);
        setSearchCountries([...countries.filter((item: RESTCountriesInterface) => item.name.common.toLowerCase().indexOf(value.toLowerCase()) > -1 )].slice(0, 5));
    };

    const resultCountry = (value: string) => {
        setValue('select_country', value);
        setSearchCountryIsOpen(false);
    };

    const handleClickOutside = (event: any) => {
        const element: any = document.getElementById('select_country');
        if(!element.contains(event.target)){
            setSearchCountryIsOpen(false);
        }
    }

    const nextStep = () => {
        setActiveIndex(activeIndex + 1);
    }

    const renderButton = () => {
        if(activeIndex < 2) {
            return (
                <button type='button' className='p-3 text-xs md:text-base bg-[#109EDA] hover:bg-[#0E8FC7] text-white rounded-md hover:transition' onClick={nextStep}>Next Step</button>
            )
        } else if(activeIndex === 2) {
            return (
                <button type='submit' className='p-3 text-xs md:text-base bg-[#109EDA] hover:bg-[#0E8FC7] text-white rounded-md hover:transition'>SIGN UP</button>
            )
        }
    }

  return (
    <>
        <Spinner loading={loading} />
        <Toast ref={toast} />
        <div
            className="w-full h-1/3 shadow-md md:h-screen absolute top-0 left-0 bg-no-repeat bg-cover bg-center"
            style={{'backgroundImage': "url('https://i.postimg.cc/qv8LyXWs/tomas-malik-FHAHn-F9-C0-Sw-unsplash.jpg')"}}>
        </div>
        <div className="container h-screen mx-auto flex justify-center items-center mt-10 md:mt-0">
            <div className='bg-white z-10 w-11/12 md:w-1/2 rounded-lg shadow-2xl py-4 md:py-5 px-5 md:px-10 flex flex-col items-center'>
                <div className='w-full flex justify-between'>
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/07d993cf-6c35-46b4-a3d8-2c26c53b2958/Biggest_BoatMate-removebg-preview.png?format=1500w"
                        alt="logo"
                        className='w-16 md:w-20'
                    />
                    <h1 className='mt-2 md:mt-5 text-xl md:text-3xl font-semibold mr-5' style={{'color': '#373A85'}}>SIGN UP</h1>
                </div>
                <div className='w-full mt-4'>
                    <Steps model={items} activeIndex={activeIndex} readOnly={true} />
                </div>
                <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            {
                                activeIndex === 0 ?
                                <div className="grid grid-cols-1 gap-y-3 p-5">
                                    <InputWrapper outerClassName="col-span-12">
                                            <Label id='fullname'>Full Name *</Label>
                                            <Input
                                                id='fullname'
                                                name='fullname'
                                                type='text'
                                                rules={{required: "Fullname is required"}}
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
                                            <Label id='phone'>Phone *</Label>
                                            <Input
                                                id='phone'
                                                name='phone'
                                                type='tel'
                                                rules={{required: "Phone is required"}}
                                            />
                                        {errors?.phone?.message && (
                                            <ErrorMessage>{errors.phone.message}</ErrorMessage>
                                        )}
                                    </InputWrapper>
                                </div>
                                : activeIndex == 1 ?
                                <div className="grid grid-cols-1 gap-y-3 p-5">
                                    <InputWrapper outerClassName="col-span-12">
                                        <Label id='country'>Country *</Label>
                                        <div className="relative pb-14">
                                            <div className="absolute w-full">
                                                <input
                                                    id="select_country"
                                                    name="select_country"
                                                    type="text"
                                                    autoComplete="off"
                                                    value={getValues('select_country')}
                                                    className="p-inputtext w-full"
                                                    onChange={(e) => {
                                                        setValue('select_country', e.target.value);
                                                        filterCountries(e.target.value);
                                                    }}
                                                />
                                                { searchCountryIsOpen && (
                                                    <ul className="absolute mt-1 w-full overflow-hidden rounded-md bg-white border border-gray-300 shadow-md">
                                                        {searchCountries.map((country: RESTCountriesInterface, i: number) => (
                                                            <li
                                                                key={i}
                                                                className="cursor-pointer py-3 px-3 hover:bg-gray-200 text-sm font-medium text-gray-600 border-b border-b-gray-300"
                                                                onClick={() => {
                                                                    resultCountry(country.name.common);
                                                                }}
                                                            >
                                                                {country.name.common}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                            </div>
                                        </div>
                                        {errors?.select_country?.message && (
                                            <ErrorMessage>{errors.select_country.message}</ErrorMessage>
                                        )}
                                    </InputWrapper>
                                    <InputWrapper outerClassName="col-span-12">
                                            <Label id='city'>City *</Label>
                                            <Input
                                                id='city'
                                                name='city'
                                                type='text'
                                                rules={{required: "City is required"}}
                                            />
                                        {errors?.city?.message && (
                                            <ErrorMessage>{errors.city.message}</ErrorMessage>
                                        )}
                                    </InputWrapper>
                                    <InputWrapper outerClassName="col-span-12">
                                            <Label id='address'>Address *</Label>
                                            <Input
                                                id='address'
                                                name='address'
                                                type='text'
                                                rules={{required: "Address is required"}}
                                            />
                                        {errors?.address?.message && (
                                            <ErrorMessage>{errors.address.message}</ErrorMessage>
                                        )}
                                    </InputWrapper>
                                </div>
                                : activeIndex == 2 ?
                                <div className="grid grid-cols-1 gap-y-3 p-5">
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
                                            <Label id='password'>Password *</Label>
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
                                            <Label id='c_password'>Confirm Password *</Label>
                                            <Input
                                                id='c_password'
                                                name='c_password'
                                                type='password'
                                                rules={{required: "Confirm Password is required"}}
                                            />
                                        {errors?.c_password?.message && (
                                            <ErrorMessage>{errors.c_password.message}</ErrorMessage>
                                        )}
                                    </InputWrapper>
                                </div>
                                : null
                            }
                            <p className='w-full text-center text-xs md:text-sm font-medium text-[#373A85]'>Already have an account? <Link to={'/login'} className='text-[#00CBA4] hover:underline'>Sign in now</Link></p>
                            <div className="mt-4 flex items-center justify-end">
                                {renderButton()}
                            </div>
                        </form>
                    </FormProvider>
            </div>
        </div>
    </>
  )
}

export default Register