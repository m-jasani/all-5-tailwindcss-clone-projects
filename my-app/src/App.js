import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Scr1 from './component/Scr1';
import Tables from './component/tables';
import News from './component/news';
import React, { useState } from 'react'
import Sidebar from './component/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from './component/Student';
import Admin from './component/Admin';
import Teacher from './component/Teacher';
import Subject from './component/Subject';
import Course from './component/Course';

  

function App() {

  
    const [isCompressed, setIsCompressed] = useState(false);
    const toggleContentWidth = () => {
      setIsCompressed(!isCompressed);
    }

  return (
    <BrowserRouter>
    
    <div className="App">
      <Nav toggleContentWidth={toggleContentWidth} isCompressed={isCompressed}/>
      <div className={`${isCompressed ? 'md:grid md:grid-cols-5 ':''}`} >

        <div className={`${isCompressed ? 'md:grid-cols-1 ':'hidden'}`}><Sidebar/></div>

        <div className={`${isCompressed ? ' md:col-span-4':''}`} >

        <Routes>
          
          <Route path="/" element={[ <Scr1 isCompressed={isCompressed}/>,<Tables/>, <News/>]}/>
          <Route path="/student" element={[ <Student isCompressed={isCompressed}/>]}/>
          <Route path="/admin" element={[ <Admin isCompressed={isCompressed}/>]}/>
          <Route path="/course" element={[ <Course isCompressed={isCompressed}/>]}/>
          <Route path="/subject" element={[ <Subject isCompressed={isCompressed}/>]}/>
          <Route path="/teacher" element={[ <Teacher isCompressed={isCompressed}/>]}/>

        </Routes>
        </div>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
