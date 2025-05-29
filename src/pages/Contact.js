




// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <div className="hero-content">
//           <h1>Contact Faith Church</h1>
//           <p>We'd love to hear from you. Whether you're visiting or reaching out, we're here for you.</p>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="contact-section">
//         <div className="container contact-grid">
//           {/* Contact Form */}
//           <div className="contact-form">
//             <h2>Send Us a Message</h2>
//             <form>
//               <input type="text" placeholder="Full Name" required />
//               <input type="email" placeholder="Email Address" required />
//               <textarea placeholder="Your Message" rows="6" required></textarea>
//               <button type="submit">Send Message</button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="contact-info">
//             <h2>Visit or Reach Out</h2>
//             <p><strong>Address:</strong> 123 Faith Lane, Hope City</p>
//             <p><strong>Email:</strong> info@faithchurch.org</p>
//             <p><strong>Phone:</strong> +1 (234) 567-8901</p>
//             <p><strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
//           </div>
//         </div>

//         {/* Map Section Below Info */}
//         <div className="map-section">
//           <h3 className="map-heading">View Our Location on the Map</h3>
//           <iframe
//             title="Faith Church Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195595040265!2d-122.41941518468373!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b72a7e7fd%3A0xb5c9f40c4e6dc7e2!2sYour%20Church%20Location!5e0!3m2!1sen!2sus!4v1716048417555"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import './Contact.css';
import db from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
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
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact Faith Church</h1>
          <p>We'd love to hear from you. Whether you're visiting or reaching out, we're here for you.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
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
