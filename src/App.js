import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Components/Navbar/Navbar.js"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    
    
      <header >
      <Navbar/> 
      </header>

      <ItemListContainer/>
    </>
  );
}

export default App;
