import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/contactus" exact component={ContactUs}/>
            <Route path="*" exact component={() => '404 Page Not Found !'}/>
          </Switch>
        </div>
    );
  }
}

export default App;
