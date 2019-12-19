import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Header />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
