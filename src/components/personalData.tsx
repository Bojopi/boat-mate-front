import React from 'react'

import { InputWrapper } from '../components/react-hook-form/input-wrapper';
import { Label } from '../components/react-hook-form/label';
import { Input } from '../components/react-hook-form/input';
import { ErrorMessage } from '../components/react-hook-form/error-message';

export type PersonalDataProps = {
    fullname:       string;
    setFullname:    (value: string) => void;
    email:          string;
    setEmail:       (value: string) => void;
    phone:          string;
    setPhone:       (value: string) => void;
    errors:         any;
};

const PersonalData: React.FC<PersonalDataProps> = ({fullname, setFullname, email, setEmail, phone, setPhone, errors}) => {

    const onChangeInput = (event) => {
        const value = event.target.value;
        const id = event.target.id;
        setFullname(value);
        console.log(value, id);
    };

  return (
    <div className="grid grid-cols-1 gap-y-3 p-5">
        <InputWrapper outerClassName="col-span-12">
                <Label id='fullname'>Full Name *</Label>
                <input
                    id='fullname'
                    name='fullname'
                    type='text'
                    value={fullname}
                    onChange={onChangeInput}
                    className={'p-inputtext w-full'}
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
            {errors?.username?.message && (
                <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
        </InputWrapper>
    </div>
  )
}

export default PersonalData
