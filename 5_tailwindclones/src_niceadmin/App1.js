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
      <div className={`${isCompressed ? 'md:grid md:grid-cols-5 ':''}`} >

        <div className={`${isCompressed ? 'md:grid-cols-1 h-[90vh]':'hidden'}`}><Sidebar/></div>

        <div className={`${isCompressed ? ' md:col-span-4':''}`} >
        <Scr1 isCompressed={isCompressed}/>
        <Tables/>
        <News/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
