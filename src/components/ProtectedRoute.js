import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


class ProtectedRoute extends Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="*" component={() => '404 Page Not Found !'}/>
          </Switch>
        </div>
    );
  }
}

export default ProtectedRoute;
