import React, { Component, Fragment } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About'
  import Project from './views/Project'

class App extends Component {
  render() {
    return (
      <Fragment >
      <Header />
      <Home />
      <About />
      <Project />
      <Footer />
      </Fragment>
    );
  }
}

export default App;
