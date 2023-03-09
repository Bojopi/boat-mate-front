

 import { Button } from 'primereact/button'


 export default function SectionTitle() {

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 font-bold pt-28 md:pt-40 mb-10 md:mb-20">
            <div className="w-full p-6 text-center md:text-left flex align-middle ">
                <section className='pt-10 md:pt-20'>
                    <span className="text-5xl md:text-6xl font-bold mb-1">Maximizing connectivity</span>
                    <div className="text-4xl md:text-5xl text-sky-700 font-bold mb-10">in the boating industry</div>

                    <Button label="Learn More" type="button" className="p-button p-button-secondary float-right mr-8" />
                </section>
            </div>
            <div className="overflow-hidden md:block hidden">
                <img src="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/54c3355d-4b60-4ed9-a168-e45abec1ea61/nicol-JrMzz7jUD5s-unsplash.png" alt="hero-1" className="md:ml-auto block h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
    )
}
