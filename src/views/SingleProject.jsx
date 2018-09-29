// import React, { Component, Fragment } from 'react';
// import { Badge } from 'reactstrap';
// import projects from '../projects.json';
//
// class SingleProject extends Component {
//   componentDidMount() {
//     const id = this.props.match.params.id;
//     const project = projects[id] || {};
//     document.title = `${project.title} | Fayad alkhadra`;
//   }
//
//   render() {
//     const id = this.props.match.params.id;
//     const project = projects[id] || {};
//     return (
//       <Fragment>
//         <div className="container text-center">
//         <h2>{project.title}</h2>
//         <img className="img-fluid " src={project.imageUrl} alt={project.title} />
//         <p>{project.description}</p>
//         <div className="  mb-2 ">
//           {project.tags.map(tag => (
//             <Badge key={tag}  pill>
//               {tag}
//             </Badge>
//           ))}
//         </div>
//         <a className="btn btn-dark " href={project.projectUrl}>see in github</a>
//          <a  className="btn btn-dark ml-3" href={project.onlineUrl}>see online</a>
//         </div>
//
//
//       </Fragment>
//     );
//   }
// }
//
// export default SingleProject;
