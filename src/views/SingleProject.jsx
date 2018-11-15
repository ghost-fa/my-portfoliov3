import React, { Component } from 'react';
import {
  Badge,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Container
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

import Project from '../projects.json';
class SingleProject extends Component {
  componentDidMount() {
    document.title = 'Project | Fayad Alkhadra';
  }

  render() {
    const project = Project[this.props.match.params.id];
    console.log(project);
    return (
      <Container className="text-center">
        <CardBody className="mt-3 ">
          <CardTitle className=" mt-5">{project.title}</CardTitle>
        </CardBody>

        <img className="imgSingle " src={project.thumbnailUrl} alt="Card cap" />

        <CardBody className="text-center">
          <CardText>{project.description}</CardText>
          <div>
            {project.tags.map(tag => (
              <Badge key={tag} className="ml-2 badg mb-2">
                {tag}
              </Badge>
            ))}
          </div>
          <CardLink target="_blank" href={project.projectUrl}>
            <button className="btn btn-dark mt-2"> github </button>
          </CardLink>
          <CardLink target="_blank" href={project.onlineUrl}>
            <button className="btn btn-dark mt-2"> demo </button>
          </CardLink>
        </CardBody>
      </Container>
    );
  }
}

export default withRouter(SingleProject);
