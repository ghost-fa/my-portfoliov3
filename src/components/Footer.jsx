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
      <footer className="mt-5 bg-dark text-light p-0">
        <div className="container ">
          <div className="row">
            <p className=" col-6 ">&copy;2018-web-up developer website</p>
            <div className="text-right  col-6">
              <p>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon
                    className="text-light pl-2  display-4 "
                    icon={faFacebookSquare}
                  />
                </a>
                <a href="https://www.linkedin.com/in/fayad-alkhadra-577248170/">
                  <FontAwesomeIcon className="display-4 pl-2 text-light" icon={faLinkedin} />
                </a>

                <a href="https://github.com/ghost-fa">
                  <FontAwesomeIcon
                    className="text-light pl-2 display-4"
                    icon={faGithub}
                  />
                </a>
                <a href="https://www.instagram.com/fayyadfre/?hl=de">
                  <FontAwesomeIcon
                    className="text-light pl-2 display-4"
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
