import React from "react";
import {
  useParams,
  Link,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";

import Topics from './topics';
export default function Home() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
    let { path, url } = useRouteMatch();
    console.log(id);
  
    return (
      <div>
        <h3> {id} Page</h3>
        {
            id==="about" && <p>
                About 
            </p>
        }
        {
            id==="topics" && 
            <div><ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>
                <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topics />
                </Route>
                </Switch>
                </div>
        }
      </div>
    );
  }