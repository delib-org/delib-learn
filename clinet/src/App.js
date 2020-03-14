import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//pages
import Start from './view/pages/start/Start';
import Question from './view/pages/question/Question';
import Lesson from './view/pages/lesson/Lesson';
import Lessons from './view/pages/lessons/Lessons';
import Classes from './view/pages/classes/Classes';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/question">
            <Question />
          </Route>
          <Route path="/lesson">
            <Lesson />
          </Route>
          <Route path="/lessons">
            <Lessons />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
        </Switch>
     
    </Router>
  );
}

export default App;
