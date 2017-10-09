import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Switch, Route} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import Login from './containers/Login';
import Register from './containers/Register';
import AccountDetail from './containers/AccountDetail';
import Logout from './containers/Logout';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <HashRouter>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/user/:id" component={AccountDetail}/>
      </Switch>
    </BaseLayout>
  </HashRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
