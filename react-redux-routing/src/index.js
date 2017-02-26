import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './reducers';
import App from './App';
import form1 from './form1';
import form2 from './form2';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
      <Route path="form1" component={form1}>
        <Route path=":uid" component={form1}/>
      </Route>
      <Route path="form2" component={form2}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
