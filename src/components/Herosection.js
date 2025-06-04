



import React, { useState, useEffect } from 'react';
import '../pages/Home.css';
// import '../components/Herosection.css'
// import useScrollAnimation from '../hooks/useScrollAnimation';

const messages = [
  'Welcome to Faith Church',
  'You Are Blessed',
  'We Love to Have You',
];

const HeroSection = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === messages.length) {
      setIndex(0);
      return;
    }

    if (subIndex === messages[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => (deleting ? prev - 1 : prev + 1));
      setText(messages[index].substring(0, subIndex));
    }, deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]); // ✅ removed 'messages'

  return (
    <section className="hero-section  fade-in-up">
      <div className="overlay" />
      <div className="hero-content">
        <h1 className="typewriter-text">{text}</h1>
        <p>Where faith, family, and purpose come together.</p>
        <a href="#contact" className="hero-btn">Join Us This Sunday</a>
      </div>
    </section>
  );
};

export default HeroSection;
