import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Scr1 from './component/Scr1';
import Tables from './component/tables';
import News from './component/news';
import React, { useState } from 'react'
import Sidebar from './component/Sidebar';
  

function App() {

  
    const [isCompressed, setIsCompressed] = useState(false);
    const toggleContentWidth = () => {
      setIsCompressed(!isCompressed);
    }

  return (
    <div className="App">
      <Nav toggleContentWidth={toggleContentWidth} isCompressed={isCompressed}/>
      <div className={`${isCompressed ? 'grid grid-cols-5':''}`} >

        <div className={`${isCompressed ? 'grid-cols-1':'hidden'}`}><Sidebar/></div>

        <div className={`${isCompressed ? 'col-span-4':''}`} >
        <Scr1 isCompressed={isCompressed}/>
        <Tables/>
        <News/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
