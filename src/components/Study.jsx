import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faHtml5,
  faCss3,
  faSass,
  faJsSquare,
  faReact,
  faNode
} from '@fortawesome/free-brands-svg-icons';

const Study = () => {
  return (
    <Fragment>
      <main className="container">
        <h3 className="mt-5 text-center description display-4">my skills:</h3>
        <div className="row  text-center mt-5">
          <div className="col-lg-4 col-6 col-sm=2">
            <FontAwesomeIcon className="text-dark display-2" icon={faGithub} />

            <p>Git</p>
          </div>

          <div className="col-lg-4 col-6">
            <FontAwesomeIcon
              className=" text-warning display-2"
              icon={faHtml5}
            />
            <p className="text-center ">HTML </p>
          </div>
          <div className="col-lg-4 col-6">
            <FontAwesomeIcon className="display-2 text-primary" icon={faCss3} />
            <p className="text-center">css</p>
          </div>

          <div className="col-lg-4 col-6 mt-2">
            <FontAwesomeIcon className="text-danger display-2" icon={faSass} />
            <p className="text-center">sass</p>
          </div>

          <div className="col-lg-4 col-6 text-center">
            <FontAwesomeIcon
              className="display-2 col-lg-12  bg-warning text-center"
              icon={faJsSquare}
            />
            <p className="text-center">JavaScript</p>
          </div>

          <div className="col-lg-4 col-6">
            <FontAwesomeIcon
              className="display-2 col-lg-4  text-primary text-center"
              icon={faReact}
            />
            <p className="text-center">React</p>
          </div>
          <div className="col-lg-4 col-6 text-center m-auto">
            <FontAwesomeIcon
              className="display-2 col-lg-4  text-primary text-center"
              icon={faNode}
            />
            <p className="text-center">Node.js</p>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Study;
