import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, isAdmin, setIsAdmin]}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <PrivateRoute path="/dashboard" >
            <Dashboard />
          </PrivateRoute>
          <Route path="/authentication" >
            <Auth />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
