import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container } from 'reactstrap';
  import { withRouter } from "react-router-dom";

import Project from '../projects.json'
const SingleProject = (props) => {
  console.log(props.match.params.id)
  console.log(Project[props.match.params.id])
  const project = Project[props.match.params.id];
  return (
    <Container>
      <Card>
        <CardBody>

          <CardTitle>{project.title}</CardTitle>

        </CardBody>
        <img width="100%" src={project.thumbnailUrl} alt="Card image cap" />
        <CardBody>
          <CardText>{project.description}</CardText>
          <CardLink href={project.projectUrl}>github</CardLink>
          <CardLink href={project.onlineUrl}>demo</CardLink>
        </CardBody>
      </Card>
    </Container>
  );
};

export default withRouter(SingleProject);
