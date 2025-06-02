




// import React, { useState } from 'react';
// import './Footer.css';
// import logo from '../assets/images/logo.png';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // Simple email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     // Simulate success
//     setSuccess(true);
//     setEmail('');
//   };

//   const handleCloseSuccess = () => setSuccess(false);

//   return (
//     <>
//       <footer className="custom-footer">
//         <div className="footer-content">
//           <h2 className="footer-title">TRUE CHURCH</h2>
//           <p className="footer-description">
//             A place of worship, community, and purpose. Join us in spreading love, faith, and unity.
//           </p>

//           <form className="newsletter-form" onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button type="submit">Subscribe</button>
//           </form>

//           {error && <p className="error-message">{error}</p>}
//         </div>
//       </footer>

//       <footer className="extended-footer">
//         <div className="footer-contact-container">
//           <div className="social-icons">
//             <div className="logo-section">
//               <img src={logo} alt="True Church Logo" />
//               <h1 className="text-white">TRUE CHURCH</h1>
//             </div>
//           </div>

//           <div className="footer-col">
//             <h4 className="footer-title text-white">Topics from Last Meeting</h4>
//             <ul className="footer-description text-white">
//               <li>Lorem ipsum dolor sit amet</li>
//               <li>Consectetur adipisicing elit quis nostrud</li>
//               <li>Eiusmod tempor incididunt ut labore et dolore magna</li>
//               <li>Ut enim ad minim veniam cillum</li>
//               <li>Exercitation ullamco laboris nisi ut aliquip</li>
//               <li>Duis aute irure dolor in reprehenderit in voluptat</li>
//             </ul>
//           </div>

//           <div className="footer-col">
//             <h4 className="footer-title text-white">Follow Us</h4>
//             <div className="social-links">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-tiktok"></i></a>
//             </div>
//           </div>
//         </div>

//         <div className="footer-bottom p-3">
//           <p className="text-white">&copy; {new Date().getFullYear()} True Church. All rights reserved.</p>
//         </div>
//       </footer>

//       {/* Success Message Modal */}
//       {success && (
//         <div className="form-success-overlay">
//           <div className="form-success-modal">
//             <h3>Thank You!</h3>
//             <p>You’ve successfully subscribed to our newsletter.</p>
//             <button onClick={handleCloseSuccess}>OK</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Footer;



import React, { useState } from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase'; // Make sure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok,} from '@fortawesome/free-brands-svg-icons';
// import '../index.css'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      await addDoc(collection(db, 'newsletterSubscriptions'), {
        email: email,
        subscribedAt: new Date(),
      });
      setSuccess(true);
      setEmail('');
    } catch (err) {
      console.error("Firestore error:", err);
      setError('Failed to subscribe. Please try again later.');
    }
  };

  const handleCloseSuccess = () => setSuccess(false);

  return (
    <>
      <footer className="custom-footer">
        <div className="footer-content">
          <h2 className="footer-title"> CHURCH</h2>
          <p className="footer-description">
            A place of worship, community, and purpose. Join us in spreading love, faith, and unity. Suscribe to our News letter
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          {error && <p className="error-message">{error}</p>}
        </div>
      </footer>

      <footer className="extended-footer">
        <div className="footer-contact-container">
          <div className="social-icons">
            <div className="logo-section">
              <img src={logo} alt="True Church Logo" />
              <h1 className="text-white"> CHURCH</h1>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title text-white">Topics from Last Meeting</h4>
            <ul className="footer-description text-white">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipisicing elit quis nostrud</li>
              <li>Eiusmod tempor incididunt ut labore et dolore magna</li>
              <li>Ut enim ad minim veniam cillum</li>
              <li>Exercitation ullamco laboris nisi ut aliquip</li>
              <li>Duis aute irure dolor in reprehenderit in voluptat</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title text-white">Follow Us</h4>
           <div className="social-links">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTiktok} />
  </a>
</div>

          </div>
        </div>

        <div className="footer-bottom p-3">
          <p className="text-white fst-italic">&copy; {new Date().getFullYear()} True Church. All rights reserved.</p>
        </div>
      </footer>

      {/* Success Message Modal */}
      {success && (
        <div className="form-success-overlay">
          <div className="form-success-modal">
            <h3>Thank You!</h3>
            <p>You’ve successfully subscribed to our newsletter.</p>
            <button onClick={handleCloseSuccess}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
