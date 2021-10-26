import React, {  useContext } from 'react';
import './App.css';

import ProtectedRoute from './views/ProtectedRoute/ProtectedRoute';
import Formulario from './components/Formulario/index';
import Home from './views/Home/index';
import Navigation from './components/Navbar';

import {
  Switch,
  Route
} from 'react-router-dom';

import { DataContext } from './context/DataContext';

function App() {
  const { isLogged } = useContext( DataContext );

  return (
      <div className="App">
      <Navigation></Navigation>
      <Switch>
          <Route path="/" component={ Formulario } exact/>
          <ProtectedRoute path="/home" component={Home} isLogged={isLogged} />
      </Switch>
      </div>
);
}

export default App;
