import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';

import './index.css';
import Home from "./containers/home/Home";
import Login from './containers/login/Login';
import About from './containers/about/About.js';
// import Error from './sourceFile/containers/';

export default class index extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            {/* <Route path="*" component={Error}/> */}
        </Switch>
      </div>
    )
  }
}
