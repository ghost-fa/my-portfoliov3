import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './views/Home';
import NavBar from './components/navBar';
import SingleProject from './views/SingleProject';
import NotFound from './views/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects/:id" component={SingleProject} exact />
            <Route component={NotFound} exact />
          </Switch>

          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
