import React from 'react';
import '../Styles/DestinationCard.css';
import img1 from '../images/destination1.jpg';
import img2 from '../images/destination2.jpg';
import img3 from '../images/destination3.jpg';
import img4 from '../images/destination4.jpg';
import img5 from '../images/destination5.jpg';
import img6 from '../images/destination6.jpg';

function DestinationCard() {
  const destinations = [
    { id: 1, title: 'Sigiriya', description: 'Ancient rock fortress in Sri Lanka with frescoes and lion paw entrance, a UNESCO site.', img: img1 },
    { id: 2, title: 'Pinnawala', description: 'Pinnawala is an elephant orphanage in Sri Lanka, rescuing elephants.', img: img2 },
    { id: 3, title: 'Title 3', description: 'Description 3', img: img3 },
    { id: 4, title: 'Title 4', description: 'Description 1', img: img4 },
    { id: 5, title: 'Title 5', description: 'Description 2', img: img5 },
    { id: 6, title: 'Title 6', description: 'Description 3', img: img6 },
  ];

  return (
    <div className='destinationCardContainer'>
      {destinations.map((destination) => (
        <div key={destination.id} className='destinationCard'>
          <div className='top'>
            <img src={destination.img} alt='' />
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
