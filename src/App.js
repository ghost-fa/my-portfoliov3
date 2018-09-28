import React, { Component, Fragment } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <Fragment >
      <Header />
      <Home />
      <Footer />
      </Fragment>
    );
  }
}

export default App;
