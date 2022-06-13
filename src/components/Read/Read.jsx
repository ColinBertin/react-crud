import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard/PostCard';
import './Read.css';

export const Read = () => {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const url = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
      console.log(data)
    }
    getPosts();
  },[]);

  return (
    <div>
      {posts.map((post) => {
        return < PostCard
                title={post.title}
                body={post.body}
              />
        })}
    </div>
  )
}
