import CardComponent from "../components/card"
import FooterComponent from "../components/footer"
import MenuBar from "../components/menu-bar"
import SectionTitle from "../components/section-title"


const Principal = () => {
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
        <FooterComponent />
    </>
  )
}

export default Principal