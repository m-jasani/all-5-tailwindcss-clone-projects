import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Scr1 from './component/scr1';
import Scr2 from './component/scr2';
import Scr3 from './component/scr3';
import Footer from './component/footer.js';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Scr1/>
     <Scr2/>
     {/* <Scr3/> */}
     <Footer/>
    </div>
  );
}

export default App;
