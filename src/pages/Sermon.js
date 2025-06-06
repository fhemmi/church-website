



import React from 'react';
import SermonCard from '../components/Sermoncard';
import './Sermons.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';







const Sermons = () => {
    
     useScrollAnimation();
  
    const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const targetId = location.hash.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100); // small delay ensures it works after navigation
    }
  }
}, [location]);
  const sermons = [
    {
      title: "Faith Over Fear",
      speaker: "Pastor John Doe",
      date: "May 18, 2025",
      image: "https://images.unsplash.com/photo-1630197158266-bfe9ce8ed653?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Walking in Love",
      speaker: "Pastor Mary Smith",
      date: "May 11, 2025",
      image: "https://images.unsplash.com/photo-1711843012030-efdf624edd37?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Power of Prayer",
      speaker: "Pastor James Lee",
      date: "May 4, 2025",
      image: "https://images.unsplash.com/photo-1511142747855-3f3ebbd3bd90?w=500&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="sermons-page" id='sermon'> 
      {/* Hero Section */}
      <section className="sermon-hero fade-in-up">
        <div className="overlay">
          <div className="hero-content">
            <h1>Faith Comes by Hearing</h1>
            <p>Be transformed by the Word through our weekly sermons and messages.</p>
          </div>
        </div>
      </section>

      {/* Main Title */}
      <h2 className="sermons-title">Recent Sermons</h2>

      {/* Sermon Cards */}
      <div className="sermon-list">
        {sermons.map((sermon, index) => (
          <SermonCard key={index} {...sermon} />
        ))}
      </div>

      <hr className="sermon-divider" />

      {/* YouTube Section */}
      <section className="sermon-section video-sermons fade-in-up">
        <h2 className="section-heading">Watch Sermons Online</h2>
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube sermon 1"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/0Eu1X8th7EI"
            title="YouTube sermon 2"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Audio Section */}
      <section className="sermon-section audio-sermons fade-in-up">
        <div className="audio-container">
          <h2 className="section-heading">Audio & In-Person Sermons</h2>
          <p className="section-text">
            Join us every Sunday for in-person worship or listen to the message later through our audio archives.
          </p>
          <audio controls>
            <source src="../assets/audio/sermon1.mp3" type="audio/mp3"/>
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
