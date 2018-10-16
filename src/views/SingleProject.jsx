import React from 'react';
import { Card, CardText, CardBody, CardLink,
  CardTitle, Container } from 'reactstrap';
  import { withRouter } from "react-router-dom";

import Project from '../projects.json'
const SingleProject = (props) => {

  const project = Project[props.match.params.id];
  return (
    <Container>
      <Card className="m-5">
        <CardBody>

          <CardTitle>{project.title}</CardTitle>

        </CardBody>
        <img width="100%" src={project.thumbnailUrl} alt="Card cap" />
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
