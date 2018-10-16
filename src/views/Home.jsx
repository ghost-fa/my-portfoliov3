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
       <div  className="d-flex flex-column img-fluid justify-content-center my-imag text-white text-center ">

         <h2 className="scale-in-center name mb-2">I Am Fayad Alkhadra</h2>
         <p className="scale-in-center postion">| Front End Development |</p>
         <div>
<button  type="button" className="btn btn-outline-danger centered scale-in-center btn-lg"><a href="#About"> More About Me</a></button>
       </div>
       </div>
       <About />
       <Project />
</div>

      </Fragment>
    );
  }
}

export default Home;
