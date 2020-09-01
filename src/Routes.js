import React from 'react';
import injectContext from './store/appContext'
import Detalles from './Components/Detalles';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Routes = () => (
    <Router>
        <Switch>
          <Route path="/" component={App} exact>
          </Route>
          <Route path="/detalles/bird/:uid" component={Detalles} exact>
          </Route>
          <Route path="*" render={() => <h2>Not Found</h2>}>
          </Route>
        </Switch>
      </Router>
)
export default injectContext (Routes)