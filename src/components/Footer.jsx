import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Fragment>
      <footer className="mt-5 bg-dark  text-light p-0">
        <div className="container ">
          <div className="row">
            <p className=" col-6 copy">&copy; Copyright Fayad 2018.</p>
            <div className="text-right  col-6">
              <p>
                <a
                  href="https://www.linkedin.com/in/fayad-alkhadra-577248170/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="h1 pl-2 text-light"
                    icon={faLinkedin}
                  />
                </a>

                <a
                  href="https://github.com/ghost-fa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-light pl-2 h1"
                    icon={faGithub}
                  />
                </a>
                <a
                  href="https://www.instagram.com/fayyadfre/?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="text-light pl-2 h1"
                    icon={faInstagram}
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
