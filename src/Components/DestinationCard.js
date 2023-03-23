import React from 'react';
import '../Styles/DestinationCard.css';
import img from '../images/tourist-background-image.jpg'

function DestinationCard() {
  const destinations = [
    { id: 1, title: 'Title 1', description: 'Description 1', img: {img} },
    { id: 2, title: 'Title 2', description: 'Description 2', img: {img} },
    { id: 3, title: 'Title 3', description: 'Description 3', img: {img} },
    { id: 4, title: 'Title 4', description: 'Description 4', img: {img} },
    { id: 5, title: 'Title 5', description: 'Description 5', img: {img} },
    { id: 6, title: 'Title 6', description: 'Description 6', img: {img} },
  ];

  return (
    <div className='destinationCardContainer'>
      {destinations.map((destination) => (
        <div key={destination.id} className='destinationCard'>
          <div className='top'>
            <img src={img} alt='' />
          </div>
          <div className='bottom'>
            <p className='title'>{destination.title}</p>
            <p className='description'>{destination.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DestinationCard;
