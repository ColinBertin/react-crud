import React from 'react';
import './PostCard.css';

export const PostCard = ({title, body}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}
