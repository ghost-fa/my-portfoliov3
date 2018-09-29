import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About'
  import Project from './views/Project'
import SingleProject from './views/SingleProject'
import NotFound from './views/NotFound'
class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <Fragment >
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/" component={About} exact />
      <Route path="/" component={Project} exact />
      <Route path="/projects/:id" component={SingleProject} exact />
      <Route path="/notfound" component={NotFound} exact/>
      <Footer />
      </Fragment>
    </BrowserRouter>
    );
  }
}

export default App;
