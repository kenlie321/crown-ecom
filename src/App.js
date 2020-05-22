import React from 'react';
import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
