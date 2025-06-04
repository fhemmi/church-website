
import React, { useState } from 'react';
import './Photogallery.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d', 
    'https://images.unsplash.com/photo-1741318793834-3a7574a76139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG93ZXIlMjBvZiUyMHByYXllcnxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG92ZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bXN8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  'https://images.unsplash.com/photo-1565813086292-604790c8a97b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2h1cmNoJTIwZXZlbnR8ZW58MHx8MHx8fDA%3D',
   'https://images.unsplash.com/photo-1635282937057-dd12c9421b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNodXJjaCUyMGV2ZW50fGVufDB8fDB8fHww',
   'https://images.unsplash.com/photo-1743897918675-8f2db3c2f2f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2h1cmNoJTIwZXZlbnQlMjBvdXRkb29yfGVufDB8fDB8fHww',
   'https://images.unsplash.com/photo-1627573494274-2bf47c992bcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNodXJjaCUyMGV2ZW50JTIwb3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D',
     'https://images.unsplash.com/photo-1741318793834-3a7574a76139?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG93ZXIlMjBvZiUyMHByYXllcnxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG92ZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1524230659092-07f99a75c013?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ1bXN8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
];

const PhotoGallery = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="photo-gallery">
      <h2 className="gallery-title">Church Life in Pictures</h2>

      <div className="gallery-grid">
        {galleryImages.slice(0, visibleCount).map((url, index) => (
          <div className="gallery-item" key={index}>
            <img src={`${url}?w=600&auto=format&fit=crop&q=80`} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {visibleCount < galleryImages.length && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          See More
        </button>
      )}
    </section>
  );
};

export default PhotoGallery;
