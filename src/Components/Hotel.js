import React, { useState } from 'react';
import RatingStar from './RatingStar';

const Hotel = ({ name, image, description }) => {
  const [rating, setRating] = useState(0);

  const handleRatingSelect = (rating) => {
    setRating(rating);
  };

  return (
    <div className="hotel">
      <div className="image">
        <img src={image} alt="Hotel" />
      </div>
      <div className="content">
        <div className="ht-name">{name}</div>
        <p>{description}</p>
        <RatingStar selected={rating} onClick={handleRatingSelect} />
      </div>
    </div>
  );
};

export default Hotel;
