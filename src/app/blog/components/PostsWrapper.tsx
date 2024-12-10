import { useState, useEffect } from 'react';
import {Posts} from './Posts';

export const PostsWrapper = () => {
  const [posts, setPosts] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await Posts();
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return <div>{posts}</div>;
};