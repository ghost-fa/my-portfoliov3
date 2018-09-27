import React, { Component, Fragment } from 'react';

class NotFound extends Component {
  componentDidMount() {
    document.title = 'NotFound | Error(404)';
  }
  render() {
    return (
      <Fragment>
        <h1>Error : 404</h1>
        <p>Sorry Mabye You Type Somting Wron Try Agin</p>
      </Fragment>
    );
  }
}

export default NotFound;
