import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Index from './views/home/index';
import SearchPage from './views/searchPage/SearchPage';
import './App.css';
import './css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
              <Header />
              <Router>
                <Switch >
                      <Route  path="/wk" exact component={Index} />
                      <Route  path="/wk/search"  component={SearchPage} />
                </Switch>
              </Router>
              <Footer />
      </div>
    );
  }
}

export default App;
