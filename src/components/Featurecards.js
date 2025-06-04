



import React from 'react';
import '../pages/Home.css';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const FeatureCards = () => {

 useScrollAnimation(); // initialize scroll animations

  return (
    <section className="features-section fade-in-up">
      <div className="feature-card">
        <h3>Sermons</h3>
        <p>Watch or listen to our latest messages and be inspired every week.</p>
        <Link to="/sermons#sermon" className="hero-btn">Explore Sermons</Link>
      </div>

      <div className="feature-card">
        <h3>Events</h3>
        <p>Get involved in upcoming worship gatherings, outreach, and community service.</p>
        <Link to="/events#events" className="hero-btn">See Events</Link>
      </div>

      <div className="feature-card">
        <h3>Pastors</h3>
        <p>Meet our dedicated leaders who shepherd our church with love and wisdom.</p>
        <Link to="/about#leadership" className="hero-btn">Meet the Pastors</Link>
      </div>

      {/* Separate Gallery Card */}
      <div className="feature-card gallery-card">
        <h3>Gallery</h3>
        <p>Explore memorable moments from our church life in pictures.</p>
        <Link to="/gallery" className="hero-btn">View Gallery</Link>
      </div>
    </section>
  );
};

export default FeatureCards;
