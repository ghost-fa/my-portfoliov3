import React, { Component, Fragment } from 'react';

class NotFound extends Component {
  componentDidMount() {
    document.title = 'NotFound | Error(404)';
  }
  render() {
    return (
      <Fragment>
        <main className="notfound container d-flex">
          <div className="m-auto display-1 text-center text-danger">
        <h1>Error : 404</h1>
        <p>Sorry Mabye You Type Somting Wron Try Agin</p>
        </div>
        </main>
      </Fragment>
    );
  }
}

export default NotFound;
