import React, { Component, Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About'

class App extends Component {
  render() {
    return (
      <Fragment >
      <Header />
      <Home />
      <About />
      <Footer />
      </Fragment>
    );
  }
}

export default App;
