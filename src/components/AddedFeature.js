import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button onClick={() => props.removeCarFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
