import React from "react";
import { Container, Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <>
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Days I code </span>
            </h2>
          </div>
        </div>
      </div>
      <Container fluid>
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <GitHubCalendar
              username="rafi983"
              blockSize={15}
              blockMargin={5}
              color="#c084f5"
              fontSize={16}
            />
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Github;
