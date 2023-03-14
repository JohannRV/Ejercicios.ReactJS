import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';

function App () {
  const contactoPrueba= {
    nombre: 'Johan',
    apellido: 'Román',
    email: 'johnroman1854@gmail.com',
    conectado: false
  }
  return(
    <div className='App'>
      <header>
      <img src={logo} className="App-logo" alt="logo" />
      <ComponenteA contacto = {contactoPrueba} />
      </header>
    </div>
  )

}








export default App;
