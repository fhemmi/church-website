import React from 'react';
import '../pages/Event.css'; // Optional if you want isolated styling

const EventCard = ({ title, date, location, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="event-date">{date}</p>
      <p className="event-location">{location}</p>
    </div>
  );
};

export default EventCard;
