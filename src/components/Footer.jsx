import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import Contact from '../views/Contact.jsx'

const Footer = () => {
  return (
    <Fragment>

      <footer className="mt-5 bg-dark  text-light p-0">

        <div className="container ">
          <Contact />

          <div className="row">
            <p className=" col-6 ">&copy; Copyright Fayad 2018.</p>
            <div className="text-right  col-6">
              <p>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon
                    className="text-light pl-2  h2 "
                    icon={faFacebookSquare}
                  />
                </a>
                <a href="https://www.linkedin.com/in/fayad-alkhadra-577248170/">
                  <FontAwesomeIcon className="h2 pl-2 text-light" icon={faLinkedin} />
                </a>

                <a href="https://github.com/ghost-fa">
                  <FontAwesomeIcon
                    className="text-light pl-2 h2"
                    icon={faGithub}
                  />
                </a>
                <a href="https://www.instagram.com/fayyadfre/?hl=de">
                  <FontAwesomeIcon
                    className="text-light pl-2 h2"
                    icon={faInstagram}
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="text-center top">
              <a href="#top">^</a>
              </div>
        </div>

      </footer>
    </Fragment>
  );
};

export default Footer;
