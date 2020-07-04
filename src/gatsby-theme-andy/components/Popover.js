import React from 'react';

export default ({ reference }) => {
  let content = reference.childMdx.excerpt.toLowerCase()
  let body = content

  if (content.includes(reference.title)) {
    body = content.replace(reference.title, '')
  } 
  
  return (
    <div
      style={{
        width: 300,
        background: 'lightgray',
        padding: 8,
        borderRadius: 8,
      }}
    > 
      <h3>{reference.title}</h3>
      <p>{body}</p>
    </div>
  );
};
