



import React from 'react';
import './About.css';
import useInView from '../hooks/Useinview';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';






const About = () => {


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

  const [ref, isInView] = useInView({ threshold: 0.1 });


  return (
    <div className="about-wrapper">

      {/* Hero Section */}
      {/* <section className="about-hero"> */}
      <section ref={ref} className={`about-hero ${isInView ? 'animate-fade-up' : ''}`}>
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <h1 className="section-title">Welcome to Faith Church</h1>
            <p className="subtitle text-white">Where Grace Meets Growth</p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome">
        <div className="container">
          <h2 className="section-heading">A Place to Belong</h2>
          <p className="section-text">
            At Faith Church, we're more than just a congregation — we're a family united by love, faith, and purpose. Whether you're exploring Christianity or looking for a new church home, there's a place here for you.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-alt mission-vision">
        <div className="container grid-2">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To lead people into a growing relationship with Jesus Christ, equipping them to live out their faith every day.
            </p>
          </div>
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To be a Christ-centered, Spirit-empowered church that influences the world through love, service, and the truth of God's Word.
            </p>
          </div>
        </div>
      </section>

      {/* Church Story */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading">Our Story</h2>
          <p className="section-text">
            Founded in 2012, Faith Church began with a simple vision: to be a lighthouse of hope in our city. What started as a small gathering has grown into a vibrant church impacting hundreds of lives through weekly worship, outreach, youth programs, and more.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-heading"  id='leadership'>Meet Our Pastors</h2>
          <div className="grid-2 leader-cards">
            <div className="leader-card">
              <img src="https://images.unsplash.com/photo-1587143987442-ae0cc2508c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdG9yfGVufDB8fDB8fHww" alt="Pastor Sarah Johnson" />
             <h4>Pastor Emmanuel Johnson</h4>
              <p>Senior Pastor</p>
            </div>
            <div className="leader-card">
              {/* <img src='../assets/images/usebg.webp' /> */}
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" alt="Pastor Emmanuel Johnson" />
              <h4>Pastor Sarah Johnson</h4>
              <p>Worship & Family Life Pastor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values">
        <div className="container">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="grid-4">
            {[
              { title: 'Faith', text: 'We trust God in all things, walking by faith and not by sight.' },
              { title: 'Community', text: 'We do life together, growing through meaningful relationships.' },
              { title: 'Worship', text: 'We worship God in spirit and truth with our whole lives.' },
              { title: 'Truth', text: 'We stand firm on the unchanging Word of God.' }
            ].map((value, i) => (
              <div className="value-card" key={i}>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Worship */}
      <section className="section call-to-worship text-center">
        <div className="container">
          <h2 className="section-heading">Join Us This Sunday</h2>
          <p className="section-text">
            We’d love to meet you! Come experience the presence of God through passionate worship, inspiring messages, and a loving community.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;





