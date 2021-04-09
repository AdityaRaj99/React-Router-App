import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/home'
// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

const App=()=> {
  return (
    <Router>
      <div style={{padding:'20px',backgroundColor:'lightgray'}}>
        <h2>Accounts</h2>
        <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
        </ul>

        <Switch>
          <Route path="/:id" children={<Home />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
