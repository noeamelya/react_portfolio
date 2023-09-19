import React from "react";
import ProfilePic from "./pp3.jpg"

function Home() {
    return (
      <section>
        <div className="jumbotron p-5 mb-4 bg-body-tertiary rounded-3"/>
    <div className="container-fluid py-5">
        <div className="row justifid-content-center">
            <div className="col-lg-7">                                           
                <div className="home-text ">
                    <p className="text-white mb-1">Hello, I'm</p>
                    <h1 className="display-4 text-white">NOE AMELYA</h1>
                    <hr className="my-4"/>
                    <p>I'm learning to become a web developer at the University of Birmingham Coding Bootcamp. 16-week Full Stack Flex course that gives me the knowledge and skills to build dynamic end-to-end web applications and become a full stack web developer. </p>
                    <hr className="my-4"/>
                    <button className="btn btn-primary btn-lg" href="https://docs.google.com/presentation/d/1XBamPzxo_lJIP1-UdGeLR5h0PoqTnA3pT2oxSBRxC-w/mobilepresent?slide=id.p" type="button">My Portfolio</button>
                </div>
            </div>
            <div className="col-lg-5">                                           
                <div className="device-container" >
                    <img src={ProfilePic} className="rounded-circle" alt="profile img" />
                </div>
            </div>
        </div>
    </div>

      </section>
    );
  }
  
  export default Home;