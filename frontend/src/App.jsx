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
import M from 'materialize-css';

function App() {
  // const routes = RegisterDiv()
  return (
      <div id='app'>
        <Header />
        <RegisterDiv />
      </div>
  )
}

export default App;
