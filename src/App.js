import React from 'react';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import ForgetPassword from './screens/ForgetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return <Router>
    <Switch>
      <Route path="/ForgetPass">
        <ForgetPassword />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;
