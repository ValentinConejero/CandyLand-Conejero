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
import { NotificationContextProvider } from './Context/NotificationContext/NotificationContext'
import FormBuy from './Components/FormBuy/FormBuy'
import Buy from './Components/Buy/Buy'
import Notification from './Components/Notification/Notification'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <NotificationContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <header >
              <Navbar count={count} />
            </header>
            <main>
              <Notification />
              <Switch>
                <Route exact path='/item/:id'>
                  <ItemDetailContainer count={count} setCount={setCount}></ItemDetailContainer>
                </Route>
                <Route exact path='/' component={ItemListContainer} />
                <Route exact path='/category/:category' component={ItemListContainer} />
                <Route exact path='/Cart' component={Cart} />
                <Route exact path='/formbuy' component={FormBuy} />
                <Route exact path='/buy' component={Buy} />
              </Switch>

            </main>


          </BrowserRouter>
        </CartContextProvider>
      </NotificationContextProvider>
    </>
  );
}

export default App;
