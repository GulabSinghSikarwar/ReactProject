import logo from './logo.svg';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div  style={{margin:"0px  0px 25px 0px" ,fontWeight:"bold",textTransform:"Uppercase"}}>

          WelCome Users
        </div>

        <Container/>
      </header>
    </div>
  );
}

export default App;
