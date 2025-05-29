import React from 'react';
import '../pages/Sermons.css'; // Optional if you want isolated styling

const SermonCard = ({ title, speaker, date, image }) => {
  return (
    <div className="sermon-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="sermon-speaker">{speaker}</p>
      <p className="sermon-date">{date}</p>
    </div>
  );
};

export default SermonCard;


