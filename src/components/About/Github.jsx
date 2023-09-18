import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Project <strong className="brown">Code</strong>
        </h1>
        <GitHubCalendar
          username="noeamelya"
          blockSize={16}
          blockMargin={6}
          color="#c084f5"
          fontSize={15}
        />
      </Row>
    );
  }
  
  export default Github;