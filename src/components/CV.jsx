import React, { Fragment } from 'react';

const CV = () => {
  return (
    <Fragment>
      <div className=" m-5 h3 text-center">
        <p>If you are intrested to know more about me, </p>
        <p> download my CV here.</p>
      </div>
      <div className="container d-flex mt-5 mb-5">
        <a
          href="../CV/resume-F-Alkhadra.pdf"
          download="resume.pdf"
          className="CV m-auto btn btn-outline-dark"
        >
          DOWNLOAD CV
        </a>
      </div>
    </Fragment>
  );
};

export default CV;
