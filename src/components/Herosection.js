


// import React from 'react';
// import Typewriter from 'typewriter-effect';
// import '../pages/Home.css';

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <div className="hero-content animate-fade-slide">
//         <h1 >Welcome to True Church</h1>

//         <div className="typewriter-text p-3 fst-italic">
//           <Typewriter
//             options={{
//               strings: [
//                 'Where faith, family, and purpose come together.',
//                 'You are Blessed.',
//                 'We Love to Have You.',
//                 'Join Us in Worship.',
//               ],
//               autoStart: true,
//               loop: true,
//               delay: 50,
//             }}
//           />
//         </div>

//         <button>Join Us This Sunday</button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




import React, { useState, useEffect } from 'react';
import '../pages/Home.css';
// import '../components/Herosection.css'

const HeroSection = () => {
  const messages = [
    'Welcome to True Church',
    'You Are Blessed',
    'We Love to Have You',
  ];

  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === messages.length) {
      setIndex(0);
      return;
    }

    if (
      subIndex === messages[index].length + 1 &&
      !deleting
    ) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex(prev => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev =>
        deleting ? prev - 1 : prev + 1
      );
      setText(messages[index].substring(0, subIndex));
    }, deleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section className="hero-section">
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
