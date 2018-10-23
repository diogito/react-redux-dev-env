import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';

import App from './pages/App';

/* eslint-disable no-console */

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
} else {
  // register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered: ', registration);
      }).catch(registrationError => {
        console.log('Service Worker registration failed: ', registrationError);
      });
  }
}

const render = (_App) => {
  ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={_App}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'));
}
render(App);

if (module.hot) {
  module.hot.accept(App, function() {
    console.log('Accepting the updated App');
    render(App);
  })
}
