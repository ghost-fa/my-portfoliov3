import React, { Component, Fragment } from 'react';


class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
<div id="Home">
       <div  className="my-imag img-fluid">

       </div>
       <h1 className="h1 text-black m-5  roll-in-left text-center">
         Welcome To My First Project Online
       </h1>
</div>
      </Fragment>
    );
  }
}

export default Home;
