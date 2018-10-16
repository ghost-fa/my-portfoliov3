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

//
// function mapStyles(styles) {
//   return {
//     opacity: styles.opacity,
//     transform: `scale(${styles.scale})`,
//   };
// }
//
// // wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//   return spring(val, {
//     stiffness: 330,
//     damping: 22,
//   });
// }
//
// // child matches will...
// const bounceTransition = {
//   // start in a transparent, upscaled state
//   atEnter: {
//     opacity: 0,
//     scale: 1.2,
//
//   },
//   // leave in a transparent, downscaled state
//   atLeave: {
//     opacity: bounce(0),
//     scale: bounce(0.8),
//
//   },
//   // and rest at an opaque, normally-scaled state
//   atActive: {
//     opacity: bounce(1),
//     scale: bounce(1),
//   },
// };
