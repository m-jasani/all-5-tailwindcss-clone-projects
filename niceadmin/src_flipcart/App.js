import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Scr1 from './component/Scr1';
import Carousel from './component/Carousel';
import Carousel2 from './component/Carousel2';
import Crousel2md from './component/Crousel2md';
import Img2 from './component/img2';
import Bestof from './component/Bestof';
import Feature from './component/Feature';
import Best from './component/Best';
import Bestimg from './component/Bestimg';
import Footer1 from './component/Footer1';

function App() {
  return (
    <>
    <div className="App bg-[#f1f2f4]">
      <Nav/>
      <div className=" sm:mx-5 my-2">
      <Scr1/>
      <Carousel/>
      <div className="hidden md:block ld:flex">
            <Carousel2/>
            <Img2/>
      </div>
      <div className=" block md:hidden">
      <Crousel2md/>
      </div>



      
      <Bestof/>
      <Feature/>

      <div className="hidden ld:flex">
      <Best/>
      <Bestimg/>
      </div>

      <div className="ld:hidden">
      <Best/>
      </div>

      <Footer1/>
       
      </div>
    </div>
    </>
  );
}

export default App;
