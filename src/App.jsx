// App.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import StudentDetailsPage from './StudentDetailsPage';
import UserProfilePage from './UserProfilePage';

const App = () => {
  return (
    <div>
      
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/students/:studentId" component={StudentDetailsPage} />
        <Route path="/profile" component={UserProfilePage} />
      </Switch>
    </div>
  );
};

export default App;
