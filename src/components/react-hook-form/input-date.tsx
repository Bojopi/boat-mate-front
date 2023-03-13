import 'react-day-picker/dist/style.css';
import es from "date-fns/locale/es";
import {format, isValid, parse} from 'date-fns';
import FocusTrap from 'focus-trap-react';
import {DayPicker} from 'react-day-picker';
import {usePopper} from 'react-popper';
import React, {ChangeEventHandler, useRef, useState} from "react";
import {useFormContext} from "react-hook-form";
export type InputProps = {
    id: string;
    name: string;
    date: Date;
};

export const InputDate: React.FC<InputProps> = ({
    id,
    name,
    date,
}) => {
    const {register} = useFormContext();
    const [selected, setSelected] = useState<Date>(date);
    const [inputValue, setInputValue] = useState<string>(format(date, 'dd/MM/y'));
    const [isPopperOpen, setIsPopperOpen] = useState(false);

    const popperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
        null
    );

    const popper = usePopper(popperRef.current, popperElement, {
        placement: 'bottom-start'
    });

    const closePopper = () => {
        setIsPopperOpen(false);
        buttonRef?.current?.focus();
    };

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputValue(e.currentTarget.value);
        const date = parse(e.currentTarget.value, 'dd/MM/y', new Date());
        if (isValid(date)) {
            setSelected(date);
        } else {
            setSelected(new Date());
        }
    };

    const handleButtonClick = () => {
        setIsPopperOpen(true);
    };

    const handleDaySelect = (date: Date) => {
        setSelected(date);
        if (date) {
            setInputValue(format(date, 'dd/MM/y'));
            closePopper();
        } else {
            setInputValue('');
        }
    };

    return (
        <div>
            <div ref={popperRef}>
                <input
                    {...register(name)}
                    name={name}
                    id={id}
                    type="text"
                    placeholder={format(new Date(), 'dd/MM/y')}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="form-input block w-full border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 flex-grow-1 focus:border-blue-500 focus:ring-0 sm:text-sm rounded-md"
                    onClick={handleButtonClick}
                />
            </div>
            {isPopperOpen && (
                <FocusTrap
                    active
                    focusTrapOptions={{
                        initialFocus: false,
                        allowOutsideClick: true,
                        clickOutsideDeactivates: true,
                        onDeactivate: closePopper,
                        fallbackFocus: (buttonRef.current as any)
                    }}
                >
                    <div
                        tabIndex={-1}
                        style={popper.styles.popper}
                        className={`dialog-sheet absolute left-0 z-10 bg-white opacity-1 shadow-2xl`}
                        {...popper.attributes.popper}
                        ref={setPopperElement}
                        role="dialog"
                    >
                        <DayPicker
                            initialFocus={isPopperOpen}
                            mode="single"
                            locale={es}
                            fromYear={1920} toYear={2025} captionLayout="dropdown"
                            defaultMonth={selected}
                            selected={selected}
                            onSelect={handleDaySelect as any}
                        />
                    </div>
                </FocusTrap>
            )}
        </div>
    );
};
