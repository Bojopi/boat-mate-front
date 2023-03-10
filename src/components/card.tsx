import React from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

type CardProps = {
    title:      string;
    btnLabel:   string;
    textCard:   string;
    image?:      string;
}

const CardComponent: React.FC<CardProps> = ({title, btnLabel, textCard, image}) => {

    const footer = (
        <div className="flex flex-wrap justify-end gap-2">
            <Button label={btnLabel} icon="pi pi-check" className='p-button p-button-secondary' />
        </div>
    );

    return(
        <div className="card flex flex-col md:flex-row">
            <div className={image ? 'w-full h-40 md:h-full md:w-2/4 overflow-hidden shadow-sm shadow-gray-500 rounded-t-md md:rounded-l-md' : 'hidden'}>
                <img src={image} className={'w-full h-full object-cover'} />
            </div>
            <Card title={title} footer={footer} className={image ? 'w-full md:h-full md:flex md:items-center rounded-t-none md:rounded-l-none' : 'w-full h-full flex items-center'}>
                <p className="">
                    {textCard}
                </p>
            </Card>
        </div>
    )
};

export default CardComponent;