import React, { useState } from 'react';

const AdditionalFeature = props => {
  const addF = (e) => {
    e.preventDefault();
    
    const obj = props.feature;
    console.log(obj);
    // props.addFeature(obj);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addF}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
