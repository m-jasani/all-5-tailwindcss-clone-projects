import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import Header from './component/Header';
import Wedo from './component/Wedo';
import Clients from './component/Clients';

import  Clientsay from './component/clientsay';
import Whowe from './component/whowe';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Wedo/>
      <Clients/>
      <Clientsay/>
     <Whowe/>

    </div>
  );
}

export default App;
