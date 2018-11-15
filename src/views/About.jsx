import React, { Component, Fragment } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import { configureAnchors } from 'react-scrollable-anchor';

import Study from '../components/Study';
import Me from '../images/me.jpg';
import CV from '../components/CV.jsx';
configureAnchors({ offset: -60, scrollDuration: 800 });

class About extends Component {
  render() {
    return (
      <Fragment>
        <ScrollableAnchor id={'About'}>
          <main className="container m-auto">
            <h2 className="mt-5 mb-5 display-4 text-center description ">
              About Me
            </h2>

            <div className="left text-center ">
              <img src={Me} alt="my-pictior" className="me" />

              <p className="text-center">
                I am Fayad Alkhadra, a junior Full Stack Web Developer with a
                background in accounting and management. In 2014, when I arrived
                in Germany, I decided to take up a new career, working in web
                development. I found my opportunity at DCI, where I took my
                first step at being a web developer.
              </p>
            </div>

            <Study />
            <CV />
          </main>
        </ScrollableAnchor>
      </Fragment>
    );
  }
}

export default About;
