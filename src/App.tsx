//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";

import MenuBar from './components/menu-bar.jsx'
import SectionTitle from './components/section-title';
import CardComponent from './components/card';

function App() {

  return (
    <>
      <MenuBar />
      <SectionTitle />
      <h1 className="text-xl p-10 w-full md:text-4xl font-bold flex md:pl-28 md:w-2/3 tracking-wide">The modern way to get connected with trustworthy and vetted marine service providers</h1>
      <p className="p-10 w-full md:pt-0 md:pl-28 md:w-2/3 tracking-wide">Mariners and novelty boat owners alike understand it’s all about who you know in the boating and marine industry. Let us make boating hassle-free for you!</p>
      <div className="w-full flex flex-row align-middle justify-between">
        <CardComponent />
        <CardComponent />
      </div>
    </>
  )
}

export default App
