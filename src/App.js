import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';
import history from './history';
import { allRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Layout>
          <Switch>
            {allRoutes.map((route, i) => <Route key={i} {...route} />)}
          </Switch>
        </Layout>
      </Router >
    </div>
  );
}

export default App;
