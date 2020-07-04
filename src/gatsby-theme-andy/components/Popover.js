import React from 'react';

export default ({ reference }) => {
  return (
    <div
      style={{
        width: 300,
        background: 'lightgray',
        padding: 8,
        borderRadius: 8,
      }}
    > 
      <h2>{reference.title}</h2>
      <p>{reference.childMdx.excerpt}</p>
    </div>
  );
};
