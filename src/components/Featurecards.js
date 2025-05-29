import React from 'react';
import '../pages/Home.css';
import { Link } from 'react-router-dom';

const FeatureCards = () => {
  return (
    <section className="features-section">
      <div className="feature-card">
        {/* <img src="/assets/images/sermons.jpg" alt="Sermons" /> */}
        <h3>Sermons</h3>
        <p>Watch or listen to our latest messages and be inspired every week.</p>
      </div>
      <div className="feature-card">
        {/* <img src="/assets/images/events.jpg" alt="Events" /> */}
        <h3>Events</h3>
        <p>Get involved in upcoming worship gatherings, outreach, and community service.</p>
      </div>
      <div className="feature-card">
        {/* <img src="/assets/images/pastors.jpg" alt="Pastors" /> */}
        <h3>Pastors</h3>
        <p>Meet our dedicated leaders who shepherd our church with love and wisdom.</p>
      </div>
      <div className="feature-card">
  {/* <img src="https://images.unsplash.com/photo-1533106418989-88406c7cc8f2" alt="Gallery" /> */}
  <h3>Gallery</h3>
  <p>Explore memorable moments from our church life in pictures.</p>
  <Link to="/gallery" className="hero-btn">View Gallery</Link>
</div>

    </section>
  );
};

export default FeatureCards;



