import React from 'react';
import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignIn from './pages/signin/signin.component';
import {Route, Switch} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({user:user});
      //console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header user={this.state.user}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/signin' component={SignIn}/>
        </Switch>
      </div>
    );
  }
}

export default App;
