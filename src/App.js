import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "./Components/Navbar/Navbar.js"
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import React, { useState } from 'react';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart'
import { CartContextProvider } from './Context/CartContext/CartContext'
import Buy from './Components/Buy/Buy'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>

      <CartContextProvider>
        <BrowserRouter>
          <header >
            <Navbar count={count} />
          </header>
          <main>
            <Switch>
              <Route exact path='/item/:id'>
                <ItemDetailContainer count={count} setCount={setCount}></ItemDetailContainer>
              </Route>
              <Route exact path='/' component={ItemListContainer} />
              <Route exact path='/category/:category' component={ItemListContainer} />
              <Route exact path='/Cart' component={Cart} />
              <Route exact path='/buy' component={Buy} />
            </Switch>
            
          </main>


        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
