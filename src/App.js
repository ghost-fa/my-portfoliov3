import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About'
  import Project from './views/Project'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <Fragment >
      <Header />
      <Home />
      <About />
      <Project />

      <Footer />
      </Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
