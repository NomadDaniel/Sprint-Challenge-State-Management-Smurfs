import React from 'react';

const SmurfCard = ( props ) => {
  return (
    <div className="smurf">
      <h4>&nbsp;Name:{ props.data.name } |</h4>
      <h4 >&nbsp;Age: { props.data.age } |</h4>
      <h4>&nbsp;Height: { props.data.height } </h4>
    </div>
  );
};

export default SmurfCard;