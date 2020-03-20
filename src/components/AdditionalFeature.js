import React, { useState } from 'react';

const AdditionalFeature = props => {

  
  const addF = (e) => {
    e.preventDefault();
    console.log(props.feature);
    props.addFeature(props.feature)
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
