import React, { Component } from 'react';
import About from './About';
import Project from './Project';
import Contact from '../views/Contact.jsx';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -60, scrollDuration: 1000 });

class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Fayad Alkhadra';
  }
  render() {
    return (
      <ScrollableAnchor id={'Home'}>
        <div>
          <div>
            <div className="d-flex flex-column img-fluid justify-content-center my-imag text-white text-center ">
              <h2 className="scale-in-center name mb-2">Fayad Alkhadra</h2>
              <p className="scale-in-center postion">Web Developer</p>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-danger centered scale-in-center btn-lg"
                >
                  <a href="#About"> About Me</a>
                </button>
              </div>
            </div>
            <About />
            <Project />
            <Contact />
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Home;
