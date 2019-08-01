import React from 'react';
import './App.css';

import Banner from './containers/Banner';
import MarkdownLoader from './containers/MarkdownLoader';
import Footer from './containers/Footer';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { menu as menuConfig } from './config.json'

class App extends React.Component {
  renderRoutes() {
    return Object.keys(menuConfig).map((item, index) => {
            return <Route key={index} path={ menuConfig[item] } render={() => {
             return <MarkdownLoader path={menuConfig[item]}></MarkdownLoader>
          }} />})
  }

  render() {
    return (
      <Router>
        <Redirect from="/" to='/home' />
        <Banner></Banner>
        {this.renderRoutes()}
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
