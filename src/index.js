import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './pages/App';
import SeriesyPeliculas from './pages/SeriesyPeliculas';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/seriesypeliculas/:seriesypeliculasId" component={SeriesyPeliculas} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
