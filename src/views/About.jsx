import React, { Component, Fragment } from 'react';
import Study from '../components/Study'
import Me from '../images/my-foto2.png'
import CV from '../components/CV.jsx';

class About extends Component{
  componentDidMount() {
    document.title = 'About | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>

<main  id="About"  className="container m-auto">
<h2 className="mt-5 text-center roll-in-blurred-right">About</h2>
<h3 className="text-center">let me tell you somthing about me</h3>




  <div className="left text-center ">

    <img src={Me} alt="my foto" className="my  roll-in-blurred-right"/>



  <p className="slide-in-blurred-left text-center p-5"> i am fayad alkhadra i was born and grow up in syria Damascus in 19/03/1989 and i study accounting in  and I study accounting in Damascus I graduated in 1-01-2011 I work in Clothing factory I come Germany I study B1 and then I Found DCI the nice school and frindly pepol i like them so much and i join the course Web Deveolepment and i was so happy in this course i learn so many thing from Front end to Back end and i hope i can learn more and be the softwere development </p>

  </div>


  <Study />
  <CV />

</main>


      </Fragment>
    )
  }
}


export default About;
