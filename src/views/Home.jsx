import React, { Component, Fragment } from 'react';
import About from './About';
import Project from './Project'



class Home extends Component {
  componentDidMount() {
    document.title = 'Home | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>


<div id="Home">
       <div  className="my-imag img-fluid">

         <h2 className="name scale-in-center  ">I Am Fayad Alkhadra</h2>
         <p className="scale-in-center front">Front End Development</p>
<button  type="button" className="btn btn-outline-danger centered mt-5 scale-in-center"><a href="#About"> More About Me</a></button>
       </div>
       <About />
       <Project />
</div>
<i class="fas fa-arrow-down"></i>
      </Fragment>
    );
  }
}

export default Home;
