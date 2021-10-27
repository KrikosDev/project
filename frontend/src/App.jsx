import './App.css';
import React from "react";
import Header from "./Header/Header";
import RegisterDiv from "./Body/RegisterDiv";
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const routes = RegisterDiv(false)
  return (
    <Router>
      <div id='app'>
        <Header />
        {routes}
      </div>
    </Router>
  )
}

export default App;
