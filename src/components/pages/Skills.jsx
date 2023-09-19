import React from "react";


function Skills() {
    return (
        <section className="skills py-5 mt-5" >
    <div className="container-fluid py-4 mt- p-4">
        <div className="row justifid-content-center">
            <div className="col-lg-12">
                <hr className="my-5"/>
                <h2 className="text-center fw-bold mb-3">Skills</h2>
            </div>
        </div>
        <div className="row content justifid-content-center p-5">
            <div className="box col-sm-12 col-md-4 col-md-4 p-4">
                <div className="inner justifid-content-center" >
                    <div className="icon fs-4 text-center text-white mb-4"><i className="fa-sharp fa-solid fa-icons"></i></div>
                    <h3 className="text-center fw-bold mb-4">Content creation</h3>
                    <p className="text-center">Build a front end website either from scratch or by utilising a front end framework (such as Bootstrap), and create a full stack Single Page Application with AJAX Communication </p>

                </div>
            </div>
            <div className="box col-sm-12 col-md-4 col-m4 p-4">
                <div className="inner justifid-content-center">
                    <div className="icon fs-4 text-center text-white mb-4"><i className="fa-solid fa-user"></i></div>
                    <h3 className="text-center fw-bold mb-4">Ability to self-teach and learn fast</h3>
                    <p className="text-center p-2">Work independently, or in a group, on complex projects throughout the entire development lifecycle.</p>
                </div>
            </div>
            <div className="box col-sm-12 col-md-4 col-md-4 p-4">
                <div className="inner justifid-content-center">
                    <div className="icon fs-4 text-center text-white mb-4"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                    <h3 className="text-center fw-bold mb-4">Organization and time management</h3>
                    <p className="text-center p-2"> The ability to organize my time and work efficiently is another important soft skill that will bring success as a content creator. As a digital creator, I am likely to work from anywhere using different tools.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    );
  }
export default Skills;