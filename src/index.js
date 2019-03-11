import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './css/App.css';
import { About } from './js/components/About';
import { Contact } from './js/components/Contact';
import { Home } from './js/components/Home';
import Clips from './js/components/Clips';
import Stills from './js/components/Stills';
import Root from './js/components/Root';
import { Router, Route, browserHistory, IndexRoute } from "react-router";


class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={Root} >
          <IndexRoute component={Home} />
          <Route path={"about"} component={About} />
          <Route path={"contact"} component={Contact} />
          <Route path={"clips"} component={Clips} />
          <Route path={"stills"} component={Stills} />

        </Route>
      </Router>

    );
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
