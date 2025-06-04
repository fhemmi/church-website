
import React from 'react';
import './Event.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';



const events = [


  
  {
    title: 'Sunday Worship Service',
    date: 'Every Sunday at 10:00 AM',
    location: 'Faith Church Auditorium',
    description: 'Join us for a powerful time of worship, the Word, and fellowship.',
    image: 'https://images.unsplash.com/photo-1509223197845-458d87318791',
  },
  {
    title: 'Youth Empowerment Night',
    date: 'June 14, 2025 - 6:00 PM',
    location: 'Youth Hall, Faith Church',
    description: 'An evening of worship, fun, and life-changing teaching for our youth.',
    image: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455',
  },
  {
    title: 'Community Outreach',
    date: 'June 28, 2025 - 9:00 AM',
    location: 'City Center, Downtown',
    description: 'Come be the hands and feet of Jesus as we serve our city.',
    image: 'https://images.unsplash.com/photo-1509223197845-458d87318791',
  }

  
];

const Events = () => {
 
   useScrollAnimation(); // initialize scroll animations
  
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

  return (
    <div className="events-wrapper" id='events'>
      <section className="events-hero fade-in-up">
        <div className="overlay">
          <h1>Upcoming Events at Faith Church</h1>
          <p>Be part of our growing community and experience God in every gathering.</p>
        </div>
      </section>

      <section className="events-section  fade-in-up">
        <div className="container">
          <h2 className="section-heading">Don’t Miss Out</h2>
          <div className="event-grid">
            {events.map((event, index) => (
              <div className="event-card" key={index}>
                <img src={event.image} alt={event.title} />
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-location"><strong>Location:</strong> {event.location}</p>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

