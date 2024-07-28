import React, { useState } from 'react';

const AddHerb = () => {
  const [name, setName] = useState('');
  const [culinaryUses, setCulinaryUses] = useState('');
  const [healthBenefits, setHealthBenefits] = useState('');
  const [growingConditions, setGrowingConditions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHerb = {
      name,
      culinary_uses: culinaryUses,
      health_benefits: healthBenefits,
      growing_conditions: growingConditions,
    };

    fetch('http://localhost:5000/api/herbs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHerb),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Add Herb</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Culinary Uses:
            <input type="text" value={culinaryUses} onChange={(e) => setCulinaryUses(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Health Benefits:
            <input type="text" value={healthBenefits} onChange={(e) => setHealthBenefits(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Growing Conditions:
            <input type="text" value={growingConditions} onChange={(e) => setGrowingConditions(e.target.value)} />
          </label>
        </div>
        <button type="submit">Add Herb</button>
      </form>
    </div>
  );
};

export default AddHerb;

