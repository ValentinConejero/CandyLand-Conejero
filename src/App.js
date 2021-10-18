import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Components/Navbar/Navbar.js"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    
    
      <header >
      <Navbar count={count}/> 
      </header>
      <main>
      <ItemListContainer count={count} setCount ={setCount}/>
      </main>
    </>
  );
}

export default App;
