import React from "react"
import picProfile from "../../Assets/images/pp3.png"
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Hi<strong className="Brown">I'M </strong>
              </h1>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={picProfile} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
          Junior
//             <strong className="Brown">Web Developer</strong>
          </h1>
          <p>With a diverse background, I've tackled all layers of dynamic hard worker, from the website design, digital platform, database to UI, and embraced every step of the product life cycle - from concept and design to seamless deployment and ongoing support.</p>
          <p>I'm passionate about my work, always eager to learn new things and explore new opportunities and experiences also have had the opportunity to work on a variety of exciting projects throughout my career.</p>
  
          
        
        </Container>
      </Container>
    );
  }

  export default About;
  
//   export default About;

//   function About() {
//     return (
//       <div>
//         <h1>About Page</h1>
//         <p>
//         a Junior Front-End Web Developer. With a diverse background, I've tackled all layers of dynamic hard worker, from the website design, digital platform, database to UI, and embraced every step of the product life cycle - from concept and design to seamless deployment and ongoing support.
// I'm passionate about my work, always eager to learn new things and explore new opportunities and experiences also have had the opportunity to work on a variety of exciting projects throughout my career.
//         </p>
//       </div>
//     );
//   }
  
//   export default About;