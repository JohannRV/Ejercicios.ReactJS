import logo from './logo.svg';
import './App.css';
import Clock from './container/clock';

function App () {
  return(
    <div className='App'>
      <header>
      <img src={logo} className="App-logo" alt="logo" />
      <Clock></Clock>
      </header>
    </div>
  )

}








export default App;
