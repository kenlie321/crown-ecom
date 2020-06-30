import React from 'react';
import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignIn from './pages/signin/signin.component';
import {Route, Switch} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            this.setState({user:{
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      this.setState({user: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
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
