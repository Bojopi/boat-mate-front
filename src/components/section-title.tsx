
 import React from 'react'

 import { Button } from 'primereact/button'


 export type SectionProps = {
    title1: string;
    title2: string;
    img:    string;
    btnLabel: string;
 }

 const SectionTitle: React.FC<SectionProps> = ({title1, title2, img, btnLabel}) => {

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 font-bold pt-28 md:pt-40 mb-10 md:mb-20">
            <div className="w-full p-6 text-center md:text-left flex align-middle ">
                <section className='pt-10 md:pt-20'>
                    <span className="text-5xl md:text-6xl font-bold mb-1" style={{'color': '#373A85'}}>{title1}</span>
                    <div className="text-4xl md:text-5xl font-bold mb-10" style={{'color': '#109EDA'}}>{title2}</div>

                    <Button label={btnLabel} type="button" className="p-button p-button-secondary float-right mr-8" />
                </section>
            </div>
            <div className="overflow-hidden h-[506px] md:block hidden">
                <img src={img} alt="hero-1" className="md:ml-auto object-cover object-bottom w-full h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
    )
}

export default SectionTitle;