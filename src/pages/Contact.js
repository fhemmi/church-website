

import React, { useState } from 'react';
import './Contact.css';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {

  
    useScrollAnimation(); // initialize scroll animations
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        phone:  formData.phone,
        message: formData.message,
        timestamp: new Date()
      });
      setShowSuccess(true);
      setFormData({ name: '', email: '',  phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleBack = () => {
    setShowSuccess(false);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero fade-in-up">
        <div className="hero-content">
          <h1>Contact Faith Church</h1>
          <p>We'd love to hear from you. Whether you're visiting or reaching out, we're here for you.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section fade-in-up">
        <div className="container contact-grid">
          {/* Contact Form or Success Message */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            {showSuccess ? (
              <div className="success-message">
                <p>✅ Your message has been sent successfully!</p>
                <button onClick={handleBack}>Back to Form</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message / Prayer Request"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2>Visit or Reach Out</h2>
            <p><strong>Address:</strong> 123 Faith Lane, Hope City</p>
            <p><strong>Email:</strong> info@faithchurch.org</p>
            <p><strong>Phone:</strong> +1 (234) 567-8901</p>
            <p><strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h3 className="map-heading">View Our Location on the Map</h3>
          <iframe
  title="Faith Church Location"
  src="https://www.google.com/maps/embed?pb=LONG_VALID_EMBED_URL"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </section>
    </div>
  );
};

export default Contact;
