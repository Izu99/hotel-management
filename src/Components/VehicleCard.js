import React from 'react';
import '../Styles/VehicleCard.css';
import img1 from '../images/vehicle1.jpg';
import img2 from '../images/vehicle2.jpg';
import img3 from '../images/vehicle3.jpg';
import img4 from '../images/vehicle4.jpg';
import img5 from '../images/vehicle5.jpg';
import img6 from '../images/vehicle6.jpg';
import img7 from '../images/vehicle5.jpg';
import img8 from '../images/vehicle3.jpg';
import img9 from '../images/vehicle1.jpg';
import img10 from '../images/vehicle2.jpg';
import img11 from '../images/vehicle4.jpg';
import img12 from '../images/vehicle3.jpg';

function VehicleCard() {
  const vehicles = [
    { id: 1, title: 'Title 1', description: 'Description 1', img: img1 },
    { id: 2, title: 'Title 2', description: 'Description 2', img: img2 },
    { id: 3, title: 'Title 3', description: 'Description 3', img: img3 },
    { id: 4, title: 'Title 4', description: 'Description 1', img: img4 },
    { id: 5, title: 'Title 5', description: 'Description 2', img: img5 },
    { id: 6, title: 'Title 6', description: 'Description 3', img: img6 },
    { id: 7, title: 'Title 7', description: 'Description 1', img: img7 },
    { id: 8, title: 'Title 8', description: 'Description 2', img: img8 },
    { id: 9, title: 'Title 9', description: 'Description 3', img: img9 },
    { id: 10, title: 'Title 10', description: 'Description 1', img: img10 },
    { id: 11, title: 'Title 11', description: 'Description 2', img: img11 },
    { id: 12, title: 'Title 12', description: 'Description 3', img: img12 },
  ];

  return (
    <div className='vehicleCardContainer'>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className='vehicleCard'>
          <div className='top'>
            <img src={vehicle.img} alt='' />
          </div>
          <div className='bottom'>
            <p className='title'>{vehicle.title}</p>
            <p className='description'>{vehicle.description}</p>
            <button type='submit'>View</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehicleCard;
