import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
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
                  target="_blank"
                  href="https://www.linkedin.com/in/fayad-alkhadra-577248170/"
                >
                  <FontAwesomeIcon
                    className="h1 pl-2 text-light"
                    icon={faLinkedin}
                  />
                </a>

                <a target="_blank" href="https://github.com/ghost-fa">
                  <FontAwesomeIcon
                    className="text-light pl-2 h1"
                    icon={faGithub}
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/fayyadfre/?hl=de"
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
