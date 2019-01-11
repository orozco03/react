import React from 'react';

import {BrowserRouter as ReactRouter,Route,Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import App from './App';

const userSignedIn = false;

export default class Router extends React.Component{

signedInRoutes(){
  if(userSignedIn){
    return(
      <Route path="/new" render={()=><h1>Bienvenido</h1>}/>
    );
  }
}
home(){
  if(userSignedIn) return Dashboard;
    return Home;

}

  render(){
    return(
    <ReactRouter>
      <App>
       <Switch>
        <Route exact path="/" component={this.home()}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        {this.signedInRoutes()}
       </Switch>
      </App>
    </ReactRouter>
    );
  }
}
