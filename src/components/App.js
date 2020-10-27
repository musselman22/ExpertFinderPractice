import React from 'react';
import {  BrowserRouter as Router,
          Route, } from 'react-router-dom';
import HeaderTwo from './HeaderTwo';
import SearchProfiles from './SearchProfiles';
import UserProfile from './UserProfile';
import ViewProfile from './ViewProfile';
import HomePage from './HomePage';
import Endorse from './Endorse';
import ViewEndorse from './ViewEndorse';


function App() {
  return (
    <Router>
    <div>
      <HeaderTwo />
      <Route path="/user-profile/" exact component={UserProfile} />
      <Route path="/search" exact component={SearchProfiles} />
      <Route path="/view-profile/:id" exact component={ViewProfile} />
      <Route path="/endorsements" exact component={ViewEndorse} />
      <Route path="/endorse/:id" exact component={Endorse} />
      <Route path="/" exact component={HomePage} />
    </div>
    </Router>
  );
}

export default App;
