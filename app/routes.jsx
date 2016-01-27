import React from 'react';
import ReactDOM from 'react-dom';
import { Route , IndexRoute } from 'react-router'

import App from './containers/App.jsx';
import Home from './containers/Home.jsx';
import About from './containers/About.jsx';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About}/>

  </Route>
)
