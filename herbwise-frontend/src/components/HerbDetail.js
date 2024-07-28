import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HerbDetail = () => {
  const { id } = useParams();
  const [herb, setHerb] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/herbs/${id}`)
      .then(response => response.json())
      .then(data => setHerb(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!herb) return <div>Loading...</div>;

  return (
    <div>
      <h1>{herb.name}</h1>
      <p>Culinary Uses: {herb.culinary_uses}</p>
      <p>Health Benefits: {herb.health_benefits}</p>
      <p>Growing Conditions: {herb.growing_conditions}</p>
    </div>
  );
};

export default HerbDetail;

