import React from 'react';

function App() {
  const container = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1a1a2e',
    color: '#e0e0e0',
    padding: '0',
    margin: '0',
    minHeight: '100vh',
    overflowX: 'hidden',
  };

  const section = {
    padding: '60px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const heading = {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#00f2ff',
    textAlign: 'center',
    textShadow: '2px 2px 6px #00f2ff66',
  };

  const subHeading = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const hero = {
    ...section,
    textAlign: 'center',
    paddingTop: '80px',
  };

  const button = {
    marginTop: '20px',
    padding: '10px 25px',
    fontSize: '1rem',
    backgroundColor: '#00f2ff',
    color: '#1a1a2e',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  };

  const card = {
    backgroundColor: '#16213e',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'transform 0.2s ease',
  };

  const contactForm = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '500px',
    margin: '0 auto',
  };

  const input = {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
  };

  const footer = {
    textAlign: 'center',
    padding: '30px 10px',
    backgroundColor: '#0f3460',
    marginTop: '40px',
    color: '#aaa',
  };

  return (
    <div style={container}>
      {/* Hero Section */}
      <section style={hero}>
        <h1 style={heading}>Hi, I'm Alex Doe</h1>
        <p style={{ fontSize: '1.2rem' }}>Frontend Developer | UI/UX Designer</p>
        <button style={button}>Download Resume</button>
      </section>

      {/* About Section */}
      <section style={section}>
        <h2 style={heading}>About Me</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          I'm a passionate frontend developer with 3+ years of experience building responsive and engaging websites using React, JavaScript, and CSS. I love creating clean UI/UX and solving design challenges through code.
        </p>
      </section>

      {/* Projects Section */}
      <section style={section}>
        <h2 style={heading}>Projects</h2>
        <div style={cardGrid}>
          <div style={card}>
            <h3 style={subHeading}>Portfolio Website</h3>
            <p>A personal portfolio site built with React and styled-components.</p>
          </div>
          <div style={card}>
            <h3 style={subHeading}>Todo App</h3>
            <p>A simple and intuitive todo list app with drag-and-drop support.</p>
          </div>
          <div style={card}>
            <h3 style={subHeading}>Weather App</h3>
            <p>Weather forecast app using OpenWeatherMap API and responsive layout.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={section}>
        <h2 style={heading}>Contact</h2>
        <form style={contactForm}>
          <input style={input} type="text" placeholder="Your Name" required />
          <input style={input} type="email" placeholder="Your Email" required />
          <textarea
            style={{ ...input, minHeight: '100px' }}
            placeholder="Your Message"
            required
          ></textarea>
          <button style={button} type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={footer}>
        © 2025 Alex Doe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
