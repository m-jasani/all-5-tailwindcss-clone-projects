import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Scr1 from './component/Scr1';
import Service from './component/Service';
import Scr4 from './component/Scr4';
import Scr5 from './component/Scr5';
import Scr6 from './component/Scr6';
import Scr7 from './component/Scr7';
import Footer from './component/Footer';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';
// import Carousel from './component/Carousel';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  // return (
  //   <div className="App">
  //     <Header/>
  //    <Scr1/>
  //    <Aboutus/>
  //    <Service/>
  //    <Scr4/>
  //    <Scr5/>
  //    <Scr6/>
  //    {/* <Scr7/>  */}
  //    <Contactus/>   
  //    <Footer/>
     

    
  //    {/* <Carousel/> */}
  //   </div>
  // );
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={[<Scr1/>,<Aboutus/>,<Service/>,<Scr4/>,<Scr5/>,<Scr6/>,<Contactus/>,<Footer/>]}/>
        <Route path="/home" element={<Scr1/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/team" element={<Scr5/>}/>
        <Route path="/contact" element={<Contactus/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
