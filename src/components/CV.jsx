import React, { Fragment } from 'react';

const CV = () => {
  return (
    <Fragment>
      <p className=" m-5 h3 text-center">
        If you are intresting to know more about me you can download my Cv
      </p>
      <div className="container d-flex mt-5 mb-5">
        <button type="button" className=" m-auto btn CV  btn-dark">
          {' '}
          <a href="../CV/resume.pdf" download="resume.pdf">
            DOWNLOAD CV
          </a>
        </button>
      </div>
    </Fragment>
  );
};

export default CV;
