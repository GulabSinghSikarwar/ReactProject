import logo from './logo.svg';
import './App.css';
import  Header from './components/Header'
import Macbook  from './components/macbook/macbook';
import Iphones from './components/iphones/Iphones';
import AppleWatch from './components/appleWatch/appleWatch';
function App() {
  return (
    <div className="App">
     <Header/>
     <div>
       <Macbook/>
       <Iphones/>
       <AppleWatch/>

     </div>
    </div>
  );
}

export default App;
