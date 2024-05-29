import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApartmentList = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/apartments/')
      .then(response => {
        setApartments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the apartments!', error);
      });
  }, []);

  return (
    <div>
      {apartments.map(apartment => (
        <div key={apartment.id}>
          <h2>{apartment.title}</h2>
          <p>{apartment.description}</p>
          <p>{apartment.price}</p>
          <Link to={`/apartments/${apartment.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ApartmentList;