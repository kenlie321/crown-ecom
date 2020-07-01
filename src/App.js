import React from 'react';
import './App.css';
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignIn from './pages/signin/signin.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
      setCurrentUser(userAuth);
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
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignIn/>) }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.user
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
