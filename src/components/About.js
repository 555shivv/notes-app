import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <div className="col-md-12">
          <h1 className="display-4 mb-4 text-dark">About iNotebook</h1>
          <p className="lead mb-4 text-dark">
            Welcome to iNotebook, your ultimate tool for managing and organizing your notes effortlessly. Whether you're a student, professional, or just someone who loves to stay organized, iNotebook is designed to help you keep track of your thoughts, ideas, and tasks.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-12">
          <h2 className="display-5 mb-3">Features</h2>
          <ul className="list-unstyled">
            <li><i className="bi bi-check-circle"></i> <strong>Organize Your Notes:</strong> Create, edit, and organize your notes with ease.</li>
            <li><i className="bi bi-check-circle"></i> <strong>Secure and Private:</strong> Your notes are stored securely and are only accessible by you.</li>
            <li><i className="bi bi-check-circle"></i> <strong>Search Functionality:</strong> Find your notes quickly with our powerful search feature.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
