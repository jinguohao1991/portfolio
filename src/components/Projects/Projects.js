import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import therms from "../../Assets/Projects/therms.png";
import smart from "../../Assets/Projects/smart.jpg";
import selfix from "../../Assets/Projects/selfix.png";
import wallfair from "../../Assets/Projects/wallfair.png";
import tapscanner from "../../Assets/Projects/tapscanner.png";
import kidztime from "../../Assets/Projects/kidztime.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallfair}
              isBlog={false}
              title="Wallfair"
              description="Wallfair provides technological infrastructure to accelerate the shift of the entertainment industry to web3, focusing on interactive and highly social gaming and wagering platforms."
              link="https://wallfair.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={therms}
              isBlog={false}
              title="Therms"
              description="The all in one solution for security guard & patrol operations"
              link="https://therms.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kidztime}
              isBlog={false}
              title="Kidztime"
              description="Building ecommerce shopify website using Node.js and React/Next.js"
              link="https://staging.kidztime.org"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart}
              isBlog={false}
              title="Smart Contract"
              description="Developing and Publishing smart contract using solidity and web3.js on ethereum.org"
              link="https://ethereum.org"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={selfix}
              isBlog={false}
              title="Selfix"
              description="Building Selfie Mobile application using OpenCV, Java and Swift"
              link="https://play.google.com/store/apps/details?id=com.selfie.fix&hl=en_US&gl=US"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tapscanner}
              isBlog={false}
              title="Tapscanner"
              description="Building Scan application using OpenCV, Tesseract, Java and Swift"
              link="https://play.google.com/store/apps/details?id=pdf.tap.scanner&hl=en_US&gl=US"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
