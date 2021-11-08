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
import ModalEdit from './Modal/ModalEdit'

function App() {
  // const routes = RegisterDiv()
  return (
      <div id='app'>
        {/* <ModalEdit /> */}
        <Header />
        <RegisterDiv />
      </div>
  )
}

export default App;
