// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "../Project/ProjectCard";
// import bootstrapPortfolio from "../../Assets/images/outcome.png";
// import ProfileGen from "../../Assets/images/TeamProf.png";
// import ReadmePro from "../../Assets/images/Prof-Readme-Gen.gif";


// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="Brown">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bootstrapPortfolio}
//               isBlog={false}
//               title="bootstrapPortfolio"
//               description="Simple, elegant and creative portfolio template for showcase portfolio or personal information."
//               ghLink="https://github.com/noeamelya/Bootstrap-Portfolio/"
//               demoLink="https://watch.screencastify.com/v/UROmiGNd1WrRzStS4xPh/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={ProfileGen}
//               isBlog={false}
//               title="Team-Profile-Generator"
//               description="This application will take in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. This project demonstrates use of OOP and TDD using Jest."
//               ghLink="https://github.com/noeamelya/team_profile_gen"
//               demoLink="https://drive.google.com/file/d/1z6LH5DyXLuwDZGR8TO7r_GrAuOlLuCtg/view"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={ReadmePro}
//               isBlog={false}
//               title="prof-readme-gen"
//               description="Create a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer packageLinks to an external site."
//               ghLink="https://github.com/noeamelya/prof-readme-gen"
//               demoLink="https://drive.google.com/file/d/1eW0wNJKtcet6I288AhfOl14a39sj9ho_/view"              
//             />
//           </Col>

//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;