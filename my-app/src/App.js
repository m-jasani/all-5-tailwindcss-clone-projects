import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Scr1 from './component/Scr1';
import Tables from './component/tables';
import News from './component/news';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Scr1/>
      <Tables/>
      <News/>
      
    </div>
  );
}

export default App;
