import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import Dahsboard from './Components/Dashboard/Dashboard/Dahsboard';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/appointment'>
          <Appointment></Appointment>
        </Route>
        <Route path='/dashboard/appointment'>
          <Dahsboard></Dahsboard>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
