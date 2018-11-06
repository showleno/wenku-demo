import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
// 引入react-redux配置
import { Provider } from 'react-redux';
// 引入react-store配置
import store from './redux/store/index';
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
              <Provider store={store}>
                <Router>
                  <div>
                        <Route  path="/wk" exact component={Index} />
                        <Route  path="/wk/search"  component={SearchPage} />
                  </div>
                </Router>
              </Provider>
                <Footer />
      </div>
    );
  }
}

export default App;
