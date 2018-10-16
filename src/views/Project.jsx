import React, { Component, Fragment } from 'react';
import { Card, CardBody, CardTitle,Badge, Row, Col, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

import projects from '../projects.json';

class Project extends Component {
  componentDidMount() {
    document.title = 'Project | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>

<h2 id="Project" className="text-center m-5">Project</h2>
        <Row className="container m-auto ">

          {projects.map((project, i) => (
            <Col sm="12" md="6" lg="4" key={i} >
            <Card  className="mt-2 figure">
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
              </CardBody>
              <CardImg
                className="cart-image"
                width="50%"
                src={project.thumbnailUrl}
                alt={project.title}
              />
              <CardBody>
                <div>
                  {project.tags.map(tag => (
                    <Badge key={tag} className="ml-2" >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link className="btn btn-dark text-align-center mt-3" to={`/projects/${i}`}>
                  See Project
</Link>
              </CardBody>

            </Card>
          </Col>

          ))}

      </Row>

      </Fragment>
    );
  }
}

export default Project;
