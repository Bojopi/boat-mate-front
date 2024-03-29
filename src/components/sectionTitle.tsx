
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
        <div className='w-full h-screen flex items-center justify-center'>
            <div className="grid grid-cols-1 lg:grid-cols-2 font-bold pt-28 lg:pt-48 mb-10 lg:mb-20">
                <div className="w-full p-6 text-center lg:text-left flex align-middle ">
                    <section className='pt-10 lg:pt-20'>
                        <span className="text-5xl lg:text-6xl tracking-tight font-extrabold mb-1" style={{'color': '#373A85'}}>{title1}</span>
                        <div className="text-4xl lg:text-5xl tracking-tight font-bold mb-10 mt-2" style={{'color': '#109EDA'}}>{title2}</div>

                        <Button label={btnLabel} type="button" className="p-button p-button-secondary float-right mr-8" />
                    </section>
                </div>
                <div className="overflow-hidden h-[506px] lg:block hidden">
                    <img src={img} alt="hero-1" className="lg:ml-auto object-cover object-bottom w-full h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;