import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGear,
    faSheetPlastic,
    faHammer,
    faSailboat,
    faBrush,
    faPaintRoller,
    faVolumeHigh,
    faBroom,
    faBolt,
    faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons"

import CardComponent from "../components/card"
import FooterComponent from "../components/footer"
import MenuBar from "../components/menuBar"
import SectionTitle from "../components/sectionTitle"
import { RaitingComponent } from '../components/rating';
import { reduceRating } from '../functions/reduce';


const Principal = () => {

    const items = [
        {
            name: "Engine Service",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faGear} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Boat Wraps",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faSheetPlastic} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Fiberglass Repair",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faHammer} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Canvas/Bi Mini Tops",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faSailboat} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "T-tops",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faSailboat} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Upholstery",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faBrush} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Barnacle Scraping",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faGear} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Maintenance & Repair",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faScrewdriverWrench} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Electronics",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faBolt} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Hull Cleaning",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faBroom} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Bottom Painting",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faPaintRoller} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
        {
            name: "Sound & Entertainment",
            rate: 1,
            price: '$100',
            img: <FontAwesomeIcon icon={faVolumeHigh} style={{color: "#373a85",}} className='text-lg md:text-2xl' />,
        },
    ]

  return (
    <>
        <MenuBar />
        <SectionTitle
            title1="Maximizing connectivity"
            title2="in the boating industry"
            btnLabel="Learn More"
            img="https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/54c3355d-4b60-4ed9-a168-e45abec1ea61/nicol-JrMzz7jUD5s-unsplash.png"
         />
        <hr />
        <div className="w-full p-10 md:pl-28 text-white" style={{'backgroundColor': '#00CBA4'}}>
            <h1 className="text-xl w-full md:text-4xl font-bold flex md:w-2/3 tracking-wide">The modern way to get connected with trustworthy and vetted marine service providers</h1>
            <p className="w-full pt-5 md:w-2/3 tracking-wide">Mariners and novelty boat owners alike understand it’s all about who you know in the boating and marine industry. Let us make boating hassle-free for you!</p>
        </div>
        <div className="p-10 md:pl-28 md:pr-28 grid grid-cols-1 md:grid-cols-2 gap-5">
            <CardComponent
            footerVisibility={true}
            btnLabel={'Learn more'}
            title={'Get Back on the Water'}
            image={'https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/f2e2a6b9-78d1-40f1-869c-90b28a108d50/pexels-oliver-sjo%CC%88stro%CC%88m-1223648.jpg'}
            >
                <p>We will help you find the right service for your needs. Let’s get you connected.</p>
            </CardComponent>

            <CardComponent
            footerVisibility={true}
            btnLabel={'Learn more'}
            title={'Own Your Business.'}
            image={'https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/bab94901-e3d8-47a3-a744-8097993adce4/pexels-andrea-piacquadio-3823418.jpg'}
            >
                <p>Do you specialize in boat or maritime services? We can help you generate leads and reach the right customers.</p>
            </CardComponent>
        </div>
        <div className="w-full p-10 md:py-10 md:px-28">
            <p className="text-2xl font-extrabold">Popular projects near you</p>
            <div className="w-full mt-5 grid grid-cols-2 md:grid-cols-4 shadow-md">
                {items.map((item: any, i: number) => (
                    <div className="w-full p-3 md:p-5 border flex flex-row items-center gap-4" key={i}>
                        <div className="w-8">
                            {item.img}
                        </div>
                        <div className="w-full">
                            <p className="text-sm md:text-base">{item.name}</p>
                            <div className="w-full md:hidden flex flex-row items-center gap-2 pt-1">
                                <i className="pi pi-star-fill text-yellow-400" style={{'fontSize': '12px'}}></i>
                                <p className="w-full font-semibold text-xs">{reduceRating(item.rate)}</p>
                            </div>
                            <p className="text-xs md:text-sm font-bold pt-1"><span className="font-light">from: </span>{item.price}</p>
                            <div className="hidden md:flex pt-2">
                                <RaitingComponent value={item.rate} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full bg-[#addaee] px-28">
            hola mundo
        </div>
        <FooterComponent />
    </>
  )
}

export default Principal