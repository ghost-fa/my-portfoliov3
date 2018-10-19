import React, { Component, Fragment } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import { configureAnchors } from 'react-scrollable-anchor';

import Study from '../components/Study';
import Me from '../images/me.jpg';
import CV from '../components/CV.jsx';
configureAnchors({ offset: -60, scrollDuration: 800 });

class About extends Component {
  componentDidMount() {
    document.title = 'About | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
        <ScrollableAnchor id={'About'}>
          <main className="container m-auto">
            <h2 className="mt-5 mb-5 display-4 text-center description ">
              About
            </h2>

            <h3 className="text-center">let me tell you somthing about me</h3>
            <div className="left text-center ">
              <img src={Me} alt="my-pictior" className="me" />

              <p className="text-center  p-5">
                I am Fayad Alkhadra, a junoir Full Stack Web Developer with
                accounting and managment experiences. after arriving to Germany
                in 2014, all my openions and ideas about work was changed so I
                decided to start a new career starting from the point that web
                development is the future, then I found my opportunity at DCI,
                where I started my first step being a developer.
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
