import React, { Component } from 'react';
import {
  Card,
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
    return (
      <Container>
        <Card className="mt-5">
          <CardBody className="mt-3">
            <CardTitle>{project.title}</CardTitle>
          </CardBody>
          <img width="100%" src={project.thumbnailUrl} alt="Card cap" />
          <CardBody className="text-center">
            <CardText>{project.description}</CardText>
            <div>
              {project.tags.map(tag => (
                <Badge key={tag} className="ml-2">
                  {tag}
                </Badge>
              ))}
            </div>
            <CardLink target="_blank" href={project.projectUrl}>
              <button className="btn btn-dark "> github </button>
            </CardLink>
            <CardLink target="_blank" href={project.onlineUrl}>
              <button className="btn btn-dark "> demo </button>
            </CardLink>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default withRouter(SingleProject);
