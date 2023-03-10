//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

import MenuBar from './components/menu-bar.jsx'
import SectionTitle from './components/section-title';
import CardComponent from './components/card';
import FooterComponent from './components/footer';

function App() {

  return (
    <>
      <MenuBar />
      <SectionTitle />
      <hr />
      <div className="w-full p-10 md:pl-28 text-white" style={{'backgroundColor': '#00CBA4'}}>
        <h1 className="text-xl w-full md:text-4xl font-bold flex md:w-2/3 tracking-wide">The modern way to get connected with trustworthy and vetted marine service providers</h1>
        <p className="w-full pt-5 md:w-2/3 tracking-wide">Mariners and novelty boat owners alike understand it’s all about who you know in the boating and marine industry. Let us make boating hassle-free for you!</p>
      </div>
      <div className="p-10 md:pl-28 md:pr-28 grid grid-cols-1 md:grid-cols-2 gap-5">
        <CardComponent
          textCard={'We will help you find the right service for your needs. Let’s get you connected.'}
          btnLabel={'Learn more'}
          title={'Get Back on the Water'}
          image={'https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/f2e2a6b9-78d1-40f1-869c-90b28a108d50/pexels-oliver-sjo%CC%88stro%CC%88m-1223648.jpg'}
        />

        <CardComponent
          textCard={'Do you specialize in boat or maritime services? We can help you generate leads and reach the right customers.'}
          btnLabel={'Learn more'}
          title={'Own Your Business.'}
          image={'https://images.squarespace-cdn.com/content/v1/634f43133040660154fd193a/bab94901-e3d8-47a3-a744-8097993adce4/pexels-andrea-piacquadio-3823418.jpg'}
        />
      </div>
      <FooterComponent />
    </>
  )
}

export default App;
