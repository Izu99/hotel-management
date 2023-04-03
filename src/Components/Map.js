import React from 'react';

function MapLocation({ id }) {
  let mapSrc;
  switch (id) {
    case 1:
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31685.79037201192!2d79.8404254248674!3d6.923583972839667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1679572560472!5m2!1sen!2slk';
      break;
    case 2:
      mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10276.715745528935!2d-73.97968014999998!3d40.758895200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259fd9f9e9845%3A0x740c290e319fbafe!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1679576185619!5m2!1sen!2sus';
      break;
    // add more cases for additional IDs and map sources
    default:
      mapSrc = '';
      break;
  }

  return (
    <iframe
      title="Google Map"
      width="1000"
      height="740"
      loading="lazy"
      allowFullScreen
      src={mapSrc}
      style={{border:0}}
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe>
  );
}

export default MapLocation;
