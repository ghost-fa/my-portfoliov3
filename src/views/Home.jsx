import React, { Component, Fragment } from 'react';


class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>

       <div className="my-imag img-fluid"></div>
       <h1 className="h1 text-black  roll-in-left text-center">
         Welcome To My First Project Online
       </h1>
        <main className="container to mt-5 ">

        
        </main>
      </Fragment>
    );
  }
}

export default Home;
