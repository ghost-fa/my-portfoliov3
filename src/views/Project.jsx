import React, { Component } from 'react';
import { Row, Col, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import projects from '../projects.json';

import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -60, scrollDuration: 1000 });
class Project extends Component {
  componentDidMount() {
    document.title = 'Project | Fayad Alkhadra';
  }
  render() {
    return (
      <ScrollableAnchor id={'Project'}>
        <div>
          <h2 className="text-center description display-4 m-5">Project</h2>
          <Row className="container m-auto text-center ">
            {projects.map((project, i) => (
              <Col sm="12" md="6" lg="4" className="figure" key={i}>
                <CardImg
                  className="cart-image "
                  width="50%"
                  src={project.thumbnailUrl}
                  alt="project"
                />

                <Link
                  className="btn btn-dark col-sm-6 col-lg-6 col-md-6 text-center  mt-2 mb-5"
                  to={`/projects/${i}`}
                >
                  See Project
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </ScrollableAnchor>
    );
  }
}

export default Project;
