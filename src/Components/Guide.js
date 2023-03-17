import React, { useState } from 'react';
import RatingStar from './RatingStar';

const Guide = ({ name, image, description }) => {
  const [rating, setRating] = useState(0);

  const handleRatingSelect = (rating) => {
    setRating(rating);
  };

  return (
    <div className="guide">
  <div className="image">
    <img src="https://via.placeholder.com/150" alt="Guide" />
  </div>
  <div className="content">
    {/* <div className="gd-name">Guide 1</div> */}
    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur</p> */}
    <RatingStar selected={rating} onClick={handleRatingSelect} />
  </div>
</div>

  );
};

export default Guide;
