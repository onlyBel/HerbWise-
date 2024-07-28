import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HerbList = () => {
  const [herbs, setHerbs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/herbs')
      .then(response => response.json())
      .then(data => setHerbs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Herb List</h1>
      <ul>
        {herbs.map(herb => (
          <li key={herb.id}>
            <Link to={`/herb/${herb.id}`}>{herb.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HerbList;

