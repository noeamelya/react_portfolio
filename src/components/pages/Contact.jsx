import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Resume from './Resume';

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        
      </p>
     <p>Email : </p>
      <Link to="contact" role="button" className="btn btn-link">
        noeamelyaofficial@hotmail.com
      </Link>

    <p>Github :</p>
      <Link to="contact" role="button" className="btn btn-link">
        https://github.com/noeamelya
      </Link>

      <p>Linkedin : </p>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>

      <p>Phone number : </p>
      <Link to="contact" role="button" className="btn btn-link">
        07899 768624
      </Link>

      <Routes>
        <Route path="Resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default Contact;
