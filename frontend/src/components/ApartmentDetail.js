import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApartmentDetail = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/apartments/${id}/`)
      .then(response => {
        setApartment(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the apartment!', error);
      });
  }, [id]);

  if (!apartment) return <div>Loading...</div>;

  return (
    <div>
      <h1>{apartment.title}</h1>
      <p>{apartment.description}</p>
      <p>{apartment.price}</p>
      {/* Add more details and images as needed */}
    </div>
  );
};

export default ApartmentDetail;